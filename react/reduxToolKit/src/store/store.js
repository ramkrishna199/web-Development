import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../store/reducers/todoSlice"

export const store = configureStore({
 reducer:todoReducer
})