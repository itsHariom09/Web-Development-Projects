import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoTask(){
    let [todos,setTodos]=useState([{task:"Sample task",id:uuidv4(), isDone:false}]);
    let [newTodos,setNewTodos]=useState("");

    let addTask=()=>{
        setTodos((prevTasks)=>{
            return [...prevTasks,{task:newTodos,id:uuidv4(),isDone:false}];
        });
        setNewTodos("");
    }
    let updateTode=(event)=>{
        setNewTodos(event.target.value);
    }

    let deleteTODE = (id) => {
        setTodos((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id);
        });
    };

    let upperCaseAll=()=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        })
        ));
    }

    let markAll=()=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
            return {
                ...todo,
                isDone: true,
            };
        })
        ));
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    let markOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };


    return(
        <div>
            <input type="text" placeholder="Enter the Task" value={newTodos} onChange={updateTode}/><br />
            <button onClick={addTask}>ADD TASK</button>
            <br />
            <hr />
            <h3>Todo List</h3>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecoration: "line-through"} : {}}>
                            {todo.task}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTODE(todo.id)}>DELETE</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>upperCaseOne(todo.id)}>UPPERCASE</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>markOne(todo.id)}>MARK DONE</button>
                        <br />
                        <br />
                    </li>
                    
                    
                ))}
            </ul>
                <button onClick={upperCaseAll}>UpperCase All</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={markAll}>Mark All Done</button>

        </div>
    );
}