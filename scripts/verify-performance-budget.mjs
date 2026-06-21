import { existsSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "deploy-dist");

const kilobytes = 1024;
const budgets = {
  ".css": 80 * kilobytes,
  ".html": 10 * kilobytes,
  ".jpeg": 600 * kilobytes,
  ".jpg": 600 * kilobytes,
  ".js": 260 * kilobytes,
  ".json": 10 * kilobytes,
  ".pdf": 250 * kilobytes,
  ".svg": 10 * kilobytes,
  ".txt": 5 * kilobytes,
  ".webmanifest": 10 * kilobytes,
  ".xml": 10 * kilobytes,
};

const sourceMapBudget = 600 * kilobytes;
const totalBudget = 2_200 * kilobytes;

const fail = (message) => {
  console.error(`Performance budget verification failed: ${message}`);
  process.exit(1);
};

if (!existsSync(dist)) {
  fail("deploy-dist is missing. Run npm run build-gh first.");
}

let totalBytes = 0;
const oversized = [];

for (const file of readdirSync(dist)) {
  const filePath = join(dist, file);
  const size = statSync(filePath).size;
  const ext = extname(file);
  const budget = file.endsWith(".map") ? sourceMapBudget : budgets[ext];

  totalBytes += size;

  if (!budget) {
    oversized.push(`${file} has no configured budget`);
    continue;
  }

  if (size > budget) {
    oversized.push(`${file} is ${(size / kilobytes).toFixed(1)} KB, budget ${(budget / kilobytes).toFixed(1)} KB`);
  }
}

if (totalBytes > totalBudget) {
  oversized.push(`deploy-dist total is ${(totalBytes / kilobytes).toFixed(1)} KB, budget ${(totalBudget / kilobytes).toFixed(1)} KB`);
}

if (oversized.length > 0) {
  fail(oversized.join("; "));
}

console.log(`Performance budget verification passed: ${(totalBytes / kilobytes).toFixed(1)} KB total.`);
