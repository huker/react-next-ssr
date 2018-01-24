/**
 * Created by huk on 2018/1/22.
 */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
    current: 'home'
};

export const actionTypes = {
    SELECT: 'SELECT',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT:
            return Object.assign({}, state, { current: action.data });
        default:
            return state
    }
};

// ACTIONS

export const menuChange = (data) => dispatch => {
    return dispatch({ type: actionTypes.SELECT, data })
};

export const initStore = (initialState = exampleInitialState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};