import { createServer } from "node:http";
import { createReadStream, existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize, relative } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "deploy-dist");
const htmlPath = join(dist, "index.html");
const assetPattern = /(?:href|src)="\/([^"]+)"/g;

const contentTypes = new Map([
  [".css", "text/css"],
  [".html", "text/html"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript"],
  [".json", "application/json"],
  [".pdf", "application/pdf"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain"],
  [".webmanifest", "application/manifest+json"],
  [".xml", "application/xml"],
]);

const fail = (message) => {
  console.error(`Deploy HTTP smoke test failed: ${message}`);
  process.exit(1);
};

if (!existsSync(htmlPath)) {
  fail("deploy-dist/index.html is missing. Run npm run build-gh first.");
}

const safePath = (urlPath) => {
  const pathname = decodeURIComponent(new URL(urlPath, "http://127.0.0.1").pathname);
  const requested = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const normalized = normalize(requested);
  const filePath = join(dist, normalized);

  if (relative(dist, filePath).startsWith("..")) {
    return null;
  }

  return filePath;
};

const server = createServer((req, res) => {
  const filePath = safePath(req.url ?? "/");
  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    res.writeHead(404).end();
    return;
  }

  res.writeHead(200, {
    "Content-Length": statSync(filePath).size,
    "Content-Type": contentTypes.get(extname(filePath)) ?? "application/octet-stream",
  });

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  createReadStream(filePath).pipe(res);
});

const listen = () =>
  new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      resolve(server.address().port);
    });
  });

const requestHead = (port, path) =>
  new Promise((resolve, reject) => {
    const req = new Request(`http://127.0.0.1:${port}${path}`, { method: "HEAD" });
    fetch(req)
      .then((response) => {
        resolve({
          contentType: response.headers.get("content-type"),
          path,
          status: response.status,
        });
      })
      .catch(reject);
  });

const html = readFileSync(htmlPath, "utf8");
const htmlAssets = [...html.matchAll(assetPattern)].map((match) => `/${match[1]}`);
const smokePaths = [
  "/",
  ...htmlAssets,
  "/site.webmanifest",
  "/favicon.svg",
  "/sitemap.xml",
  "/robots.txt",
  "/social-preview.jpg",
  "/Abhinav_Agrawal_CV.a83b64cc.pdf",
  "/abhinav-hero.21dd3da0.jpg",
];

const port = await listen();

try {
  const results = await Promise.all([...new Set(smokePaths)].map((path) => requestHead(port, path)));
  const failures = results.filter((result) => result.status !== 200);

  for (const result of results) {
    console.log(`${result.status} ${result.path} ${result.contentType}`);
  }

  if (failures.length > 0) {
    fail(`unexpected HTTP status: ${failures.map((failure) => `${failure.path} -> ${failure.status}`).join(", ")}`);
  }

  console.log(`Deploy HTTP smoke test passed: ${results.length} routes checked.`);
} finally {
  server.close();
}
