import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './countSlice.js'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})