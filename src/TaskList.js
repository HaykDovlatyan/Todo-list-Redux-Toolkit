import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask } from './store';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = id => {
    dispatch(removeTask(id));
  };

  const handleToggleTask = id => {
    dispatch(toggleTask(id));
  };

  return (
    <div className='mekn'>
      {tasks.map(task => (
        <div className="apex" key={task.id} >
          <span>{task.title}</span>
          <button onClick={() => handleRemoveTask(task.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;