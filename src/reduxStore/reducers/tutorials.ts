import actionTypes from '@reduxStore/actions/actionTypes';
import { itemProps } from '@reduxStore/actions/tutorials';

export type actionProps = {
    type: string;
    payload: string;
};

const initialState: itemProps[] = [
    {
        id: '1',
        name: 'John Doe',
    },
    {
        id: '2',
        name: 'John Smilga',
    },
];

const tutorialsReducer = (state = initialState, action: actionProps) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM: {
            const newList = [...state, action.payload];
            return newList;
        }
        default:
            return state;
    }
};

export default tutorialsReducer;
