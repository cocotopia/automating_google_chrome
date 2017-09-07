const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  
  page.setViewport({
    width: 1200, 
    height: 800
  });

  // Open page.
  await page.goto('http://elcomercio.pe', {waitUntil: 'networkidle'});

  // Show search form.
  await page.click('.search-link');

  // Focus input field.
  await page.focus('.search-controls input');

  // Type in query.
  await page.type('Eliminatorias Russia 2018', {delay: 100});

  // Submit the form.
  const searchForm = await page.$('#search-content .search-form');
  await searchForm.evaluate(searchForm => searchForm.submit());

  // Keep the browser open.
  // browser.close();
})();