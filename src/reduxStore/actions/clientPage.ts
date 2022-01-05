import actionTypes from '@reduxStore/actions/actionTypes';

export const addCity = (id: string) => {
    return {
        type: actionTypes.ADD_CITY,
        payload: id,
    };
};

export const deleteCity = (id: string) => {
    return {
        type: actionTypes.REMOVE_CITY,
        payload: id,
    };
};
