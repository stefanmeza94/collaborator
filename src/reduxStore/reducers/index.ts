import counterReducer from '@reduxStore/reducers/counterReducer';
import { combineReducers } from 'redux';
import modalReducer from '@reduxStore/reducers/modalReducer';
import tutorialsReducer from './tutorials';

const allReducers = combineReducers({
    modal: modalReducer,
    count: counterReducer,
    tutorials: tutorialsReducer,
});

export default allReducers;
export type RootState = ReturnType<typeof allReducers>;
