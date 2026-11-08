const fs = require('fs');
const html = fs.readFileSync('old-portfolio.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>[\s\S]*?<\/body>/);
const js = scriptMatch[1];

const i18nStart = js.indexOf('const I18N = {');
const i18nEnd = js.indexOf('const PLATFORMS = [');
const i18nCode = js.slice(i18nStart, i18nEnd);
const I18N = eval(i18nCode.replace('const I18N =', '') + ';');

console.log('I18N keys:', Object.keys(I18N.en));
console.log('Sample EN:', {
  hero_title_1: I18N.en.hero_title_1,
  hero_title_2: I18N.en.hero_title_2,
  hero_sub: I18N.en.hero_sub,
  role_pill: I18N.en.role_pill
});
console.log('Sample AR:', {
  hero_title_1: I18N.ar.hero_title_1,
  hero_title_2: I18N.ar.hero_title_2,
  hero_sub: I18N.ar.hero_sub,
  role_pill: I18N.ar.role_pill
});
