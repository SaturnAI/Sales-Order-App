import { createSlice } from "@reduxjs/toolkit";

const EnquirySlice = createSlice({
    name: 'EnquirySlice',
    initialState: {
        ListModal: false,
        ListModalItems: [],
        branchCode: [],
        branchCodeLoader: false,
        businessUnit: [],
        businessUnitLoader: false,
        salesleadby: [],
        salesleadbyLoader: false,

    },

    reducers: {

        setListModal: (state, action) => {
            return {
                ...state,
                ListModal: !state.ListModal,
            }
        },


        setListModalItem: (state, action) => {
             return {
                ...state,
                ListModalItems : [...action.payload]

             }
        },

        setSalesLeadBy: (state, action) => {
            return {
                ...state,
                salesleadby: [action.payload]
            }
        },

        setSalesLeadByLoader: (state, action) => {
            return {
                ...state,
                salesleadbyLoader: !state.salesleadbyLoader,
            }
        },

        setBranchCode: (state, action) => {
            return {
                ...state,
                branchCode: [...action.payload],
            }
        },

        setBranchCodeLoader: (state, action) => {
            return {
                ...state,
                branchCodeLoader: !state.branchCodeLoader,
            }
        },

        setBusinessUnit: (state, action) => {
            return {
                ...state,
                businessUnit: [...action.payload]
            }
        },

        setBusinessUnitLoader: (state, action) => {
            return {
                ...state,
                businessUnitLoader: !state.businessUnitLoader,
            }
        }


    }
})

export const setListModalItem = EnquirySlice.actions.setListModalItem;
export const setListModal = EnquirySlice.actions.setListModal;
export const setSalesLeadByLoader = EnquirySlice.actions.setSalesLeadByLoader;
export const setSalesLeadBy = EnquirySlice.actions.setSalesLeadBy;
export const setBusinessUnit = EnquirySlice.actions.setBusinessUnit;
export const setBusinessUnitLoader = EnquirySlice.actions.setBusinessUnitLoader;
export const setBranchCodeLoader = EnquirySlice.actions.setBranchCodeLoader;
export const setBranchCode = EnquirySlice.actions.setBranchCode;
export default EnquirySlice.reducer;