import React, { useState } from 'react';
import TodoForm from './todoform';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;

{/*const Header = (props) => {
    const onSelectedValueChanged =(event) => {
      props.onSelectedValueChanged(event.target.value);
    }
    return (
  <select onChange={onSelectedValueChanged}>
                <option value="">Filter by Year</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
        </select>
        )
    };
*/}
{/*const sortByDate = (a,b) => {
    if (new Date(a.dueDate) < new Date(b.dueDate)){
        return -1;
    }
    if (new Date(a.dueDate) > new Date(b.dueDate)) {
        return 1;
    }
    return 0;
}
const sortByStatus = (a,b) => {
    if (a.isComplete < b.isComplete){
        return -1;
    }
    if (a.isComplete > b.isComplete) {
        return 1;
    }
    return 0;
}

*/}
{/*const submitUpdate = value => {
    const start = Date.now();
    updateTodo(edit.id, value, start);
    setEdit({
      id: null,
      value: '',

    });
  };*/}