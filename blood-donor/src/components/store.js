/**
 * Created by sb0103 on 15/9/17.
 */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { browserHistory } from 'react-router'
import { routerReducer } from 'react-router-redux'
import { routerMiddleware ,push } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import   allReducers   from '../components/reducers'

export default function configureStore(initialState={}){
    const logger = createLogger({
            predicate: (getState, action) => {
            return action
        }
});

    const reducer = combineReducers({
        form: reduxFormReducer,
        allReducers,
        routing: routerReducer
    });
    const router = routerMiddleware(browserHistory);
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk, logger, router),
            window.devToolsExtension ? window.devToolsExtension() : f => f
    )
    );
    return store
}
