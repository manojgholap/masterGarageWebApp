//import {combineReducers}from 'redux';
import cartReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit'


export default configureStore({
    reducer: {
        check:cartReducer,
    }
  })

