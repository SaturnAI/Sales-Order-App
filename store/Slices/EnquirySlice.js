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
        enquiryType: [],
        enquiryTypeLoader: false,

        //form Values

        BranchCodeData: "DL",
        BusinessUnitData: "1000",
        CustomerNameData: "",
        SalesLeadByData: "EMP00001",
        EnquiryTypeData: "BUDGETERY",
        CustomerTypeData: "EPC",
        NextActionPlanData: "PROPOSAL TEAM",
        Make: "CORONET",
        Description: "",

        salesLedBySelected: false,

        submitLoader: false,

    },

    reducers: {

        cleanForm: (state, action) => {
            return {
                ...state,
                Description: "",
                CustomerNameData: "",
            }
        },

        setSubmitLoader: (state, action) => {
            return {
                ...state,
                submitLoader: !state.submitLoader
            }
        },

        setSaleLedBySelected: (state, action) => {
            return {
                ...state,
                salesLedBySelected: true,
            }
        },

        setEnquiryFormData: (state, action) => {

            const { type, data } = action.payload;


            if (type == "branchcode") {
                return {
                    ...state,
                    BranchCodeData: data
                }
            }

            if (type == "businessunit") {

                return {
                    ...state,
                    BusinessUnitData: data
                }
            }

            if (type == "customername") {
                return {
                    ...state,
                    CustomerNameData: data
                }
            }

            if (type == "salesledby") {
                console.log(data)
                return {
                    ...state,
                    SalesLeadByData: data
                }
            }

            if (type == "enquirytype") {
                console.log(data)
                return {
                    ...state,
                    EnquiryTypeData: data
                }
            }

            if (type == "customertype") {

                return {
                    ...state,
                    CustomerTypeData: data
                }
            }

            if (type == "nextactionplan") {
                return {
                    ...state,
                    NextActionPlanData: data
                }
            }

            if (type == "make") {
                return {
                    ...state,
                    Make: data
                }
            }

            if (type == "description") {
                return {
                    ...state,
                    Description: data
                }
            }

        },

        setEnquiryType: (state, action) => {
            return {
                ...state,
                enquiryType: [...action.payload]
            }
        },

        setEnquiryTypeLoader: (state, action) => {
            return {
                ...state,
                enquiryTypeLoader: !state.enquiryTypeLoader
            }
        },


        setListModal: (state, action) => {
            return {
                ...state,
                ListModal: !state.ListModal,
            }
        },

        setListModalItem: (state, action) => {
            return {
                ...state,
                ListModalItems: [...action.payload]

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


export const cleanForm = EnquirySlice.actions.cleanForm
export const setSubmitLoader = EnquirySlice.actions.setSubmitLoader
export const setSaleLedBySelected = EnquirySlice.actions.setSaleLedBySelected
export const setEnquiryFormData = EnquirySlice.actions.setEnquiryFormData
export const setEnquiryTypeLoader = EnquirySlice.actions.setEnquiryTypeLoader
export const setEnquiryType = EnquirySlice.actions.setEnquiryType;
export const setListModalItem = EnquirySlice.actions.setListModalItem;
export const setListModal = EnquirySlice.actions.setListModal;
export const setSalesLeadByLoader = EnquirySlice.actions.setSalesLeadByLoader;
export const setSalesLeadBy = EnquirySlice.actions.setSalesLeadBy;
export const setBusinessUnit = EnquirySlice.actions.setBusinessUnit;
export const setBusinessUnitLoader = EnquirySlice.actions.setBusinessUnitLoader;
export const setBranchCodeLoader = EnquirySlice.actions.setBranchCodeLoader;
export const setBranchCode = EnquirySlice.actions.setBranchCode;
export default EnquirySlice.reducer;