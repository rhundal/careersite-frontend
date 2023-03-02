import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { jobsReducer } from './features/jobsSlice';


export const store = configureStore({
    reducer: {
        jobs: jobsReducer,

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});


// console.log("from store --> " + store.getState());

