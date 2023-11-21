import {configureStore} from '@reduxjs/toolkit';
import ExpenseFormSlice from './Slices/ExpenseFormSlice';
import ChatScreenSlice from './Slices/ChatScreenSlice';
import PendingExpenseSlice from './Slices/PendingExpenseSlice';
import LoginScreenSlice from './Slices/LoginScreenSlice';
import CartPageSlice from './Slices/CartPageSlice';
import PlacedOrderSlice from './Slices/PlacedOrderSlice';
import ReportedExpenseSlice from './Slices/ReportedExpenseSlice';
import SignUpSlice from './Slices/SignUpSlice';

export const Store = configureStore({
    
    reducer: {
        ExpenseFormSlice,
        ChatScreenSlice,
        PendingExpenseSlice,
        LoginScreenSlice,
        CartPageSlice,
        PlacedOrderSlice,
        ReportedExpenseSlice,
        SignUpSlice,
    },


});