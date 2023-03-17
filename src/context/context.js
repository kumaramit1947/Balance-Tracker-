import React, {createContext, useReducer} from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) =>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    const addTransaction = (transaction) =>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    const deleteTransaction = (id) =>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    const balance = transactions.reduce((acc,curr)=>{
        return curr.type === 'Income' ? acc+curr.amount : acc-curr.amount ;
    },0);
    return (
        <ExpenseTrackerContext.Provider value={{balance, transactions, addTransaction, deleteTransaction}}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}