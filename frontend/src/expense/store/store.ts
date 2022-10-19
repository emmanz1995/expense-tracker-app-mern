import { legacy_createStore as createStore, applyMiddleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import logger from 'redux-logger';

const initialState: object = {}

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware, logger)));

export default store;

