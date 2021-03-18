Feature:Qualitest - Web Automation Solution

Scenario: Order T-Shirt (and Verify of Order History)
Given User launch automation practice webpage and clicks signin link
When User logged in with valid credentials
Then User should be able to order T-Shirt and proceed to checkout
Then User shown with shopping cart summary for checkout
And User agrees the terms and proceed to checkout
When User performs successful payment and confirm order
Then Order should be placed successfully
And Order should be updated in the Order history

Scenario: Update Personal Information (Firstname) in My Account
Given User launch automation practice webpage and clicks signin link
When User logged in with valid login credentials
And User enters My account section, changes Firstname, update mandatory fields and click save
Then Your personal information has been successfully updated banner to be shown
And First name should be reflected in homepage
