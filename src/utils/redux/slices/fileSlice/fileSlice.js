import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
    name: 'files',
    initialState: {
        filesList: [],
    },
    reducers: {
        addFiles: (state, action) => {
            state.filesList = action.payload
        },
    },
})

export const { addFiles } = fileSlice.actions;

export default fileSlice.reducer