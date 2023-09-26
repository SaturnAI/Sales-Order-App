import { createSlice } from "@reduxjs/toolkit";

const ChatScreenSlice = createSlice({


  name: "ChatScreenSlice",
  initialState: {
    data: [],
    selectedData: [],
    selectedValue: "",
    pickerSelectedItems: [],
    queryArray: [],
    queryString: "",
    itemSelected: false,
    error: false,
    errorName: "",
    isLoading: false,
    querySent: false,
    orders: [],
    modalVisible: false,
    lastid: 0,
  },

  reducers: {

    setData: (state, action) => {
      const data = action.payload;


      if (Object.keys(data)[0] == "sales") {
        const { item_id } = data.sales[data.sales.length - 1]

        data.query = state.queryString
        return {
          ...state,
          data: [...data.sales],
          selectedData: [...state.selectedData, data],
          error: false,
          errorName: "",
          queryString: "",
          querySent: true,
          lastid: item_id,
        }
      }
      if (Object.keys(data)[0] == "error") {
        console.log(action.payload)
        const obj = {
          query: state.queryString,
          sales: null,
          message: `${Object.values(data)[0]} Not Found!!!`
        }

        return {
          ...state,
          selectedData: [...state.selectedData, obj],
          errorName: Object.values(data)[0],
          queryString: "",
          querySent: true,
        }
      }

      if (action.payload == "Error") {
        const obj = {
          query: state.queryString,
          sales: null,
          message: "Please Provide A Valid Query"
        }

        return {
          ...state,
          selectedData: [...state.selectedData, obj],
          errorName: Object.values(data)[0],
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


    setQueryArray: (state, action) => {
      return {
        ...state,
        queryArray: [...state.queryArray, action.payload]
      }
    },


    sendOrder: (state, action) => {
      console.log(action.payload)
    },


    setModalVisible: (state, action) => {
      return {
        ...state,
        modalVisible: !state.modalVisible,
      }
    },


    selectPickerItems: (state, action) => {
      const { id, item } = action.payload
      const tempObj = state.selectedData.find((item) => {
        if (item.sale != null) {
          return item.sales.find((item) => item.item_id == id)
        }
        else {
          return {
            ...item
          }
        }
      })

      if (tempObj) {
        const data = state.selectedData.map((obj) => {
          if (obj.sales != null) {
            const sales = obj.sales.map((sale) => {

              if (sale.item_id == id) {
                return {
                  ...sale,
                  item_name: item,
                  selected: true,
                }
              }

              else {
                return {
                  ...sale,

                }
              }
            })

            return {
              ...obj,
              sales
            }
          }
          else {
            return {
              ...obj
            }
          }


        })


        return {
          ...state,
          selectedData: [...data],
          modalVisible: false,
          itemSelected: true,
          selectedValue: item,
        }

      }



    },


    setLastID: (state, action) => {
      const data = action.payload


    },





  },
});

export const setLastID = ChatScreenSlice.actions.setLastID;
export const setQueryArray = ChatScreenSlice.actions.setQueryArray
export const selectPickerItems = ChatScreenSlice.actions.selectPickerItems;
export const setModalVisible = ChatScreenSlice.actions.setModalVisible;
export const sendOrder = ChatScreenSlice.actions.sendOrder;
export const setLoading = ChatScreenSlice.actions.setLoading;
export const setData = ChatScreenSlice.actions.setData;
export const setQuery = ChatScreenSlice.actions.setQuery;
export const selectPicker = ChatScreenSlice.actions.selectPicker;
export default ChatScreenSlice.reducer;
