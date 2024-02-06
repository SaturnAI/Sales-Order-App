import { createSlice } from "@reduxjs/toolkit";

const EnquiryListPageSlice = createSlice({
    name: "EnquiryListPageSlice",
    initialState: {

        showSearch: true,

    },
    reducers: {
        toggleSearch: (state, action) => {
            return {
                ...state,
                showSearch: !state.showSearch
            }
        }
    }
})


export const toggleSearch = EnquiryListPageSlice.actions.toggleSearch;
export default EnquiryListPageSlice.reducer;