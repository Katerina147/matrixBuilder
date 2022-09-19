import logger from 'redux-logger';
import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore
} from 'redux';
import thunk from 'redux-thunk';
import matrixReducer from './matrix-service/reducer';

const reducers = combineReducers({
    matrix: matrixReducer
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export type Store = ReturnType<typeof reducers>;

export default store;
