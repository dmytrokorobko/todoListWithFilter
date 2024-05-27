import './App.css';
import {initialTasks} from './data/initialTasks';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState(initialTasks);  
  function onSubmit(e) {
    e.preventDefault();

    if (todo.length <= 3) {
      alert('Enter more text to describe your task');
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: todo,
      completed: false
    };

    setTodos(prev => [
      newTodo,
      ...prev
    ]);

    setTodo('');
  } 

  function onCompleted(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;        
      return todo;
    }));
  }

  function onDeleted(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const [todo, setTodo] = useState('');
  function onTodoChange(e) {
    setTodo(e.target.value);
  }

  const [filterText, setFilterText] = useState('');
  function onTextInput(e) {
    setFilterText(e.target.value);
  }

  const [selectedCompletedValue, setSelectedCompletedValue] = useState('');
  function onCompletedChange(e) {
    setSelectedCompletedValue(e.target.value);
  }

  function onReset(e) {
    setFilterText('');
    setSelectedCompletedValue('');
  }

  useEffect(() => {
    console.log(filterText);
    console.log(selectedCompletedValue);
  }, [filterText, selectedCompletedValue]);

  return (
    <div className="App">
      <TodoForm onSubmit={onSubmit} todo={todo} onTodoChange={onTodoChange} />
      <TodoFilter filterText={filterText} selectedCompletedValue={selectedCompletedValue} onTextInput={onTextInput} onCompletedChange={onCompletedChange} onReset={onReset} />
      <TodoList todos={todos} onCompleted={onCompleted} onDeleted={onDeleted} />
    </div>
  );
}

export default App;
