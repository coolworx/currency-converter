# Awesome Currency Converter

The purpose of this exercise is to create a currency conversion application. The users of this application should be able to choose a currency and have it converted into US dollars.

You will have **two hours** to complete this coding exercise. Before starting you will be provided with an email and phone number of a person who could help with clarifications, should you need any, while coding.



## Technical Requirements

* Do your work in a new git branch (e.g. feature/[first name] or anything else)
* Use a currency conversion service. Go to <a href='https://currencylayer.com/' target='_blank'>currencylayer.com</a> and create a free account in order to obtain a key so you can use the endpoints.
* Query the endpoints to get the conversion rates and cache the response data. 
* Use React Redux (it is wired into the application already).
* Use an existing UI framework like Semantic UI, Material UI, Bootstrap, etc. Preferably use its React implementation.

## Functional Requirements
* The application should display at a minimum, in a drop-down, the following list of currencies: AUD, CHF, EUR, GBP, CAD, DEM and BRL.
* When users pick a currency from this drop-down, a non-editable field should display "1 **[chosen currency]** = **[conversion result]** US dollars."


## Optional
* Use a library like redux-thunk or redux-saga.
* Preferably use yarn instead of npm
* Be creative! Make use of currency symbols and any other visual elements and data that may enhance the user experience.
* If you finish early maybe you can test your components (jest, enzyme)?!