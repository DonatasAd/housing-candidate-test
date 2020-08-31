import React, { useState } from 'react';
import Task from './Task';
import NewTask from './NewTask';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  max-width: 300px;
`;

const sampleTaks = [
  { id: 1598528382326, title: 'Wash dishes', done: false },
  { id: 1598528382843, title: 'Read book', done: false },
  { id: 1598528383242, title: 'Get some sleep', done: true },
];

export default function Todo() {
  const [tasks, setTasks] = useState(sampleTaks);
  const [newTask, setNewTask] = useState('');

  function addTask(event) {
    event.preventDefault();
    if (newTask !== '') {
      setTasks((prevState) => [{ id: Date.now(), title: newTask, done: false }, ...prevState]);
      setNewTask('');
    }
  }

  function onNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function onComplete(event) {
    const id = +event.target.id;
    const newTasks = tasks.map((el) => {
      if (el.id === id) {
        return { id: el.id, title: el.title, done: !el.done };
      }
      return el;
    });
    setTasks(newTasks);
  }

  return (
    <Container>
      <Title>All Tasks</Title>
      <NewTask addTask={addTask} onNewTaskChange={onNewTaskChange} newTask={newTask} />
      {tasks.map((el, key) => (
        <Task key={key} id={el.id} title={el.title} done={el.done} onComplete={onComplete} />
      ))}
      <h3>Total tasks: {tasks.length}</h3>
    </Container>
  );
}
