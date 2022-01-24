import actionTypes from '@reduxStore/actions/actionTypes';

export type itemProps = {
    id: string;
    authorName: string;
};

export const ADD_ITEM = (item: itemProps) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: item,
    };
};

export const DELETE_ITEM = (id: string) => {
    return {
        type: actionTypes.DELETE_ITEM,
        payload: id,
    };
};
