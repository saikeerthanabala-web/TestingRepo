public class SeleniumTC {
    System.setProperty("webdriver.chrome.driver", "C:\\")
    Webdriver driver;
    driver = new Chromedriver();

    //Automate eTAR
    driver.get("https://provider-portal.apps.prd.cammis.medi-cal.ca.gov/login");
    driver.findElement(By.Xpath("//input[@id='bb461268-b326-47d9-ab80-59e6db402550']")).sendkeys("keerthana.bala@softsol.com");
    driver.findElement(By.Xpath("//input[@id='945cc14e-bada-460c-96f6-a0285a91a1f5']")).sendkeys("****")
    driver.findElement(By.xpath("//button[@data-testid-type='submit']")).click();
}
