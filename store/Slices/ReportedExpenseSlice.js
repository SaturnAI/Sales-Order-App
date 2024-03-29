import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PendingApprovalData: [],

}

const ReportedExpenseSlice = createSlice({
    name: 'ReportedExpenseSlice',
    initialState,

    reducers: {
        setPendingApprovalData: (state, action) => {
            
            return {
                ...state,
                PendingApprovalData: [...action.payload]
            }
        }
    }
});


export const setPendingApprovalData = ReportedExpenseSlice.actions.setPendingApprovalData;
export default ReportedExpenseSlice.reducer;
