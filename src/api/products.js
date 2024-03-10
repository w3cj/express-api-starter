const express = require('express');
const router = express.Router();

let chrome = {};
let puppeteer;

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}

router.get('/', async(req, res) => {


  let options = {};
  let meadowProducts=[]
    let meadowBrands=[]

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    options = {
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    };
  }

    let browser = await puppeteer.launch(options);

    let page = await browser.newPage();

    page.on("response", async (response) => {
      const url = response.url();

      if (
        url.includes(
          "https://daffodil.getmeadow.com/organizations/1672/products?source=web-embed"
        )
      ) {
        response.json().then((token) => {
          token.data.products ? (meadowProducts = token.data.products) : null;
          token.meta.brands ? (meadowBrands = token.meta.brands) : null;
        });
      }
    });

    await page.goto("https://embed.getmeadow.com/organizations/1672", {
      waitUntil: "networkidle0",
    });


    await browser.close();





    res.send( meadowProducts );








  
  // res.json(['😀', '😳', '🙄']);
});

module.exports = router;
