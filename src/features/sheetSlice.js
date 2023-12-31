import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sheet: null,
    keys: null,
    totalSURVEYS: 0,
    totalCSAT: 0,
    totalKCSAT: 0
}

export const generalSlice = createSlice({
    name: 'sheet',
    initialState,
    reducers: {
        updateMemebersNumbers: (state, action) => {
            let total_surveys = 0
            let total_csat = 0
            let total_kcsat = 0

            state.sheet = action.payload
            state.keys = Object.keys(action.payload[0])
            // surveys total
            action.payload.map((agent) => total_surveys += agent.Surveys)
            state.totalSURVEYS = total_surveys
            // csat total
            action.payload.map((agent) => total_csat += agent.CSAT)
            state.totalCSAT = (total_csat * 10).toFixed(2)
            // kcsat total
            action.payload.map((agent) => total_kcsat += agent.KCSAT)
            state.totalKCSAT = (total_kcsat * 10).toFixed(2)

            localStorage.setItem('sheet', JSON.stringify(action.payload))
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateMemebersNumbers } = generalSlice.actions

export default generalSlice.reducer