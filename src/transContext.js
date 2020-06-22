import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransactions = [
    { amount: 30000, desc: "Salery" },
    { amount: -50, desc: "Cold Drink" },
    { amount: 100, desc: "Deposit" },
    { amount: -200, desc: "Gas Bill" },

];

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }

    function deleteTransaction(index) {
        dispatch( {
            type: "DELETE_TRANSACTION",
            payload: index
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}