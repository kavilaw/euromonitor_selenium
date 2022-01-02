#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Navigate to https://www.saucedemo.com/ and perform actions
    Given I want to open the browser
    And navigate to https://www.saucedemo.com/
    When user enters incorrect <Username> and <Password>
    And click on login button
    Then Login should be unsuccessfull
    And user clears the screen
    When user enters correct <Username1> and <Password1>
    And click on login1 button
    Then home page should be displayed
    And add an item to the cart 
    Then verify the item in the cart
    And remove the item from the cart 

     Examples: 
      | Username      | Password          |  Username1      | Password1          |
      | abc           | xyz               | standard_user   | secret_sauce       | 