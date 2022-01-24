import counterReducer from '@reduxStore/reducers/counterReducer';
import { combineReducers } from 'redux';
import modalReducer from '@reduxStore/reducers/modalReducer';
import tutorialReducer from './tutorialReducer';

const allReducers = combineReducers({
    modal: modalReducer,
    count: counterReducer,
    tutorials: tutorialReducer,
});

export default allReducers;
export type RootState = ReturnType<typeof allReducers>;
