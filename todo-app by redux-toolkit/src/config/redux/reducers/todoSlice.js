import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "Todos",
    initialState: {
        todos: [
            {
                title: 'hello world',
                id: nanoid()
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        removeTodo: (state, action) => {
            state.todos.splice(action.payload.index, 1);
        },
        editTodo: (state, action) => {
            const { index, newTitle } = action.payload;
            state.todos[index].title = newTitle;
          },
        },
})

export const { addTodo, removeTodo,editTodo } = todoSlice.actions
export default todoSlice.reducer