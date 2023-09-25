import { createSlice } from "@reduxjs/toolkit";

const ChatScreenSlice = createSlice({


  name: "ChatScreenSlice",
  initialState: {
    data: [],
    selectedData: [],
    selectedValue: "",
    pickerSelectedItems: [],
    queryString: "",
    itemSelected: false,
    error: false,
    errorName: "",
    isLoading: false,
    querySent: false,
    orders: [], 

  },

  reducers: {

    setData: (state, action) => {
      const data = action.payload;
      if (Object.keys(data)[0] == "sales") {
        return {
          ...state,
          data: [...data.sales],
          selectedData: [...data.sales],
          error: false,
          errorName: "",
          queryString: "",
          querySent: true,
        }
      }
      if (Object.keys(data)[0] == "error") {
        return {
          ...state,
          error: true,
          errorName: Object.values(data)[0],
          queryString: "",
          querySent: true,
        }
      }

      if (action.payload == "Error") {
        return {
          ...state,
          error: true,
          errorName: 'Bad Request Please Enter A Valid Request',
          queryString: "",
          querySent: true,
        }
      }
    },


    setLoading: (state, action) => {
      return {
        ...state,
        isLoading: !state.isLoading,
        querySent: true,
      }
    },

    setQuery: (state, action) => {
      return {
        ...state,
        queryString: action.payload,
      };
    },

    selectPicker: (state, action) => {

      const { index, itemValue, type } = action.payload;

      const data = state.selectedData.find((item) => item.id == index)



      if (data) {
        var tempObj = state.selectedData.map((item) => {

          if (item.id === index) {
            if (Object.keys(item.context_required) == 'item_names') {
              return {
                ...item,
                item_name: itemValue,
              }
            }

            if (Object.keys(item.context_required) == 'customer_name') {
              return {
                ...item,
                customer_name: itemValue,
              }
            }
          }

          else {
            return {
              ...item,
            }
          }

        })

        return {
          ...state,
          pickerSelectedItems: [...tempObj],
          itemSelected: true,
          selectedValue: itemValue,
        }

      }
    },




   sendOrder : (state, action) => {
       console.log(action.payload)
   }





  },
});

export const sendOrder = ChatScreenSlice.actions.sendOrder;
export const setLoading = ChatScreenSlice.actions.setLoading;
export const setData = ChatScreenSlice.actions.setData;
export const setQuery = ChatScreenSlice.actions.setQuery;
export const selectPicker = ChatScreenSlice.actions.selectPicker;
export default ChatScreenSlice.reducer;
