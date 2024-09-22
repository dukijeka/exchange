# Features

- The app shows the exchange value of the selected currency compared to all the other available currencies depending on the amount the user entered
- Lists all available currencies
- Uses Uphold Javascript SDK (in the backend)
- Uses Uphold currency icons (icons are not available for most currencies, so backup 'gold' icon is shown where the currency icon is not available)
- Handles CORS without browser extensions, by implementing a lightweight express backend that uses Uphold SDK
- Handles API errors
- Implements component and e2e tests using vitest, react testing library and cypress
- Uses linting tools
- Uses a debounce mechanism when entering amount to exchange
- Has a skeleton UI when loading the table
- Caches values and makes a new request to repopulate cache after it showed the cached value (by using react query)

# Running the app

1. Do `npm i` both in backend and frontend folders
2. To run the backend execute `npm start` in the backend folder 
3. To run the frontend execute `npm run dev` in the frontend folder
4. `npm run test` and `npm run e2e` will start component and e2e tests

