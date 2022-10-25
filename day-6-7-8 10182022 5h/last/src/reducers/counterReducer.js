import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : 0
}

export const counterReducer = createSlice({
    name:'counter',
    initialState,

    reducers: {

        increment: (state)=>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        },
        incrementBy: (state,data)=>{
            console.log(data);
            state.value += data.payload
        },
        
    }
})

export const { increment, decrement, incrementBy } = counterReducer.actions;

export default counterReducer.reducer;
