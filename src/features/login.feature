Feature: Login Functionality
  As a registered user,
  I want to log into the SauceDemo application,
  So that I can access the products page.

  Background:
    Given I am on the SauceDemo login page

  Scenario: Successful login with valid credentials
    When I enter valid credentials
    Then I should be redirected to the products page
