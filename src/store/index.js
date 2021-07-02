import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authRaducer from './auth';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authRaducer
    }
});

export default store;