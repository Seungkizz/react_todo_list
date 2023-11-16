import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './componets/ui/TodoTemplate';
import TodoInput from './componets/ui/TodoInput';
import TodoList from './componets/list/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '1일 1커밋하기',
      checked: true,
    },
    {
      id: 2,
      text: '운동 하기',
      checked: false,
    },
    {
      id: 3,
      text: '프로젝트 코드 리팩토링',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onAdd = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  const onCheck = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo)
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id)); // 클릭되지 않은 나머지만 추출하여 새로운 배열 생성
    },
    [todos]
  );


  return (
    <TodoTemplate>
      <TodoInput onAdd={onAdd} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onCheck={onCheck}
      />
    </TodoTemplate>
  );
}

export default App;
