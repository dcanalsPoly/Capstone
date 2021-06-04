# Featured to be
Feature: Local server test
    As a developer
    I want the demo app have the correct title

    Scenario: query title
        Given I open the url "http://18.216.124.209/"
        And   the title is "Covid 19 Data Visualization"
        And   the title is not "Other title"
        Then  I expect that the title is "Covid 19 Data Visualization"
        And   I expect that the title is not "Other title"

