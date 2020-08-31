import React from 'react';
import styled from 'styled-components';

const ActiveTask = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 2rem;
  padding: 1rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const CompletedTask = styled(ActiveTask)`
  opacity: 0.5;
  text-decoration: line-through;
`;

export default function Task({ title, done, onComplete, id}) {
  return (
    <>
      {done ? (
        <CompletedTask>
          <label htmlFor={id}>{title}</label>
          <input id={id} type='checkbox' name='todo' value={title} checked={done} onChange={onComplete} aria-label='Active task' />
        </CompletedTask>
      ) : (
        <ActiveTask>
          <label htmlFor={id}>{title}</label>
          <input id={id} type='checkbox' name='todo' value={title} checked={done} onChange={onComplete} aria-label='Completed task'/>
        </ActiveTask>
      )}
    </>
  );
}
