import React from 'react';
import './Todo.css';
import useLocalStorage from './useLocalStorage';


function TodoApp(){
    const[task,setTask] = useLocalStorage("task",[]);
    const [tasklist,setTaskList] = useLocalStorage("tasklist",[]);
    
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    const currDate = "Date: "+date;
    
  
    

  

    

  //  const[date,setDate]=useLocalStorage("date",[]);
 //   const[datelist,setDateList]=useLocalStorage("datelist",[]);
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
   //const DatehandleChange =(e)=>{
 //      setDate(e.target.value);
  // };
 
      const AddTask =() => {
       
        
        if(task  !== ""){
            const taskDetails={
                id: Math.floor(Math.random()*1000),
                value: task,
                date:currDate,
              
             
            };
            
         setTaskList([...tasklist, taskDetails]);
        }
    };

    //const AddDate =() => {
    //    if(date  !== ""){
        //    const dateDetails={
      //          id: Math.floor(Math.random()*1000),
         //      date: date,
     //    };
     //   setDateList([...datelist, dateDetails]);
   // };

//const removeId = (e, id )=>{
    //    e.preventDefault();
     //   setTaskList(datelist.filter((a) => a.id !== id));
//};
 const removeTask = (e, id )=>{
      e.preventDefault();
       setTaskList(tasklist.filter((t) => t.id !== id));
 };
 


return(
    <div>
        <h3>Todolist</h3>
        <div>
             {tasklist.map((t) => (
             <li class="ui"> {t.value}.....{t.date}...
               <button onClick={(e)=> removeTask(e, t.id)}><i class="fa fa-close"></i></button>
             </li>))}
         
                  </div>  
                 
           
        
       
        
        
        <form>
        <input type="text" placeholder="Enter Item" id="text" name="text" onChange={(e) => TexthandleChange(e)} />
        
        <button class="btn" type="submit" onClick={AddTask} >Submit</button>
        
        </form>
        
        
    </div>
      );
}

export default TodoApp;