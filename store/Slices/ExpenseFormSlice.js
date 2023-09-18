import { createSlice } from "@reduxjs/toolkit";

const ExpenseFormSlice = createSlice({

  name: "ExpenseFormSlice",
  initialState: {
    data: [],
    isChecked: false,
    totalAmount: "",
    modalVisible : false,
    viewRemarks: false,
  },

  reducers: {
    updateData: (state, action) => {
      state.data = [];
      const datathis = action.payload;
      for (var data in datathis) {
        var obj = datathis[data];
        state.data.push(obj);
      }
    },

    calculateAmount: (state, action) => {
      let temp = 0;
      const data = action.payload;
      if(data){
        for (var d in data) {
          var obj  = data[d]
          temp = temp + Number(obj.Amount);
        }
        
        return {
          ...state,
          totalAmount : temp.toString(),
        }
      }

    },
     
      // return {
      //   ...state,
      //   totalAmount : temp.toString(),
      // }

    setCheckbox: (state, action) => {

      return {
        ...state,
        isChecked: true,
      }
    },


    setModalVisible : (state, action) => {
          return {
            ...state,
            modalVisible : !state.modalVisible,
          }
    },

    setViewRemarks: (state, action) => {
         return {
          ...state, 
          viewRemarks: !state.viewRemarks,
         }
    },
    
  }
},

  
);

export const setViewRemarks = ExpenseFormSlice.actions.setViewRemarks;
export const setModalVisible = ExpenseFormSlice.actions.setModalVisible;
export const calculateAmount = ExpenseFormSlice.actions.calculateAmount;
export const setCheckbox = ExpenseFormSlice.actions.setCheckbox;
export const updateData = ExpenseFormSlice.actions.updateData;
export default ExpenseFormSlice.reducer;
