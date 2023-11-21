import { createSlice } from "@reduxjs/toolkit";

export const SignUpSlice = createSlice({
    name: 'SignUpSlice',
    initialState: {
       Loading : false,
    },

    reducers: {
        setLoading : (state, action) => {
             return{
                 ...state,
                 Loading : !state.Loading,
             }
        }
    }
});

export const setLoading = SignUpSlice.actions.setLoading;
export default SignUpSlice.reducer;