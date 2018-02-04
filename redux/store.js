/**
 * Created by huk on 2018/1/22.
 */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const exampleInitialState = {
    current: 'home'
};

export const actionTypes = {
    SELECT: 'SELECT',
};

// REDUCERS
export default function menu(state = exampleInitialState, action = {}) {
    switch (action.type) {
        case actionTypes.SELECT:
            return Object.assign({}, state, { current: action.data });
        default:
            return state
    }
};

const appReducer = combineReducers({ menu });

const reducer = (state, action) => {
    return appReducer(state, action);
};

// ACTIONS

export const menuChange = (data) => dispatch => {
    return dispatch({ type: actionTypes.SELECT, data })
};

//INIT
export const initStore = (initialState = exampleInitialState) => {

    return createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunkMiddleware)
        )
    )
};