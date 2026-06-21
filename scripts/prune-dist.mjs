import { existsSync, readdirSync, readFileSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "deploy-dist");
const htmlPath = join(dist, "index.html");

const assetPattern = /(?:href|src)="\/([^"]+)"/g;
const runtimeAssetPattern = /[A-Za-z0-9_ ().-]+\.(?:jpg|jpeg|png|svg|pdf)/g;
const sourceMapPattern = /sourceMappingURL=([^\s*]+)/g;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const keep = new Set(["index.html", "robots.txt", "sitemap.xml", "social-preview.jpg", "favicon.svg", "site.webmanifest"]);

if (!existsSync(htmlPath)) {
  throw new Error("deploy-dist/index.html is missing. Run npm run build-gh first.");
}

const addSourceMaps = (asset) => {
  const assetPath = join(dist, asset);
  if (!existsSync(assetPath) || !/\.(?:css|js)$/.test(asset)) {
    return;
  }

  const content = readFileSync(assetPath, "utf8");
  for (const match of content.matchAll(sourceMapPattern)) {
    keep.add(match[1]);
  }
};

const html = readFileSync(htmlPath, "utf8");
for (const match of html.matchAll(assetPattern)) {
  keep.add(match[1]);
  addSourceMaps(match[1]);
}

const entryScripts = [...keep].filter((asset) => asset.endsWith(".js"));
for (const script of entryScripts) {
  const scriptPath = join(dist, script);
  if (!existsSync(scriptPath)) {
    continue;
  }

  const content = readFileSync(scriptPath, "utf8");
  for (const match of content.matchAll(runtimeAssetPattern)) {
    keep.add(match[0]);
  }
}

const prune = () => {
  let removed = 0;
  for (const file of readdirSync(dist)) {
    if (!keep.has(file)) {
      unlinkSync(join(dist, file));
      removed += 1;
    }
  }
  return removed;
};

const firstPass = prune();
await delay(1200);
const secondPass = prune();

console.log(`Pruned deploy-dist: kept ${keep.size} files, removed ${firstPass + secondPass} stale files.`);
