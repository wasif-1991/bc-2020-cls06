import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';


const initialTransactions  = [
    // {amount: 400, desc: "Cash"},
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransactoin(transObj){
        dispatch({
            type: "ADD_TRANSATION",
            payload: transObj
        })
    }

    return(
        <TransactionContext.Provider value={
            {
            transactions: state,
            addTransactoin
            }
        }>

            {children}

        </TransactionContext.Provider>
    );
}

