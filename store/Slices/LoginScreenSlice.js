import { createSlice } from "@reduxjs/toolkit";

const LoginScreenSlice = createSlice({

    name: "LoginScreenSlice",
    initialState: {
        username: "Shubham Verma",
        email : 'ShubhamVerma11@gmail.com',
        message: "",
        role: "user",
        access: false,
        isLoading : false,
    },

    reducers: {
       

        setUserData: (state, action) => {
            const { message, role, name, success } = action.payload;

            if (success) {
               return{
                ...state,
                username : name,
                message: message,
                role: role,
                access: true,
               }
            }

            return {
                ...state,
                access : false,
            }

        },

        setIsLoading : (state, action) => {
             return {
                ...state, 
                isLoading : !state.isLoading,
             }
        },



    },
})

export const setIsLoading = LoginScreenSlice.actions.setIsLoading;
export const setUserData = LoginScreenSlice.actions.setUserData;
export default LoginScreenSlice.reducer;