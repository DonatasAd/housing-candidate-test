import React from 'react';
import styled from 'styled-components';

const TaskForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default function NewTask({ onNewTaskChange, addTask, newTask }) {
  return (
    <TaskForm onSubmit={addTask}>
      <input type='text' placeholder='New Task' name='title' onChange={onNewTaskChange} value={newTask} aria-label='New task name' aria-required='true' />
      <button type='submit' aria-label='Add new task'>Add Task</button>
    </TaskForm>
  );
}
