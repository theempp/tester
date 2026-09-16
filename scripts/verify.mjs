import {chromium} from 'playwright';
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--remote-debugging-port=9333','--enable-unsafe-swiftshader']});
const report=[];
for(const config of [{name:'desktop',viewport:{width:1920,height:1080}},{name:'phone',viewport:{width:393,height:852}},{name:'reduced',viewport:{width:393,height:852},reducedMotion:'reduce'}]){
 const page=await browser.newPage(config);const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('http://localhost:3001');await page.waitForTimeout(2500);
 const base=await page.evaluate(()=>({canvas:document.querySelectorAll('canvas').length,h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth,active:document.querySelector('.experience').className,src:document.querySelector('video').currentSrc,stampCount:document.querySelectorAll('#stamp').length}));
 await page.screenshot({path:`review/${config.name}-opening.png`});
 if(config.name!=='reduced'){
  for(const p of [.34,.439,.441,.60,.80,.96,.80,.441,.439,.1]){
   await page.evaluate(p=>{const h=document.querySelector('.hero-runway').getBoundingClientRect().height;scrollTo(0,p*(h-innerHeight))},p);await page.waitForTimeout(700);
   report.push({view:config.name,target:p,...await page.evaluate(()=>({progress:document.querySelector('.experience').dataset.progress,clock:document.querySelector('.clock-normal').textContent,filmTime:[...document.querySelectorAll('video')].map(v=>v.currentTime)}))});
   if([.439,.441,.60,.80,.96].includes(p))await page.screenshot({path:`review/${config.name}-${p}.png`});
  }
 }
 await page.locator('#buy').scrollIntoViewIfNeeded();await page.waitForTimeout(500);await page.screenshot({path:`review/${config.name}-buy.png`});await page.locator('.objections details').first().locator('summary').click();const details=await page.locator('.objections details').first().getAttribute('open');
 report.push({view:config.name,...base,details:details!==null,errors});await page.close();
}
console.log(JSON.stringify(report,null,2));await browser.close();
