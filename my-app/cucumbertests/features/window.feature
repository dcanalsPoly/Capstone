Feature: Test if new windows/tabs are being opened
    As a developer
    I want to be able to test if a element opens a new window/tab

    Background:
        Given I have closed all but the first tab
        And   I open the site "/"

    Scenario: Test if a new window/tab is not being opened
        Given the page url is "http://18.216.124.209/"
        Then  I expect a new window has not been opened

    Scenario: Test if a default link does not open a new window/tab
        When  I click on the element "#linkSameWindow"
        Then  I expect a new window has not been opened

   