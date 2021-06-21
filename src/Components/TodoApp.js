import React, { useState } from 'react';
import './Todo.css';
import useLocalStorage from './useLocalStorage';
import img1 from './profile.jpg';

function TodoApp(){
    const[task,setTask] = useLocalStorage("task",[]);
    const [tasklist, setTaskList] = useLocalStorage("tasklist",[]);
    const time =Date().toString();
    const[date,setDate]=useLocalStorage("date",[]);
    const[datelist,setDateList]=useLocalStorage("",[]);
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


   const TexthandleChange = (e)=>{
       setTask(e.target.value);
   };
   const DatehandleChange =(e)=>{
       setDate(e.target.value);
   };
   
      const AddTask =() => {
        if(task  !== ""){
            const taskDetails={
                id: Math.floor(Math.random()*1000),
                value: task,
                
         };
        
    
        setTaskList([...tasklist, taskDetails]);
        }
    };

    const AddDate =() => {
        if(task  !== ""){
            const dateDetails={
               
               
                value: date,
         };
        
    
        setDateList([...datelist, dateDetails]);
        }
    };


    

 const removeTask = (e, id )=>{
        e.preventDefault();
        setTaskList(tasklist.filter((t) => t.id !== id));
};


return(
    <div>
        <h3>Todolist</h3>
        <div>
             {tasklist.map((t) => (
             <li class="ui"> {t.value}
               <button onClick={(e)=> removeTask(e, t.id)}><i class="fa fa-close"></i></button>
             </li>))}
             {datelist.map((a) => (<li class="vi">{a.value}<button onClick={(e)=> removeTask(e, a.id)}><i class="fa fa-close"></i></button></li> 
                   ))}
                  
                  </div>  
                 
           
        
       
        
        
        <form >
        <input type="text" placeholder="Enter Item" id="text" name="text" onChange={(e) => TexthandleChange(e)} />
        <input type="date" name="date" onChange={(e) => DatehandleChange(e)}/>
        
        <button class="btn" type="submit" onClick={AddTask} >Submit</button>
        
        </form>
        
        
    </div>
      );
}

export default TodoApp;
