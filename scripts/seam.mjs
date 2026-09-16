import {chromium} from 'playwright';
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--remote-debugging-port=9333','--enable-unsafe-swiftshader']});const page=await browser.newPage({viewport:{width:1920,height:1080}});await page.goto('http://localhost:3001');await page.waitForSelector('.is-active');await page.waitForTimeout(1500);
for(const p of [.4399,.4401,.60,.82,.995]){await page.evaluate(p=>scrollTo(0,(document.querySelector('.hero-runway').offsetHeight-innerHeight)*p),p);await page.waitForTimeout(900);await page.screenshot({path:`review/final-${p}.png`});}
await browser.close();
