
import puppeteer from 'puppeteer'
import IAgent from './IAgent'
export default class ChromeAgent implements IAgent{
    public  name = ''; 
      GetReport(): object {
        throw new Error("Method not implemented.");
    }


}


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.screenshot({path: 'google.png'});
  
    await browser.close();
  })();

