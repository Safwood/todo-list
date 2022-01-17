import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from './tasks/tasks.reducer';
import {
    TypedUseSelectorHook, useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from 'react-redux';

const rootReducer = combineReducers({ tasks });


export const store = configureStore({reducer: rootReducer });

export type Store = typeof store;
export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;
