Feature: Login page

  Scenario: Valid user login
    Given I open the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the inventory page
