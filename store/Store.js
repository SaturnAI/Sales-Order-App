import {configureStore} from '@reduxjs/toolkit';
import ExpenseFormSlice from './Slices/ExpenseFormSlice';
import ChatScreenSlice from './Slices/ChatScreenSlice';
import PendingExpenseSlice from './Slices/PendingExpenseSlice';
import LoginScreenSlice from './Slices/LoginScreenSlice';

export const Store = configureStore({
    
    reducer: {
        ExpenseFormSlice,
        ChatScreenSlice,
        PendingExpenseSlice,
        LoginScreenSlice,
    },


});