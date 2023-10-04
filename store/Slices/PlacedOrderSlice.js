import { createSlice } from "@reduxjs/toolkit";

const PlacedOrderSlice = createSlice({
    name : 'PlacedOrderSlice',
    initialState : {
        history: [],
        isHistoryFetching : false,
    },

    reducers : {
        
        setHistory : (state, action) => {
            const {data} = action.payload
            const {user_cart} = data;

            return {
                ...state,
                history : [...user_cart]
            }
        },

        setIsHistoryFetching : (state, action) => {
               return  {
                ...state,
                isHistoryFetching : !state.isHistoryFetching,
               }
        },


    }
})

export const setIsHistoryFetching = PlacedOrderSlice.actions.setIsHistoryFetching;
export const setHistory = PlacedOrderSlice.actions.setHistory;
export default PlacedOrderSlice.reducer;