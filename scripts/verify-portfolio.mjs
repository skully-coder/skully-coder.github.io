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

const readJpegDimensions = (filePath) => {
  const buffer = readFileSync(filePath);
  let offset = 2;

  if (buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    fail(`${filePath} is not a JPEG file`);
  }

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    const isStartOfFrame = marker >= 0xc0 && marker <= 0xc3;

    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + length;
  }

  fail(`could not read JPEG dimensions for ${filePath}`);
};

const requiredBundleText = [
  "Abhinav Agrawal",
  "Optimization engineer",
  "Oracle Transportation Management",
  "35% efficiency gain",
  "50% faster execution",
  "ShikshaAI",
  "Cupidity",
  "255 commits",
  "ShikshaAI build depth",
  "Public GitHub README focus",
  "Generative AI applications",
  "Agent-based systems",
  "Backend systems in Java and Python",
  "Developing-region educator workflows",
  "Lesson planning, assessment generation, and resource creation",
  "Multilingual and diverse classroom support",
  "Genkit with Google Gemini models",
  "Resume artifact",
  "GitHub profile",
  "ShikshaAI repository",
  "Role, patent, education, certification, and impact details.",
  "Repository count, follower signal, and public README focus.",
  "Stars, forks, commits, README evidence, and live app link.",
  "Oracle SCM blog",
  "Public write-up for the Logistics Execution Command Center Agentic App.",
  "https://blogs.oracle.com/scm/logistics-execution-command-center-agentic-ai",
  "Logistics Execution Command Center",
  "OTM + WMS agentic app",
  "Read Oracle blog",
  "https://schema.org",
  "EducationalOccupationalCredential",
  "https://skully-coder.github.io/social-preview.jpg",
  "og:image:width",
  "og:image:height",
  "twitter:image:alt",
  "https://skully-coder.github.io/sitemap.xml",
  "https://skully-coder.github.io/site.webmanifest",
  "CV-backed scope",
  "Product narrative",
];

const forbiddenText = ["Competitive Programming", "Codeforces", "LeetCode"];

const fail = (message) => {
  console.error(`Portfolio verification failed: ${message}`);
  process.exit(1);
};

if (!existsSync(htmlPath)) {
  fail("deploy-dist/index.html is missing. Run npm run build-gh first.");
}

const html = readFileSync(htmlPath, "utf8");
const referencedAssets = [...html.matchAll(assetPattern)].map((match) => match[1]);
const expectedFiles = new Set(["index.html", "robots.txt", "sitemap.xml", "social-preview.jpg", "favicon.svg", "site.webmanifest", ...referencedAssets]);

for (const asset of referencedAssets) {
  if (!existsSync(join(dist, asset))) {
    fail(`deploy-dist/index.html references missing asset /${asset}`);
  }
}

const scripts = referencedAssets.filter((asset) => asset.endsWith(".js"));
if (scripts.length !== 1) {
  fail(`expected one JavaScript entrypoint, found ${scripts.length}`);
}

const bundle = readFileSync(join(dist, scripts[0]), "utf8");
const combinedOutput = `${html}\n${bundle}`;

for (const match of bundle.matchAll(runtimeAssetPattern)) {
  expectedFiles.add(match[0]);
}

for (const asset of [...expectedFiles]) {
  if (/\.(?:css|js)$/.test(asset)) {
    const assetContent = readFileSync(join(dist, asset), "utf8");
    for (const match of assetContent.matchAll(sourceMapPattern)) {
      expectedFiles.add(match[1]);
    }
  }
}

for (const asset of expectedFiles) {
  if (!existsSync(join(dist, asset))) {
    fail(`expected deploy asset is missing: ${asset}`);
  }
}

const robots = readFileSync(join(dist, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://skully-coder.github.io/sitemap.xml")) {
  fail("robots.txt is missing sitemap declaration");
}

const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
if (!sitemap.includes("<loc>https://skully-coder.github.io/</loc>")) {
  fail("sitemap.xml is missing the portfolio URL");
}

if (!/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(sitemap)) {
  fail("sitemap.xml is missing an ISO date lastmod entry");
}

const manifest = JSON.parse(readFileSync(join(dist, "site.webmanifest"), "utf8"));
if (manifest.name !== "Abhinav Agrawal Portfolio" || manifest.icons?.[0]?.src !== "/favicon.svg") {
  fail("site.webmanifest is missing portfolio identity or icon metadata");
}

const socialPreviewDimensions = readJpegDimensions(join(dist, "social-preview.jpg"));
if (socialPreviewDimensions.width !== 1200 || socialPreviewDimensions.height !== 630) {
  fail(`social-preview.jpg must be 1200x630, found ${socialPreviewDimensions.width}x${socialPreviewDimensions.height}`);
}

const decodedBundle = bundle.replace(/\\"/g, '"');
const structuredSignals = [
  '"@graph"',
  '"WebSite"',
  '"ProfilePage"',
  '"Person"',
  '"@id":"https://skully-coder.github.io/#profile-page"',
  "mainEntity",
  "primaryImageOfPage",
  "#abhinav-agrawal",
  "#project-shiksha-ai",
  "#project-cupidity",
];
for (const text of structuredSignals) {
  if (!decodedBundle.includes(text)) {
    fail(`missing structured data signal: ${text}`);
  }
}

for (const text of requiredBundleText) {
  if (!combinedOutput.includes(text)) {
    fail(`missing required portfolio signal: ${text}`);
  }
}

for (const text of forbiddenText) {
  if (combinedOutput.includes(text)) {
    fail(`found forbidden portfolio reference: ${text}`);
  }
}

const removeUnexpectedFiles = () => {
  let removed = 0;
  for (const file of readdirSync(dist)) {
    if (!expectedFiles.has(file)) {
      unlinkSync(join(dist, file));
      removed += 1;
    }
  }
  return removed;
};

removeUnexpectedFiles();
await delay(1200);
removeUnexpectedFiles();

for (const file of readdirSync(dist)) {
  if (!expectedFiles.has(file)) {
    fail(`stale unreferenced file remains in deploy-dist: ${file}`);
  }
}

console.log(`Portfolio verification passed: ${expectedFiles.size} generated files checked.`);
