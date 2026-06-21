import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appPath = join(root, "src", "App.jsx");
const stylesPath = join(root, "src", "styles.css");
const dist = join(root, "deploy-dist");

const fail = (message) => {
  console.error(`Accessibility verification failed: ${message}`);
  process.exit(1);
};

const appSource = readFileSync(appPath, "utf8");
const styles = readFileSync(stylesPath, "utf8");

const requiredSourceSignals = [
  'className="skip-link"',
  'href="#expertise"',
  'aria-label="Primary navigation"',
  'aria-label="Primary engineering domains"',
  'aria-label="Career metrics"',
  'aria-label="Portfolio evidence trail"',
  'aria-label="Portfolio source references"',
  'aria-label="Best fit opportunities"',
  'alt="Abhinav Agrawal smiling at an event"',
  'alt="Desk with engineering workspace materials"',
  'rel="noopener noreferrer"',
];

for (const signal of requiredSourceSignals) {
  if (!appSource.includes(signal)) {
    fail(`missing source accessibility signal: ${signal}`);
  }
}

const targetBlankCount = [...appSource.matchAll(/target="_blank"/g)].length;
const noopenerCount = [...appSource.matchAll(/rel="noopener noreferrer"/g)].length;
if (targetBlankCount !== noopenerCount) {
  fail(`external link safety mismatch: ${targetBlankCount} target=_blank links, ${noopenerCount} noopener rel attributes`);
}

const requiredStyleSignals = ["a:focus-visible", "button:focus-visible", ".skip-link:focus", "scroll-margin-top", "scroll-behavior: smooth"];
for (const signal of requiredStyleSignals) {
  if (!styles.includes(signal)) {
    fail(`missing focus/navigation style signal: ${signal}`);
  }
}

if (existsSync(dist)) {
  const htmlPath = join(dist, "index.html");
  if (!existsSync(htmlPath)) {
    fail("deploy-dist exists but index.html is missing");
  }

  const html = readFileSync(htmlPath, "utf8");
  const jsAsset = readdirSync(dist).find((file) => file.endsWith(".js"));
  if (!jsAsset) {
    fail("deploy-dist is missing a JavaScript bundle");
  }

  const bundle = readFileSync(join(dist, jsAsset), "utf8");
  const combinedOutput = `${html}\n${bundle}`;
  for (const signal of ["Skip to content", "Primary navigation", "Portfolio source references", "Abhinav Agrawal smiling at an event"]) {
    if (!combinedOutput.includes(signal)) {
      fail(`missing generated accessibility signal: ${signal}`);
    }
  }
}

console.log("Accessibility verification passed.");
