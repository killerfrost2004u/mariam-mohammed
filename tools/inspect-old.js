const fs = require('fs');
const html = fs.readFileSync('old-portfolio.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>[\s\S]*?<\/body>/);
const js = scriptMatch[1];

// Extract CASES without the large base64
// We can parse or evaluate just the metadata
const casesMeta = [];
const regex = /id\s*:\s*"([^"]+)"[\s\S]*?title_en\s*:\s*"([^"]+)"[\s\S]*?platform\s*:\s*"([^"]+)"/g;
let m;
while ((m = regex.exec(js)) !== null) {
  casesMeta.push({ id: m[1], title: m[2], platform: m[3] });
}
console.log('Cases found:', JSON.stringify(casesMeta, null, 2));

// Check ACHIEVEMENTS
const achMatch = js.match(/const ACHIEVEMENTS\s*=\s*(\[[\s\S]*?\]);/);
if (achMatch) {
  console.log('ACHIEVEMENTS snippet:', achMatch[1].slice(0, 500));
}

// Check CERTS
const certsMatch = js.match(/const CERTS\s*=\s*(\[[\s\S]*?\]);/);
if (certsMatch) {
  console.log('CERTS snippet:', certsMatch[1]);
}
