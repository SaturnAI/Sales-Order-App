import { createSlice } from "@reduxjs/toolkit";

const CartPageSlice = createSlice({

    name: "CartPageSlice",
    initialState: {
        data: [],
        isOrderPosting: false,
        OrderPosted: false,
        placedOrders: [],
        isAddedToCart: false,
        AddedToCart: false,
        isCartFetched: false,
        CartFetched: false,
        isCartCardDeleted: false,
        CartCardDeleted: false,
    },

    reducers: {


        setIncreaseQuantity: (state, action) => {
            const id = action.payload;
            const tempObj = state.data.find((item) => item._id == id)

            if (tempObj) {
                const newArr = state.data.map((item) => {
                    if (item._id == id) {
                        return {
                            ...item,
                            Quantity: Math.floor(item.Quantity + 1),
                        }
                    }
                    else {
                        return {
                            ...item
                        }
                    }
                })

                return {
                    ...state,
                    data: [...newArr]
                }

            }


        },

        setDecreaseQuantity: (state, action) => {
            const id = action.payload;
            const tempObj = state.data.find((item) => item._id == id)

            if (tempObj) {
                const newArr = state.data.map((item) => {
                    if (item._id == id) {
                        return {
                            ...item,
                            Quantity: item.Quantity > 1 ? Math.floor(item.Quantity - 1) : item.Quantity,
                        }
                    }
                    else {
                        return {
                            ...item
                        }
                    }
                })

                return {
                    ...state,
                    data: [...newArr]
                }

            }
        },

        setIsCartCardDeleted: (state, action) => {
            return {
                ...state,
                isCartCardDeleted: !state.isCartCardDeleted
            }
        },

        setIsCartFetched: (state, action) => {
            return {
                ...state,
                isCartFetched: !state.isCartFetched,
            }
        },

        setIsAddedToCart: (state, action) => {
            return {
                ...state,
                isAddedToCart: !state.isAddedToCart,
            }
        },

        AddToCart: (state, action) => {

            return {
                ...state,
                data: [...action.payload]
            }
        },

        RemoveFromCart: (state, action) => {


            const data = state.data.filter((item) => item.item_id !== id)
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
            const { id, customer_name, customer_no, item_name, quantity, data } = action.payload

            const obj = {
                id,
                customer_name,
                customer_no,
                item_name,
                quantity,
            }
            if (data.data.message == "Data Added Successfully") {

                const data = state.data.filter((item) => item.id !== id)
                if (data) {
                    return {
                        ...state,
                        data: data,
                        placedOrders: [...state.placedOrders, obj]
                    }
                }

            }

        }
    }

})

export const setIncreaseQuantity = CartPageSlice.actions.setIncreaseQuantity;
export const setDecreaseQuantity = CartPageSlice.actions.setDecreaseQuantity;
export const setIsCartCardDeleted = CartPageSlice.actions.setIsCartCardDeleted;
export const setIsCartFetched = CartPageSlice.actions.setIsCartFetched;
export const setIsAddedToCart = CartPageSlice.actions.setIsAddedToCart;
export const setOrderPosted = CartPageSlice.actions.setOrderPosted;
export const setIsOrderPosting = CartPageSlice.actions.setIsOrderPosting;
export const RemoveFromCart = CartPageSlice.actions.RemoveFromCart;
export const AddToCart = CartPageSlice.actions.AddToCart;
export default CartPageSlice.reducer;