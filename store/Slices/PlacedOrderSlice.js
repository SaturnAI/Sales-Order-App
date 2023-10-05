import { createSlice } from "@reduxjs/toolkit";

const PlacedOrderSlice = createSlice({
    name : 'PlacedOrderSlice',
    initialState : {
        history: [],
        isHistoryFetching : false,
        toggleGrid : false,
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

        setToggleGrid : (state, action) => {
            return {
                ...state,
                toggleGrid : !state.toggleGrid,
            }
        },


    }
})

export const setToggleGrid = PlacedOrderSlice.actions.setToggleGrid;
export const setIsHistoryFetching = PlacedOrderSlice.actions.setIsHistoryFetching;
export const setHistory = PlacedOrderSlice.actions.setHistory;
export default PlacedOrderSlice.reducer;