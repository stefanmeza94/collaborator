import actionTypes from '@reduxStore/actions/actionTypes';

export type itemProps = {
    id: string;
    name: string;
};

export const ADD_ITEM = (item: itemProps) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: item,
    };
};
