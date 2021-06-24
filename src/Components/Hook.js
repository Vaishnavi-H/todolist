import React,{ useEffect, useState } from "react";

function Hook(){
    const[data,setData]=useState([]);

useEffect( ()  => {
    loadData();
    getData();
},[]);
const loadData = async () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setData(data));
}


async function getData(){
  const api="https://jsonplaceholder.typicode.com/users";
  const result=await fetch(api);
  const getresult=await result.json();
  setData(getresult);
  
}

return(
   <ul> {data.map ((d) => (
        <div key={d.id}> name:{d.name}.....Email:{d.email}....
        username:{d.username}</div>))}
        <hr></hr>
    </ul>
);
}
export default Hook;