import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import SearchReducer from './reducers';
const store = createStore(SearchReducer,applyMiddleware(thunk));
export default store;