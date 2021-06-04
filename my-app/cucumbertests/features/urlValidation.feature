Feature: Test if the url is a certain value
    As a developer
    I want to be able to test if the url is a certain value

    Scenario: The url should not be http://www.google.com/
        Given I open the site "/"
        Then  I expect that the url is not "http://18.216.124.209/"

 

   