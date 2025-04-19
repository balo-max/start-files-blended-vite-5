import { createSlice } from "@reduxjs/toolkit";
import { fetchCoordUser, getExchangeInfo } from "./operations";


const slice = createSlice({
    name: 'currency',

    initialState: {
        baseCurrency: '',
        exchangeInfo: null,
        isLoading: false,
        isError: null,
    },

    reducers: {
       setBaseCurrency: (state, action) => {
        state.baseCurrency = action.payload;
    }},

    extraReducers: (builder) => {
        builder
            .addCase(fetchCoordUser.fulfilled, (state, action) => {
                state.baseCurrency = action.payload;
            })
            .addCase(getExchangeInfo.fulfilled, (state, action) => {
                state.exchangeInfo = action.payload;
        })
    }
});

export const { setBaseCurrency } = slice.actions;

export default slice.reducer;