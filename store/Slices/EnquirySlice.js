import { createSlice } from "@reduxjs/toolkit";

const EnquirySlice = createSlice({
    name: 'EnquirySlice',
    initialState : {
        branchCode : [],
        branchCodeLoader : false,
        businessUnit : [],
        businessUnitLoader : false,
    },

    reducers: {
         setBranchCode : (state, action) => {
            return {
                ...state,
                branchCode: [...action.payload],
            }
         },

         setBranchCodeLoader : (state, action) => { 
            return{
                ...state,
                branchCodeLoader: !state.branchCodeLoader,
            }
         },

         setBusinessUnit: (state, action)=> {
            return {
                ...state,
                businessUnit : [...action.payload]
            }
         },

         setBusinessUnitLoader :(state, action) => {
            return{
                ...state,
                businessUnitLoader : !state.businessUnitLoader,
            }
         }


    }
})



export const setBusinessUnit = EnquirySlice.actions.setBusinessUnit;
export const setBusinessUnitLoader = EnquirySlice.actions.setBusinessUnitLoader;
export const setBranchCodeLoader = EnquirySlice.actions.setBranchCodeLoader;
export const setBranchCode = EnquirySlice.actions.setBranchCode;
export default EnquirySlice.reducer;