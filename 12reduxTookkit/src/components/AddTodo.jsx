import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, updateEditMode, updateInputVal } from "../features/todo/todoSlice";

function AddTodo() {
  const editMode = useSelector((state) => state.editMode);
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput(''); // Reset input after adding todo
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: editMode.editId, text: editMode.editValue}));
    setInput(''); // Reset input after updating todo
    dispatch(updateEditMode({ edit: false, editId: 0 }));
  };

  const handleSubmit = (e) => {
    if (editMode.isEditable) {
      updateTodoHandler(e);
    } else {
      addTodoHandler(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={editMode.isEditable? editMode.editValue : input}
        onChange={(e) => editMode.isEditable? dispatch(updateInputVal(e.target.value)) : setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editMode.isEditable ? "Save" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
