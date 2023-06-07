import { configureStore} from "@reduxjs/toolkit";
import rootReducer from './root-reducer'
import { createWrapper } from 'next-redux-wrapper'


export const store = configureStore({
    reducer: rootReducer,
},
)
const makeStore = () => store
export const wrapper = createWrapper(makeStore)