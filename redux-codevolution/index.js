// require redux module

const Redux = require('redux');
const reduxLogger = require('redux-logger');

console.log('from index.js');

// action creators
//1
function buyCake() {
  return {
    type: 'BUY_CAKE',
    info: 'First redux action',
  };
}
//2
function sellCake() {
  return {
    type: 'SELL_CAKE',
    info: 'Second redux action',
  };
}
//3
function buyIceCream() {
  return {
    type: 'BUY_ICECREAM',
    info: 'First redux action',
  };
}
//4
function sellIceCream() {
  return {
    type: 'SELL_ICECREAM',
    info: 'Second redux action',
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

const cakeInitialState = {
  numOfCakes: 10,
};

const iceCreamInitialState = {
  numOfIceCreams: 20,
};

function cakeReducer(state = cakeInitialState, action) {
  switch (action.type) {
    case 'SELL_CAKE':
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case 'BUY_CAKE':
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    default:
      return state;
  }
}

function iceCreamReducer(state = iceCreamInitialState, action) {
  switch (action.type) {
    case 'SELL_ICECREAM':
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case 'BUY_ICECREAM':
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + 1,
      };
    default:
      return state;
  }
}
const rootReducer = Redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
// const applyMiddleware = Redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const store = Redux.createStore(rootReducer, Redux.applyMiddleware(logger));
// 1. Create a store
//const store = Redux.createStore(cakeReducer);
// 2. Get initial state
console.log('Initial state', store.getState());
//console.log('Initial cake state', store.cake.getState());
// 3. Subscribe to the store. Register a listener
function handleSubscribe() {}
const unsubscribe = store.subscribe(handleSubscribe);
// 4. Dispatch an action using action creator
store.dispatch(buyCake());

store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
// 5. Unsubscribe from the store. Handles unregistering of listeners via the function returned by subscribe()
unsubscribe();
