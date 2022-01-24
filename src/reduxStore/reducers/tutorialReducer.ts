import actionTypes from '@reduxStore/actions/actionTypes';

export type actionProps = {
    type: string;
    payload: string;
};

const initialState: any[] = [
    {
        id: '1',
        authorName: 'John Doe',
    },
    {
        id: '2',
        authorName: 'John Smilga',
    },
];

const tutorialsReducer = (state = initialState, action: actionProps) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM: {
            return [...state, action.payload];
        }
        case actionTypes.DELETE_ITEM: {
            const newList = state.filter(
                (person) => person.id !== action.payload
            );
            return newList;
        }
        default:
            return state;
    }
};

export default tutorialsReducer;
