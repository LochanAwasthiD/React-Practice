import React from 'react';
import './App.css'; 
import { useState } from 'react';

export default function Form(){

    let[formData, setForm] = useState({
        username: '',
        password: ''
    });

    let handleChange = (event) =>{

        setForm((data)=>{
            return{

                ...data, [event.target.name] : event.target.value
            };

        });
        console.log(event.target.value);
      
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setForm({
            username: '',
            password: ''
        });
    };

    return(
       <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username:</label>
        <input id="username" name="username" type="text" value={formData.username} placeholder="Enter your username" onChange={handleChange}></input>
<br></br>
        <br></br>
       <label htmlFor="password">Enter password:</label>
        <input id="password" name="password" type="password" value={formData.password} placeholder="Enter your password" onChange={handleChange}></input>
<br></br>
<br></br>
        <button type="submit">Submit</button>
       </form>
    )

}