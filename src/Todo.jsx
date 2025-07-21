import './Todo.css'
import {useState} from "react";
import {v4 as uuidv4 } from 'uuid';
export default function TodoList() { 
    let [todos, setTodos] = useState([{task : "Sample-task", id : uuidv4() ,isDone : false}])
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task : newTodo, id: uuidv4(), isDone : false }]
        });
        setNewTodo("");
    };
    let updateTodoValue = (event)  => {
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
    let copy = todos.filter((todo) => todo.id !== id);
    setTodos(copy);
};


let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone : true,
      }))
    );
  };

  // 5. Make only ONE task uppercase (takes ID)
  let MarkAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone : true ,
          };
        } else { 
          return todo;
        }
      })
    );
  };


    return (
        <div>
            <h1>Todo List App</h1>

            <h2>Add Your Todo Task</h2>
            <div className='section1'>

            <input type = "text" placeholder = "add a task" value = {newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            </div>
                <hr></hr>
            <div className='section2'>
                          <h4>Todo List</h4>
            <ul className='Data'>
                {
                    todos.map((todo) => (
                            <li key={todo.id} className="task-item">
                            <div className="task-row">
                                <span
                                className="task-text"
                                style={todo.isDone ? { textDecoration: "line-through" } : {}}
                                >
                                {todo.task}
                                </span>
                                <div className="btn">
                                <button className="btn1" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                <button className="btn1" onClick={() => MarkAsDone(todo.id)}>Mark As Done</button>
                                </div>
                            </div>
                            </li>

                    ) )
                }
            </ul> 

            <button onClick = {markAllDone} className='item'>Mark All as Done </button>
            </div>
 
</div>
    ); 
} 