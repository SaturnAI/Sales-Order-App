import { createSlice } from "@reduxjs/toolkit";


const PendingExpenseSlice = createSlice({

    name: "PendingExpenseSlice",
    initialState: {
        tempData: [],
        Amount: [],
        isAmountLoading: false,
        modalVisible: false,
        AttachPickerValue: "Rajinder Makhija",
        selectedData : [],
    },

    reducers: {

        getData: (state, action) => {
            state.tempData = [];
            const datathis = action.payload;
            for (var data in datathis) {
                var obj = datathis[data];
                state.tempData.push(obj);
            }
        },


       

        cardSelect: (state, action) => {
            const { id } = action.payload;

            const newData = state.tempData.map((newItem) => {
                if (newItem.id == id) {
                    return {
                        ...newItem,
                        selected: newItem.selected == false || newItem.selected == undefined ? true : false,
                    }
                }

                return {
                    ...newItem,
                    selected: newItem.selected == true ? true : false,
                }
            })

            return {
                ...state,
                tempData: newData,
            }

        },


        setModalVisible: (state, action) => {
            return {
                ...state,
                modalVisible: !state.modalVisible,
            }
        },


        setAttachPicker: (state, action) => {
            return {
                ...state,
                AttachPickerValue: action.payload,
            }
        },


        setSelectedData : (state, action) => {
               const selectedData = state.tempData.filter((data)=> data.selected == true)
               console.log(selectedData)
              
        }

    },
})


export const setSelectedData = PendingExpenseSlice.actions.setSelectedData;
export const setAttachPicker = PendingExpenseSlice.actions.setAttachPicker;
export const setModalVisible = PendingExpenseSlice.actions.setModalVisible;
export const getData = PendingExpenseSlice.actions.getData;
export const cardSelect = PendingExpenseSlice.actions.cardSelect;
export default PendingExpenseSlice.reducer;