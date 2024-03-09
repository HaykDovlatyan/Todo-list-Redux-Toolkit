import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './store';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const sumbit = e => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), title, completed: false }));
    setTitle('');
  };

  return (
    <form onSubmit={sumbit}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
};

export default AddTaskForm;