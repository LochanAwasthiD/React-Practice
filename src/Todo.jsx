
import React from "react";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function Todo() {

    let [todos, setTodos] = useState([{task:"sample-task", id:uuidv4(),isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addTodo = () => {
        setTodos((prevTodos) => [...prevTodos, {task:newTodo, id:uuidv4(),isDone:false}]);
        setNewTodo(""); // Clear the input field after adding a todo
    };


    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodo)=> prevTodo.filter((todo)=> todo.id !== id));
    }

    let upperCase = ()=>{
        setTodos(
            (prevTodo)=> prevTodo.map((todo)=>{
                return{
                    ...todo, 
                    task:todo.task.toUpperCase()
                    // This will convert the task to uppercase
                    // while keeping the id unchanged
                }
            }
            )
        )
    };

    let lowerCase = (id)=>{

        setTodos(
            (prevTodo)=>
                prevTodo.map((todo)=>{
                    if(todo.id == id){
                         return {
                        ...todo,
                        task: todo.task.toLowerCase()
                        // This will convert the task to lowercase
                        // while keeping the id unchanged
                    };
                    }else{
                        return todo;
                    }   
                   
                })
        )

    }

    let markDone = (id) =>{
        setTodos((prevTodo)=>
            prevTodo.map((todo)=>{
                if(todo.id == id){
                    return{
                        ...todo,
                        isDone: true
                    }
                }
            }))
    }




    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Add a new todo" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addTodo}>Add To list</button>
            <br></br><br></br><br></br>
        <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine : "line-through", color: "red"} : {}}>{todo.task}</span>
                           <span><button onClick={() => deleteTodo(todo.id)}>Delete</button></span> 
                            <button onClick={() => lowerCase(todo.id)}>Lower-Case</button>
                            <button onClick={() => markDone(todo.id)}>Mark As Done</button>
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick={upperCase}>Uppercase All</button>
        </div>
    )
}