import actionTypes from '@reduxStore/actions/actionTypes';
import { Action } from 'redux';

// const initialState = [];

const clientReducer = (state = [], action: Action) => {
    switch (action.type) {
        case actionTypes.ADD_CITY:
            return [...state, action.payload];
    }
};

export default clientReducer;
