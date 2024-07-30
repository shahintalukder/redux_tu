import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, counter: 5 },
    { id: 2, counter: 0 }
];

const coutersSlice = createSlice({
    name: "Counters",
    initialState,
    reducers: {
        increment: (state, action) => {
            const counterIndex = state.findIndex(
                el => el.id === action.payload
            );

            state[counterIndex].counter++;
        },
        decrement: (state, action) => {
            const counterIndex = state.findIndex(
                el => el.id === action.payload
            );

            state[counterIndex].counter--;
        }
    }
});

export default coutersSlice.reducer;

export const { increment, decrement } = coutersSlice.actions;
