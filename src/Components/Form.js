import React,{useState} from 'react';
import './Form.css';
function Form() {
   const [Name, setName]=useState();
   const [Email, setEmail]=useState();
    const handleChange = (Name)=>{ setName(Name);}
    const handle = (Email)=>{ setName(Email);}
  const submit=() =>{
    alert(Name,Email)
    
  }
 

    return (
       <form >
      <div class="container">
        <h2>Create User</h2>
        <label>Name:</label>
        <input type="text" value={Name} onChange={(e) =>{ handleChange(e.target.value)}}
       />
        
        <label>Email:</label>
        <input type="email" value={Email} onChange={(e) =>{ handle(e.target.value)}}/>
        <label>Password:</label>
        <input type="password"/>
        <button onClick={submit}>Submit </button>
      </div>
      </form>
    );
    }
    
  
  
  export default Form;
  