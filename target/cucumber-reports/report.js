$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Navigate to https://www.saucedemo.com/ and perform actions",
  "description": "",
  "id": "title-of-your-feature;navigate-to-https://www.saucedemo.com/-and-perform-actions",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I want to open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "navigate to https://www.saucedemo.com/",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters incorrect \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Login should be unsuccessfull",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clears the screen",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user enters correct \u003cUsername1\u003e and \u003cPassword1\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "click on login1 button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "home page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "add an item to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify the item in the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "remove the item from the cart",
  "keyword": "And "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;navigate-to-https://www.saucedemo.com/-and-perform-actions;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Username1",
        "Password1"
      ],
      "line": 39,
      "id": "title-of-your-feature;navigate-to-https://www.saucedemo.com/-and-perform-actions;;1"
    },
    {
      "cells": [
        "abc",
        "xyz",
        "standard_user",
        "secret_sauce"
      ],
      "line": 40,
      "id": "title-of-your-feature;navigate-to-https://www.saucedemo.com/-and-perform-actions;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Navigate to https://www.saucedemo.com/ and perform actions",
  "description": "",
  "id": "title-of-your-feature;navigate-to-https://www.saucedemo.com/-and-perform-actions;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I want to open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "navigate to https://www.saucedemo.com/",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters incorrect abc and xyz",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Login should be unsuccessfull",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clears the screen",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user enters correct standard_user and secret_sauce",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "click on login1 button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "home page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "add an item to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify the item in the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "remove the item from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.i_want_to_open_the_browser()"
});
formatter.result({
  "duration": 4009808400,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.navigate_to_https_www_saucedemo_com()"
});
formatter.result({
  "duration": 2212808900,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.user_enters_incorrect_abc_and_xyz()"
});
formatter.result({
  "duration": 238214000,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.click_on_login_button()"
});
formatter.result({
  "duration": 91598100,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.login_should_be_unsuccessfull()"
});
formatter.result({
  "duration": 194400,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.user_clears_the_screen()"
});
formatter.result({
  "duration": 113540100,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.user_enters_correct_standard_user_and_secret_sauce()"
});
formatter.result({
  "duration": 338128900,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.click_on_login1_button()"
});
formatter.result({
  "duration": 186859600,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.home_page_should_be_displayed()"
});
formatter.result({
  "duration": 151500,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.add_an_item_to_the_cart()"
});
formatter.result({
  "duration": 142385700,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.verify_the_item_in_the_cart()"
});
formatter.result({
  "duration": 592371700,
  "status": "passed"
});
formatter.match({
  "location": "Definitions.remove_the_item_from_the_cart()"
});
formatter.result({
  "duration": 370989800,
  "status": "passed"
});
});