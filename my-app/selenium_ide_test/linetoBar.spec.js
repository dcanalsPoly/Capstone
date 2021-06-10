// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Line_to_Bar', function() {
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
  it('Line_to_Bar', async function() {
    // Test name: Line_to_Bar
    // Step # | name | target | value
    // 1 | open | http://localhost:3000/ | 
    await driver.get("http://localhost:3000/")
    // 2 | setWindowSize | 795x610 | 
    await driver.manage().window().setRect(795, 610)
    // 3 | runScript | window.scrollTo(0,0) | 
    await driver.executeScript("window.scrollTo(0,0)")
    // 4 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester")).click()
    // 5 | select | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester | label=Bar Graph
    {
      const dropdown = await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester"))
      await dropdown.findElement(By.xpath("//option[. = 'Bar Graph']")).click()
    }
    // 6 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester")).click()
    // 7 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester")).click()
    // 8 | select | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester | label=Line Graph
    {
      const dropdown = await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester"))
      await dropdown.findElement(By.xpath("//option[. = 'Line Graph']")).click()
    }
    // 9 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester")).click()
    // 10 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester")).click()
    // 11 | select | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester | label=Line Graph
    {
      const dropdown = await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester"))
      await dropdown.findElement(By.xpath("//option[. = 'Line Graph']")).click()
    }
    // 12 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester")).click()
    // 13 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester")).click()
    // 14 | select | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester | label=Bar Graph
    {
      const dropdown = await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester"))
      await dropdown.findElement(By.xpath("//option[. = 'Bar Graph']")).click()
    }
    // 15 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester")).click()
  })
})