import React, { useState } from 'react';
import './Todo.css';
import useLocalStorage from './useLocalStorage';
import img1 from './profile.jpg';

function TodoApp(){
    const[task,setTask] = useLocalStorage("task",[]);
    const [tasklist, setTaskList] = useLocalStorage("tasklist",[]);
    const time =Date().toString();
    
    //const initialFormData = Object.freeze({
      // text : "",
       // date: ""
     // })
      //const FooBarForm = () => {
       // const [task, setTask] = React.useState(initialFormData);
      
        ///const handleChange =(e) => {
         // setTask({
            //...task,
      
           // [e.target.name]: e.target.value
        //  });
//  };
   // }

   const handleChange = (e)=>{
       setTask(e.target.value);
   };
      
      const AddTask = () => {
        if(task !== ""){
            const taskDetails={
                id: Math.floor(Math.random()*1000),
                value: task,
                date:time,
                
                
           };
        setTaskList([...tasklist, taskDetails]);
        }
    };
 const removeTask = (e, id )=>{
        e.preventDefault();
        setTaskList(tasklist.filter((t) => t.id !== id));
};

return(
    <div>
        <h3>Todolist</h3>
        {tasklist !== [] ? (
        <div>
             {tasklist.map((t,time) => (
             <div class="ui"> {t.value}{t.time} 
            
            <button onClick={(e)=> removeTask(e, t.id)}><i class="fa fa-close"></i></button></div>))}
         </div>        
        
        ): null }
        <form >
        <input type="text" placeholder="Enter Item" id="text" name="text" onChange={(e) => handleChange(e)} />
        <input type="date" name="date" onChange={(e) => handleChange(e)}/>
        
        <button class="btn" onClick={AddTask}>Submit</button>
        
        </form>
        <br></br>
        
    </div>
      );
}

export default TodoApp;