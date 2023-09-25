import { createSlice } from "@reduxjs/toolkit";

const CartPageSlice = createSlice({

    name: "CartPageSlice",
    initialState: {
        data: [],
        isOrderPosting: false,
        OrderPosted: false,
        placedOrders : [],
    },

    reducers: {

        AddToCart: (state, action) => {
            const { customer_name, customer_no, id, item_name, quantity } = action.payload;
            const obj = {
                customer_name,
                customer_no,
                item_name,
                id,
                quantity,
            }
            return {
                ...state,
                data: [...state.data, obj]
            }
        },

        RemoveFromCart: (state, action) => {
            const id = action.payload
            const data = state.data.filter((item) => item.id !== id)
            if (data) {
                return {
                    ...state,
                    data: data,
                }
            }
        },

        setIsOrderPosting: (state, action) => {
            return {
                ...state,
                isOrderPosting: !state.isOrderPosting
            }
        },

        setOrderPosted: (state, action) => {
            const {id, customer_name, customer_no, item_name, quantity ,data} = action.payload

            const obj  = {
                id, 
                customer_name, 
                customer_no,
                item_name,
                quantity,
            }
            if (data.data.message == "Data Added Successfully") {
                
                const data = state.data.filter((item)=> item.id !== id )
                if(data) {
                    return {
                    ...state,
                    data : data,
                    placedOrders : [...state.placedOrders, obj]
                    }
                }

            }

        }
    }

})


export const setOrderPosted = CartPageSlice.actions.setOrderPosted;
export const setIsOrderPosting = CartPageSlice.actions.setIsOrderPosting;
export const RemoveFromCart = CartPageSlice.actions.RemoveFromCart;
export const AddToCart = CartPageSlice.actions.AddToCart;
export default CartPageSlice.reducer;