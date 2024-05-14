import { createSlice } from '@reduxjs/toolkit'

let initialState = [];
// console.log("local", localStorage.getItem("todos"))
// if (localStorage.getItem("todos") != null) {
//     initialState = JSON.parse(localStorage.getItem("todos"))
// }

const todoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
            // localStorage.setItem('todos', JSON.stringify(state))
        },
        removeTodo: (state, action) => {
            console.log(state)
            state = state.filter((todo) => todo.id !== action.payload)
            // localStorage.setItem('todos', JSON.stringify(state))
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer