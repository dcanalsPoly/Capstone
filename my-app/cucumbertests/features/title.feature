Feature: Test the page title
    As a developer
    I want to be able to test if a page has a certain title

    Background:
        Given I open the site "http://18.216.124.209/"

    Scenario: Test if the demo app has the title "Covid-19 Data Visualization"
        Given the title is "React APP"
        Then  I expect that element "h1" contains the same text as element ".subtitle"

