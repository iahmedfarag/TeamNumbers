import { configureStore } from '@reduxjs/toolkit'
import sheetSlice from './features/sheetSlice'

export const store = configureStore({
    reducer: {
        sheet: sheetSlice,
    },
})