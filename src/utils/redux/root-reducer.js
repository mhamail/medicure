import { combineReducers } from "@reduxjs/toolkit";

import fileReducer from './slices/fileSlice/fileSlice'

const rootReducer = combineReducers({
    files: fileReducer,
})

export default rootReducer