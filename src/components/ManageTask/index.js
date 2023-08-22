import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from "../../redux/Action";

const ManageTask=(props)=>{
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    console.log("managetask",todos);
    
return(
    <>
    <h1>Manage Task</h1>
    <ul>
        {todos.map((item,index)=>{
return (<li key={index}>{item}<button onClick={()=>dispatch(removeTodo(index))}>X</button></li>)
        })}
    
</ul>
</>
)
}
export default ManageTask;