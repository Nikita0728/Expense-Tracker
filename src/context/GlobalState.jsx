"use client";
import React, { useContext } from 'react'; // Import useContext
import { createContext, useReducer } from 'react'; // Import globalContext and reducer
import AppReducer from './AppReducer'


const initialState={
    transaction:[
        {
            id:1 , text: 'flower', amount: 20
        }
        ,
        {
            id:2 , text: 'salary', amount: -300
        }, {
            id:3 , text: 'book', amount: 10
        },
        {
            id:4 , text: 'fcamera', amount: -50
        }
    ]
}
//createContext
export const GlobalContext= createContext(initialState);

export const GlobalProvider = ({children}) => {
    console.log(initialState.transaction);
    const [state, dispatch] = useReducer(AppReducer, initialState); 
    return (
       
            <GlobalContext.Provider value={{
                transaction :state.transaction
            }}>
                {children}
            </GlobalContext.Provider>
    )
}

 


