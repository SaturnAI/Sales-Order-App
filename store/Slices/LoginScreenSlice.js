import { createSlice } from "@reduxjs/toolkit";


const LoginScreenSlice = createSlice({

    name: "LoginScreenSlice",
    initialState: {
        username: "Shubham Verma",
        email: 'vibhu@gmail.com',
        message: "",
        role: "",
        access: false,
        isLoading: false,
    },

    reducers: {

        setName: (state, action) => {
            const { name, role } = action.payload;

            return {
                ...state,
                username: name,
                role: role,
            }
        },

        setUserData: (state, action) => {
            const { message, role, name, success, email } = action.payload;

            if (success) {
                return {
                    ...state,
                    username: name,
                    message: message,
                    role: role,
                    access: true,
                    email: email,
                }
            }

            return {
                ...state,
                access: false,
            }

        },

        setIsLoading: (state, action) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        },



    },
})

export const setName = LoginScreenSlice.actions.setName;
export const setIsLoading = LoginScreenSlice.actions.setIsLoading;
export const setUserData = LoginScreenSlice.actions.setUserData;
export default LoginScreenSlice.reducer;