/* eslint-disable no-unused-vars */
import { createContext,useContext } from "react";

export const TodoContext = createContext({


    todos:[
        {
            id:1,
            todo: "Todo msg",
            completed:false,

        }
    ],

    addTodo: (_todo) =>{
    },
    updatedTodo: (_id,_todo) =>{},
    deleteTodo: (_id) => {},
    toggleComplete: (_id) => {}






})

export const useTodo = ()=>{
    return useContext(TodoContext)
}


export const Todoprovider = TodoContext.Provider;