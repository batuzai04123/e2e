Feature: Perform Login on BioMark Test Page

    As a user on the Biomark Page
    I should be able to test different login combinations

    Background: Access Biomark Default Page
        Given I navigate to url "https://internal-doctor.biomarking.com/login"
        Then I see title page "Doctors Portal | Biomark" is displayed

    Scenario: Valid User Login
        When I enter username "scenario_sy@mailinator.com"
            And I enter password "1qw21qw2"
            And I tap Login button
        Then I can see "View My Profile" text displayed
            And I perform logout

    @test1
    Scenario: Invalid User Login: Valid Email Address & invalid Password
        When I enter username "scenario_sy@mailinator.com"
            And I enter password "1qw21qw2e"
            And I tap Login button
        Then I can see "The email address or the password you inputted is incorrect" text displayed

    Scenario: Invalid User Login: Invalid Email Address & valid Password
        When I enter username "scenario_sy1@mailinator.com"
            And I enter password "1qw21qw2"
            And I tap Login button
        Then I can see "The email address or the password you inputted is incorrect" text displayed

    Scenario: Invalid User Login: Invalid Email Address & invalid Password
        When I enter username "scenario_sy1@mailinator.com"
            And I enter password "1qw21qw2e"
            And I tap Login button
        Then I can see "The email address or the password you inputted is incorrect" text displayed

    @optional
    Scenario: Invalid User Login: Required/ mandatory fields
        When I enter username ""
            And I enter password ""
            And I tap Login button
        Then I can see form displays "Please fill out this field." message