# Balance Tracker 
A Frontend Web Application to track the Income and Expense records.

## Phase

1. Frontend
2. Responsiveness : Mobile and Desktop only
3. Data storage : Browser Local Storage

## Tech stack used 

1. HTML
2. CSS
3. Javascript
4. React.js
5. Material UI
6. Chart.js - Doughnut for Data Visualisation
7. Browser Local Storage - to keep the transaction data

## Decription

1. A form is provided for the User to select :

   1. Type of transaction : `Income` or `Expense`
   2. Category of income or expense medium - out of options present in the dropdown
   3. Amount of transaction
   4. Date of transaction - set as `Current date` by default
   
2. Once the transaction is created , it is stored in `local storage` and displayed at:

   1. Data visualisation section - using `Doughnut` chart
   2. List of transaction
   
3. Net balance is calculated by : `Total Income balance - Total Expense balance` 
   -- it can be negative too.
   
4. In Chart section, Income is represented by Green shades and Expense is represented by Red shades

5. Transaction data can also be deleted using `Delete Icon Button` present in List

6. Everytime a transaction is created, a Snackbar - Alert popup appears at the top-right corner to display success message

7.  ***Transaction validation*** : 

    1. Transaction category should not be `None`
    2. Transaction amount should be greater than `0`

## Concepts implemeted

1. React hooks : useReducer (dispatch, reducer function), useContext (context API), useState, useEffect, Custom hooks ( useTransactions)
2. Material UI : Card, Grid, Form Control, Select, Text Field, Typography, Snackbar, Alert, Menu Item, Button, Input Label, List, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, Divider
3. Chart.js : Doughnut, Chart datsets, options, data, background color, labels, legend

## Future Plans

1. Display labels for each transaction on Chart section
2. Implement responsiveness for all device widths
3. Add speech command features - Using `Speechly`
4. Option to add more categories for Income and Expense
5. Clear all button - to clear all the previous records

## Demo Video


https://user-images.githubusercontent.com/39863626/228356215-4ff4b837-5352-4e29-a170-c797415ea8c5.mp4




## Snapshots

![Balance Track 1](https://user-images.githubusercontent.com/39863626/226024804-1bd4e9d8-add6-488a-bbd0-fd3542b00ec9.png)

![Balance Track2](https://user-images.githubusercontent.com/39863626/226024902-4cd9e6ea-44e6-475e-a0b2-06d40d457e28.png)

![Balance Track3](https://user-images.githubusercontent.com/39863626/226024961-7fc5e25d-0211-4ab7-a792-8bce441adee3.png)


***************************************************************************************


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


