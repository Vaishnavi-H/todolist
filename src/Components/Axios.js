import React,{useEffect,useState} from "react";
import axios from 'axios';

function Axios(){
    const[post,setPost]=useState([]);
    const[id,setId]=useState([1]);
    const[click,setClick]=useState([1])

    useEffect( ()=> {
        axios
           .get(`https://jsonplaceholder.typicode.com/posts/${click}`)
           .then(res =>{
            console.log(res)
            setPost(res.data)               
            })
            .catch(err=>{
            console.log(err)
            })
        },[click])
    const handleChange =(e)=>{
        setClick(id);
    }
    return(
      <div>
          <input type="text" value={id} onChange= {(e)=> setId(e.target.value)}/>
          <button type="button" onClick={handleChange}>Fetch Data</button>
          <div>{post.title}</div>
        {/*  {post.map((d)=>(
        <li>{d.title}</li> ) )
        } */}
      </div>
    );

}
export default Axios;