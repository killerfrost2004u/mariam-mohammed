const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('old-portfolio.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>[\s\S]*?<\/body>/);
const js = scriptMatch[1];

const assetsDir = path.join(__dirname, '..', 'assets', 'proofs');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Extract CASES images
const casesStart = js.indexOf('const CASES = [');
const casesCode = js.slice(casesStart, js.indexOf('function caseDetailHTML'));
const cases = eval(casesCode.replace('const CASES =', '') + ';');

cases.forEach(c => {
  if (c.img && c.img.startsWith('data:image/')) {
    const match = c.img.match(/^data:image\/([a-zA-Z0-9]+);base64,(.+)$/);
    if (match) {
      const ext = match[1];
      const data = Buffer.from(match[2], 'base64');
      const filename = `case-${c.id}.${ext}`;
      const filepath = path.join(assetsDir, filename);
      fs.writeFileSync(filepath, data);
      console.log(`Saved ${filename} (${(data.length / 1024).toFixed(1)} KB)`);
    }
  }
});

// Extract CERTS images
const certsStart = js.indexOf('const CERTS = [');
const certsCode = js.slice(certsStart, js.indexOf('const CASES'));
const certs = eval(certsCode.replace('const CERTS =', '') + ';');

certs.forEach((cert, idx) => {
  if (cert.img && cert.img.startsWith('data:image/')) {
    const match = cert.img.match(/^data:image\/([a-zA-Z0-9]+);base64,(.+)$/);
    if (match) {
      const ext = match[1];
      const data = Buffer.from(match[2], 'base64');
      const filename = `cert-${idx + 1}.${ext}`;
      const filepath = path.join(assetsDir, filename);
      fs.writeFileSync(filepath, data);
      console.log(`Saved ${filename} (${(data.length / 1024).toFixed(1)} KB)`);
    }
  }
});
