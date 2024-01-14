import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const ChatScreenSlice = createSlice({


  name: "ChatScreenSlice",
  initialState: {
    data: [],
    selectedData: [],
    EnquiryData : [{
      query: "Yes Ssdiiowe",
      sales: {
        CustomerNumber : "shu",
      }
    }],
    ReportData : [],
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
    suggestionModal: false,
    SpeechRecording: false,
    chatSuggestions: [],
    suggestionVisible: false,
    Route: "Sale",
  },

  reducers: {

    setRoute: (state, action) => {
      const data = action.payload;

      return {
        ...state,
        Route: data,
      }

    },

    setSuggestionVisible: (state, action) => {
      return {
        ...state,
        suggestionVisible: !state.suggestionVisible
      }
    },

    clearChatSuggestion: (state, action) => {
      return {
        ...state,
        chatSuggestions: []
      }
    },

    setChatSuggestion: (state, action) => {
      return {
        ...state,
        chatSuggestions: [...action.payload]
      }
    },

    setSpeechRecording: (state, action) => {

      return {
        ...state,
        SpeechRecording: true
      }
    },

    setSpeechRecordingFalse: (state, action) => {

      return {
        ...state,
        SpeechRecording: false
      }
    },

    setSuggestionModal: (state, action) => {
      return {
        ...state,
        suggestionModal: !state.suggestionModal,

      }
    },

    setCartRefresh: (state, action) => {
      return {
        ...state,
        CartRefresh: !state.CartRefresh
      }
    },

    setIdForCompChange: (state, action) => {
      const id = action.payload
      return {
        ...state,
        idForCompChange: id,
      }
    },

    setData: (state, action) => {
      const data = action.payload;

      if (typeof data.data == "object") {
        const { item_id } = data.data[data.data.length - 1]

        const data2 = {
          query: state.queryString,
          sales: data.data
        }

        return {
          ...state,
          data: [...data2.sales],
          selectedData: [...state.selectedData, data2],
          error: false,
          errorName: "",
          queryString: "",
          querySent: true,
          lastid: item_id,
        }
      }

      if (typeof data.data == "string") {
        const obj = {
          query: state.queryString,
          sales: null,
          message: data.data
        }

        return {
          ...state,
          selectedData: [...state.selectedData, obj],
          errorName: data,
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
      const { last_id } = action.payload;

      return {
        ...state,
        lastid: last_id,
      }
    },

    setSelectedData: (state, action) => {
      return {
        ...state,
        selectedData: [],
      }
    }

  },
});


export const setRoute = ChatScreenSlice.actions.setRoute;
export const setSelectedData = ChatScreenSlice.actions.setSelectedData;
export const clearChatSuggestion = ChatScreenSlice.actions.clearChatSuggestion;
export const setSuggestionVisible = ChatScreenSlice.actions.setSuggestionVisible;
export const setChatSuggestion = ChatScreenSlice.actions.setChatSuggestion;
export const setSpeechRecordingFalse = ChatScreenSlice.actions.setSpeechRecordingFalse;
export const setSpeechRecording = ChatScreenSlice.actions.setSpeechRecording;
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
