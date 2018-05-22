# Awesome Currency Converter

The purpose of this exercise is to create a currency conversion application. The users of this application should be able to choose a currency and have it converted into US dollars.

You will have **two hours** to complete this coding exercise. Before starting you will be provided with an email and phone number of a person who could help with clarifications, should you need any, while taking the test.

After cloning the repository you can install dependencies with
```
yarn install
```
and start the application with
```
yarn start
```


## Technical Requirements

* Do your work in a new git branch (e.g. feature/[first name])
* Use a currency conversion service. Go to <a href='https://currencylayer.com/' target='_blank'>currencylayer.com</a>, create an account and subscribe to the free plan. You will be given a key which you will need to pass in all calls to this service's endpoints.
* Query the endpoints to get the conversion rates and cache the response data. 
* Use React Redux (it is wired into the application already).
* Use an existing UI framework like Semantic UI, Material UI, Bootstrap, etc. Preferably use its React implementation.

## Functional Requirements
In the mockup below the drop-down contains the following currencies: Australian Dollar (AUD), Swiss Franc (CHF), Euro (EUR), British Pound (GBP), Canadian Dollar (CAD), German Mark (DEM) and Brazilian Real (BRL).

Once the user picks a currency from the drop-down, its conversion rate (against the USD) should update to the right. The currency can be saved by clicking the "Save Currency" button. Once saved that currency is added to the list of "Saved Currencies". Thsi list can hold at most 3 items. Saved currency items can be deleted by clicking the corresponding delete button (trash icon) on the right (if you do not find the trash can icon in the UI fraework of your choice, you can use label these buttons "Delete"). If the user tries to save a currency when the list is full, the error message below the "Save Currency" button is displayed.

Also, a user can refresh the currency rates by clicking the "Refresh Currency Rates" button. This should trigger a new API call and caching of the returned rates.

![UI Mockup](./docs/Currency%20Converter%20Mockup.png "UI Mockup")


## Optional
* Use a library like redux-thunk or redux-saga.
* Preferably use yarn instead of npm
* Be creative! Make use of currency symbols and any other visual elements and data that may enhance the user experience.
* If you finish early maybe you can test your components (jest, enzyme).