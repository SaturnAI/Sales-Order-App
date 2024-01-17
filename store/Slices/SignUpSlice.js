import { createSlice } from "@reduxjs/toolkit";

export const SignUpSlice = createSlice({
    name: 'SignUpSlice',
    initialState: {
       Loading : false,
       NavigateProfile : false,
    },

    reducers: {

        setNavigateProfile : (state, action) => {
             return {
                ...state, 
                NavigateProfile: !state.NavigateProfile,
             }
        },

        setLoading : (state, action) => {
             return{
                 ...state,
                 Loading : !state.Loading,
             }
        }
    }
});


export const setNavigateProfile = SignUpSlice.actions.setNavigateProfile;
export const setLoading = SignUpSlice.actions.setLoading;
export default SignUpSlice.reducer;