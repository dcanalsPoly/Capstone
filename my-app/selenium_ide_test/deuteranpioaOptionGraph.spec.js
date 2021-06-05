// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Deuteranpioa_Option_Graph', function() {
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
  it('Deuteranpioa_Option_Graph', async function() {
    // Test name: Deuteranpioa_Option_Graph
    // Step # | name | target | value
    // 1 | open | http://localhost:3000/ | 
    await driver.get("http://localhost:3000/")
    // 2 | setWindowSize | 1552x849 | 
    await driver.manage().window().setRect(1552, 849)
    // 3 | runScript | window.scrollTo(0,0) | 
    await driver.executeScript("window.scrollTo(0,0)")
    // 4 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .selectDiv .tester")).click()
    // 5 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .colorDiv > .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .colorDiv > .tester")).click()
    // 6 | select | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .colorDiv > .tester | label=Deuteranopia
    {
      const dropdown = await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .colorDiv > .tester"))
      await dropdown.findElement(By.xpath("//option[. = 'Deuteranopia']")).click()
    }
    // 7 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(1) .colorDiv > .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(1) .colorDiv > .tester")).click()
    // 8 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .selectDiv .tester")).click()
    // 9 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .colorIcon | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .colorIcon")).click()
    // 10 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .colorDiv > .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .colorDiv > .tester")).click()
    // 11 | select | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .colorDiv > .tester | label=Deuteranopia
    {
      const dropdown = await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .colorDiv > .tester"))
      await dropdown.findElement(By.xpath("//option[. = 'Deuteranopia']")).click()
    }
    // 12 | click | css=.graphRow:nth-child(2) > .graphColumn:nth-child(2) .colorDiv > .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(2) > .graphColumn:nth-child(2) .colorDiv > .tester")).click()
    // 13 | click | css=.graphRow:nth-child(3) > .graphColumn:nth-child(1) .colorDiv > .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(3) > .graphColumn:nth-child(1) .colorDiv > .tester")).click()
    // 14 | select | css=.graphRow:nth-child(3) > .graphColumn:nth-child(1) .colorDiv > .tester | label=Deuteranopia
    {
      const dropdown = await driver.findElement(By.css(".graphRow:nth-child(3) > .graphColumn:nth-child(1) .colorDiv > .tester"))
      await dropdown.findElement(By.xpath("//option[. = 'Deuteranopia']")).click()
    }
    // 15 | click | css=.graphRow:nth-child(3) > .graphColumn:nth-child(1) .colorDiv > .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(3) > .graphColumn:nth-child(1) .colorDiv > .tester")).click()
    // 16 | click | css=.graphRow:nth-child(3) > .graphColumn:nth-child(2) .colorDiv > .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(3) > .graphColumn:nth-child(2) .colorDiv > .tester")).click()
    // 17 | select | css=.graphRow:nth-child(3) > .graphColumn:nth-child(2) .colorDiv > .tester | label=Deuteranopia
    {
      const dropdown = await driver.findElement(By.css(".graphRow:nth-child(3) > .graphColumn:nth-child(2) .colorDiv > .tester"))
      await dropdown.findElement(By.xpath("//option[. = 'Deuteranopia']")).click()
    }
    // 18 | click | css=.graphRow:nth-child(3) > .graphColumn:nth-child(2) .colorDiv > .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(3) > .graphColumn:nth-child(2) .colorDiv > .tester")).click()
    // 19 | click | css=.graphRow:nth-child(3) > .graphColumn:nth-child(2) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(3) > .graphColumn:nth-child(2) .selectDiv .tester")).click()
    // 20 | select | css=.graphRow:nth-child(3) > .graphColumn:nth-child(2) .selectDiv .tester | label=Bar Graph
    {
      const dropdown = await driver.findElement(By.css(".graphRow:nth-child(3) > .graphColumn:nth-child(2) .selectDiv .tester"))
      await dropdown.findElement(By.xpath("//option[. = 'Bar Graph']")).click()
    }
    // 21 | click | css=.graphRow:nth-child(3) > .graphColumn:nth-child(2) .selectDiv .tester | 
    await driver.findElement(By.css(".graphRow:nth-child(3) > .graphColumn:nth-child(2) .selectDiv .tester")).click()
  })
})
