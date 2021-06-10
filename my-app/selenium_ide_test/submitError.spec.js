// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Submit_Error', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Submit_Error', async function() {
    // Test name: Submit_Error
    // Step # | name | target | value
    // 1 | open | http://localhost:3000/ | 
    await driver.get("http://localhost:3000/")
    // 2 | setWindowSize | 1552x849 | 
    await driver.manage().window().setRect(1552, 849)
    // 3 | runScript | window.scrollTo(0,0) | 
    await driver.executeScript("window.scrollTo(0,0)")
    // 4 | click | linkText=Report | 
    await driver.findElement(By.linkText("Report")).click()
    // 5 | click | css=.structure | 
    await driver.findElement(By.css(".structure")).click()
    // 6 | click | css=.textAreaRep | 
    await driver.findElement(By.css(".textAreaRep")).click()
    // 7 | type | css=.textAreaRep | This a test for submit
    await driver.findElement(By.css(".textAreaRep")).sendKeys("This a test for submit")
    // 8 | click | css=.submitButton | 
    await driver.findElement(By.css(".submitButton")).click()
    // 9 | click | css=.newError | 
    await driver.findElement(By.css(".newError")).click()
  })
})