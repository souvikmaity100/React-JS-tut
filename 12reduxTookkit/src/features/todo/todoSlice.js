import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello" }],
  editMode: {isEditable: false, editId: 0, editValue: ''}
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((todo) => {
        let text2 = (todo.id == id) ? text : todo.text
        let id2 = (todo.id == id) ? id : todo.id
        return { id: id2, text: text2 }
      });
    },
    updateEditMode: (state, action) => {
        const {edit, editId} = action.payload
        state.editMode.isEditable = edit
        state.editMode.editId = editId
    },
    updateInputVal: (state, action) => {
        state.editMode.editValue = action.payload
    }
  },
});

export const { addTodo, removeTodo, updateTodo, updateEditMode, updateInputVal } = todoSlice.actions;

export default todoSlice.reducer;
