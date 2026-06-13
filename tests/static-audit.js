const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const htmlFiles = fs
  .readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .sort();

const requiredFiles = [
  "assets/styles/site.css",
  "assets/scripts/site.js",
  "assets/preview/index-desktop.png",
  "education.html",
  "projects.html",
  "README.md",
];

const brokenUtf8Pattern = /[\u00c2\u00c3\u00e2]/;
const failures = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

for (const requiredFile of requiredFiles) {
  assert(fileExists(requiredFile), `Missing required file: ${requiredFile}`);
}

assert(htmlFiles.length >= 5, "Expected the main portfolio HTML pages to exist.");
assert(!fileExists("education-projects.html"), "The old combined education-projects.html page should not remain after splitting Education and Projects.");

for (const file of htmlFiles) {
  const html = readProjectFile(file);

  assert(html.includes('<html lang="en">'), `${file}: missing language declaration.`);
  assert(html.includes('meta name="viewport"'), `${file}: missing viewport meta tag.`);
  assert(html.includes('meta name="description"'), `${file}: missing page description.`);
  assert(html.includes("assets/styles/site.css"), `${file}: missing shared stylesheet.`);
  assert(html.includes("assets/scripts/site.js"), `${file}: missing shared script.`);
  assert(!html.includes("style.css"), `${file}: references legacy style.css.`);
  assert(!html.includes("script.js"), `${file}: references legacy script.js.`);
  assert(!brokenUtf8Pattern.test(html), `${file}: contains likely broken UTF-8 characters.`);
  assert(!/style="/.test(html), `${file}: contains inline style attributes.`);

  const externalLinks = html.match(/<a\b[^>]*target="_blank"[^>]*>/g) || [];
  for (const link of externalLinks) {
    assert(/rel="[^"]*noopener[^"]*noreferrer[^"]*"/.test(link), `${file}: external link missing noopener noreferrer.`);
  }

  const localLinks = [...html.matchAll(/href="([^"]+\.html)"/g)]
    .map((match) => match[1])
    .filter((href) => !/^(https?:|mailto:|#)/.test(href));
  for (const href of localLinks) {
    assert(fileExists(href), `${file}: local link points to missing file: ${href}`);
  }
}

if (failures.length > 0) {
  console.error("Static audit failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Static audit passed for ${htmlFiles.length} HTML pages.`);
