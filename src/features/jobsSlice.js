import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { baseUrl } from '../shared/baseUrl';

export const fetchData = createAsyncThunk(

    'jobs/fetchData',
    async () => {
        // console.log("-from promise top---");

        const response = await fetch(baseUrl + 'jobs');        // http get request - READ

        // manually return a rejected promise if server responds with 404 or 403 forbidden
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const returnedData = await response.json();
        // console.log("-from promise ---");
        // console.log(returnedData);
        // console.log("-from promise ---");

        return returnedData;  // this will return a promise. Async function will wrap the value/object in promise before returning it 

    }
);


const initialState = {

    dataArray: [],
    isLoading: true,
    errMsg: ''

};

const jobsSlice = createSlice(

    {
        name: 'jobs',
        initialState,
        reducers: {},

        extraReducers: {

            // computed property syntax 

            [fetchData.pending]: (state) => {
                state.isLoading = true;
            },
            [fetchData.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.dataArray = action.payload;
                // console.log("----");
                // console.log(state);
                // console.log(state.dataArray);
                // console.log("----");

            },
            [fetchData.rejected]: (state, action) => {

                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch Data failed';
            }

        }
    }
);

export const jobsReducer = jobsSlice.reducer;

//export const { getData } = jobsSlice.actions;

export const selectAllData = (state) => {

    // console.log(state);

    return state.jobs.dataArray;


};
