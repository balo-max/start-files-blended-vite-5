import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';
import { exchangeCurrency } from '../../service/exchangeAPI';

export const fetchCoordUser = createAsyncThunk(
    'currency/fetchCoordUser',
    async (coords, thunkAPI) => {
        const state = thunkAPI.getState();
        const { baseCurrency } = state.currency;
        if (baseCurrency) {
            return thunkAPI.rejectWithValue('Done');
        }
        try {
            const data = await getUserInfo(coords);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    });


export const getExchangeInfo = createAsyncThunk(
    'currency/getExchangeInfo',
    async (credentials, thunkAPI) => {
        try {
            const data = await exchangeCurrency(credentials);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    });