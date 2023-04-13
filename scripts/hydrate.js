const hydrate = require('../hydrate');
const { renderToString } = hydrate;
const fs = require('fs');

const html = fs.readFileSync('src/index.html', { encoding: 'utf-8'});

renderToString(html).then(data => {
  fs.writeFileSync('www/index-hydrated.html', data.html);
});

