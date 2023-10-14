import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

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
    idForCompChange: 0,
    CartRefresh: false,
    suggestionModal:  false,
  },

  reducers: {

    setSuggestionModal: (state, action) => {
            return {
              ...state,
              suggestionModal: !state.suggestionModal,
            
            }
    },

    setCartRefresh: (state, action) => {
            return {
              ...state,
              CartRefresh : !state.CartRefresh
            }
    },

    setIdForCompChange : (state, action) => {
        const id = action.payload
        return{
          ...state,
          idForCompChange : id,
        }
    },

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
      
    },


    setModalVisible: (state, action) => {
      return {
        ...state,
        modalVisible: !state.modalVisible,
      }
    },


    selectPickerItems: (state, action) => {
      const id = state.idForCompChange;
      const { item } = action.payload
      const tempObj = state.selectedData.find((item) => {
        if (item.sales != null) {
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


     selectPickerCustomer: (state, action) => {
      const id = state.idForCompChange;
      const { item } = action.payload
      const tempObj = state.selectedData.find((item) => {
        if (item.sales != null) {
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
                  customer_name: item,
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

    selectBothPicker: (state, action) => {
      const { id, item, customer } = action.payload
      const tempObj = state.selectedData.find((item) => {
        if (item.sales != null) {
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
                  customer_name: customer,
                  item_name : item,
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


export const setSuggestionModal = ChatScreenSlice.actions.setSuggestionModal;
export const setCartRefresh = ChatScreenSlice.actions.setCartRefresh;
export const setIdForCompChange = ChatScreenSlice.actions.setIdForCompChange;
export const selectBothPicker = ChatScreenSlice.actions.selectBothPicker;
export const selectPickerCustomer = ChatScreenSlice.actions.selectPickerCustomer;
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
