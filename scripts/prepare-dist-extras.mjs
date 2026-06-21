import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "deploy-dist");
const heroImage = join(root, "src", "images", "abhinav-hero.jpg");
const favicon = join(root, "src", "images", "favicon.svg");
const siteUrl = "https://skully-coder.github.io/";
const lastModified = new Date().toISOString().slice(0, 10);

if (!existsSync(dist)) {
  mkdirSync(dist, { recursive: true });
}

const socialPreview = join(dist, "social-preview.jpg");
copyFileSync(heroImage, socialPreview);
execFileSync("sips", ["--resampleWidth", "1200", socialPreview], { stdio: "ignore" });
execFileSync("sips", ["--cropToHeightWidth", "630", "1200", socialPreview], { stdio: "ignore" });
copyFileSync(favicon, join(dist, "favicon.svg"));

writeFileSync(
  join(dist, "robots.txt"),
  [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${siteUrl}sitemap.xml`,
    "",
  ].join("\n"),
);

writeFileSync(
  join(dist, "sitemap.xml"),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "  <url>",
    `    <loc>${siteUrl}</loc>`,
    `    <lastmod>${lastModified}</lastmod>`,
    "    <changefreq>monthly</changefreq>",
    "    <priority>1.0</priority>",
    "  </url>",
    "</urlset>",
    "",
  ].join("\n"),
);

writeFileSync(
  join(dist, "site.webmanifest"),
  `${JSON.stringify(
    {
      name: "Abhinav Agrawal Portfolio",
      short_name: "Abhinav Agrawal",
      description: "Optimization engineering, packing algorithms, and agentic AI workflows for enterprise transportation systems.",
      start_url: "/",
      scope: "/",
      display: "browser",
      background_color: "#ffffff",
      theme_color: "#12161d",
      icons: [
        {
          src: "/favicon.svg",
          sizes: "any",
          type: "image/svg+xml",
          purpose: "any maskable",
        },
      ],
    },
    null,
    2,
  )}\n`,
);

console.log("Prepared deploy-dist SEO extras: social-preview.jpg, favicon.svg, robots.txt, sitemap.xml, site.webmanifest.");
