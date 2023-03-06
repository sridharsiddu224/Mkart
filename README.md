# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


-------------------------------------https://www.youtube.com/watch?v=TRCDsB9i3bI------------------

Create Ecommerce Website
1) create react App
    1) npx create-react-app Mkar
    2) npm start
    3) remove unused files 
    4) create header
    5) create products
2) create rating and product component
    1) create components/rating.js
    2) create div.rating
    3) style div.rating span and last span
    4) create product component
    5) use rating component
3) Build Product Screen
    1) Install react-router-dom
    2) Use BrowserRouter and Route for Home Screen
    3) Create homescreen.js
    4) Add Product list code there
    5) Create ProductScreen.js
    6) Add new Route from product details to App.js
    7) Create 3 columns for Product Image, info and action

4) Create Node.js Server
    1) create 2 folder first folder name frontend, second folder name is backend
    2) move data in frontend (node_modules,public,src,package.json,package-lock.json,readme)
    3) craete file server.js in backend folder
    4) npm install express
    5) import express from 'express', follow the code of server.js
    6) add "type":"module" in package.json root main folder
    7) run code "node backend/server.js" => http://localhost:5000
    8) create route fo / return backend is ready
    9) move product.js or data.js from frontEnd to backEnd
    10) import data from data.js {note: import with .js}
    11) install node dememon for automatic start server when changes done (npm install --save-dev nodemon)
    12) create route for /products
    13) then reun npm i --seve-dev nodemon
    14) past in packege.json>start> "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
    15) run npm start
    16) environment changes inside server.js
    17) https://github.com/basir/amazona/pull/9/files#diff-e6a1d92480cd16cd30155f4e1694f991d54adcc2ad6611395c7798452f71af72

5) Load products from backend
    1) https://github.com/basir/amazona/pull/10/files
    2) package.js>"proxy":"http://127.0.0.1:5000",
    2) edit Home.js > install and import axios
    3) defind product,loading and error
    4) create useEffect
    5) define async fetchData and call it
    6) import usememo
    7) install axiox
    8) get data from /products
    9) show items in the list\
    10) create loading component
    11) craete massage box component
    12) use then in home.js  

6) Add Redux to Home.js
    https://github.com/basir/amazona/pull/12/files
    1) npm install redux  react-redux
    2) create store.js
    3) initState ={product:[]}
    4) reducer = (state,action) => switch LOAD_PRODUCTS: {products:action.payload}
    5) export default createStore( reducer,initState)
    6) Edite Home.js
    7) showName = useSalector(state=>state.products)
    8) const dispatch = useDispatch()
    9) useEffect(()=>dispatch({type:LOAD_PRODUCTS,payload:data}))
    10) Add store to index.js

7) Add Redux to Product screen
    1) create products details constant,action and reducers
    2) add reducer to store
    3) add action in productScreen.js
    4) add /api/product/:id to backend api
    5) files are modifing ( productConstants.js, productActions.js, productReducers.js, store.js, product.js,server.js)
    
8) Handle Add to cart Button
    1) Handle add to cart in product.js
    2) create cart.js
    3) https://github.com/basir/amazona/pull/14/files

9) Implement-Add-To-Cart-Action 
    1) https://github.com/basir/amazona/pull/15/files
    2) create addtocart constants, actions, reducers
    3) add reducer to store.js
    4) use action in cart.js
    5) render the cart items.length

10) Build cart.js
    1) create 2 columns for cart items and cart action
    2) cart.length === 0 ? cart is empty
    3) show items,images, qty and price
    4) Procsed to checkout button
    5) Implement remove from cart action 
    6) https://github.com/basir/amazona/pull/16/files
    
11) Implement Remove from cart action
    1) https://github.com/basir/amazona/pull/16/files
    2) create removeFromcart constant, action and reducers
    3) use action in cart.js

12) Create Samle users in MangoDB
    1) npm install mangoDB
    2) connect to mangoDB
    3) create to config.js
    4) npm install dotenv
    5) export MANGODB_URL
    6) create model/usermodel.js
    7) create userSchema and userModel
    8) create model/productModel.js
    9) create productSchema and productModel
    10) create userRoute
    11) Seed sample data
 
----4:23:09 time 