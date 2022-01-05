import counterReducer from '@reduxStore/reducers/counterReducer';
import modalReducer from '@reduxStore/reducers/modalReducer';
import clientReducer from '@reduxStore/reducers/clientReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    count: counterReducer,
    modal: modalReducer,
    client: clientReducer,
});

export default allReducers;
export type RootState = ReturnType<typeof allReducers>;
