import {configureStore} from '@reduxjs/toolkit';
import ExpenseFormSlice from './Slices/ExpenseFormSlice';
import ChatScreenSlice from './Slices/ChatScreenSlice';
import PendingExpenseSlice from './Slices/PendingExpenseSlice';
import LoginScreenSlice from './Slices/LoginScreenSlice';
import CartPageSlice from './Slices/CartPageSlice';

export const Store = configureStore({
    
    reducer: {
        ExpenseFormSlice,
        ChatScreenSlice,
        PendingExpenseSlice,
        LoginScreenSlice,
        CartPageSlice,
    },


});