import { createSlice } from "@reduxjs/toolkit";


const PendingExpenseSlice = createSlice({

    name: "PendingExpenseSlice",
    initialState: {
        tempData: [],
        Amount: [],
        isAmountLoading: false,
        modalVisible: false,
        AttachPickerValue : "Rajinder Makhija"
    },

    reducers: {

        getData: (state, action) => {

            return {
                ...state,
                tempData: [...action.payload]
            }
        },


        pushAmount: (state, action) => {
            var tempAmount = [];
            const datathis = action.payload;
            
            // state.isAmountLoading = true
            for (var data in datathis) {
                var obj = datathis[data];
                const tempNum = Number(obj.Amount);
                tempAmount.push(tempNum);
            }

            return {
                ...state,
                Amount: tempAmount,
                isAmountLoading: false
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


     setModalVisible :(state, action)=> {
         return {
              ...state,
              modalVisible: !state.modalVisible,
         }
     },


     setAttachPicker :  (state, action) => {
        return {
            ...state,
            AttachPickerValue : action.payload,
        }
     }

    },
})

export const setAttachPicker = PendingExpenseSlice.actions.setAttachPicker;
export const setModalVisible = PendingExpenseSlice.actions.setModalVisible;
export const pushAmount = PendingExpenseSlice.actions.pushAmount;
export const getData = PendingExpenseSlice.actions.getData;
export const cardSelect = PendingExpenseSlice.actions.cardSelect;
export default PendingExpenseSlice.reducer;