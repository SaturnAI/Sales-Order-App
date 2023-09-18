import { createSlice } from "@reduxjs/toolkit";

const LoginScreenSlice = createSlice({

    name: "LoginScreenSlice",
    initialState: {
        username: "Shubham Verma",
        message: "",
        role: "user",
        access : false,
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

        }



    },
})

export const setUserData = LoginScreenSlice.actions.setUserData;
export default LoginScreenSlice.reducer;