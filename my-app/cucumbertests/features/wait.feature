Feature: Test waiting for actions
    As a developer
    I want to be able to test if delayed actions are being performed

    Background:
        Given I open the url "http://18.216.124.209/"
        And   I pause for 1000ms


    Scenario: Test if element becomes enabled
        Given the element "#waitForEnabledElement" is not enabled
        When  I click on the button "#waitForEnabledBtn"
        Then  I wait on element "#waitForEnabledElement" for 1000ms to be enabled

    Scenario: Test if element becomes displayed
        Given the element "#waitForVisibleElement" is not displayed
        When  I click on the button "#waitForVisibleBtn"
        Then  I wait on element "#waitForVisibleElement" for 1000ms to be displayed




