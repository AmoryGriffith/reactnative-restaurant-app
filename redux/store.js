import {createStore, applyMiddleware} from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';
const middlewares = [thunk];

export default createStore(rootReducers, applyMiddleware(thunk));

// export default function configureStore(initialState) {
//   const store = createStore(rootReducers, initialState);
//   return store;}
// export default createStore(rootReducers, applyMiddleware(...middlewares));
