const fs = require('fs');
const html = fs.readFileSync('old-portfolio.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>[\s\S]*?<\/body>/);
const js = scriptMatch[1];

// Evaluate CASES in a sandbox or clean it
const casesStart = js.indexOf('const CASES = [');
const casesEnd = js.indexOf('const CERTS', casesStart); // or find closing ];
// Let's find where CASES ends
const casesCode = js.slice(casesStart, js.indexOf('function caseDetailHTML'));
const cases = eval(casesCode.replace('const CASES =', '') + ';');

console.log('Total cases:', cases.length);
cases.forEach((c, idx) => {
  console.log(`\n--- Case ${idx + 1}: ${c.id} (${c.platform}) ---`);
  console.log(`Title EN: ${c.title_en}`);
  console.log(`Title AR: ${c.title_ar}`);
  console.log(`Desc EN: ${c.desc_en}`);
  console.log(`Revenue: ${c.revenue}`);
  console.log(`Has img: ${!!c.img} (length: ${c.img ? c.img.length : 0})`);
  console.log(`Approach:`, c.approach);
  console.log(`GSC:`, c.gscMetrics);
  console.log(`GA:`, c.gaMetrics);
});
