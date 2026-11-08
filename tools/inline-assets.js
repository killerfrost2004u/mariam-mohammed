const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const htmlPath = path.join(rootDir, 'index.html');
const cssPath = path.join(rootDir, 'css', 'styles.css');
const jsPath = path.join(rootDir, 'js', 'main.js');

let html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

const cssLink = '<link rel="stylesheet" href="css/styles.css">';
const jsScript = '<script src="js/main.js"></script>';

if (!html.includes(cssLink)) {
  console.error('Error: Could not find css link tag:', cssLink);
  process.exit(1);
}

if (!html.includes(jsScript)) {
  console.error('Error: Could not find js script tag:', jsScript);
  process.exit(1);
}

// Inline CSS
const inlineStyle = `<style>\n${css}\n</style>`;
html = html.replace(cssLink, inlineStyle);

// Inline JS
const inlineScript = `<script>\n${js}\n</script>`;
html = html.replace(jsScript, inlineScript);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully inlined CSS and JS into index.html');
console.log('New index.html length:', html.length, 'bytes');
