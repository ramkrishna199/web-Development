import { configureStore } from '@reduxjs/toolkit';
import incDecReducer from './reducers/index';
import todoReducer from './reducers/todoSlice'

export default configureStore({
    reducer:{
        number:incDecReducer,
        todoReducer
    }
})