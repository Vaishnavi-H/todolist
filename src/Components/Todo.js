import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './Todo.css';

const AddTask = ({ addTask}) =>{
    
    const[value,updateValue]=useState("");

const handleSumbit = e =>{
    e.preventDefault();
    
    if(value !=="")
    {
        addTask(value)
        updateValue("");
     
    }
};
return (
    <form onSubmit={handleSumbit}>
        <input type="text" value={value} placeholder="Enter Item" onChange={e => updateValue(e.target.value)}/>
        <button class="btn" type="submit">Submit</button>
        </form>
);
}

const Todo = () =>{
    
   
    const addTask = text =>updateTask([...Task,{text}]);
    const [Task,updateTask] = useState( [{
        text:"Task1"}, { text:"Task2"}, { text:"Task3"}
     ] );

const removeTask = index =>{
   const newTask=[...Task];
   newTask.splice(index,1);
   updateTask(newTask);
   
}


    return(
        <div className="container">
            
            {Task.map((Task,index) => (<div class="ui">{Task.text} 
            <button onClick={()=> removeTask(index)}><i class="fa fa-close"></i></button>
            </div>
            ))}
            <AddTask addTask={addTask}/>
        </div>
    );
}

ReactDOM.render(<Todo/>,document.getElementById('root'));


export default Todo;