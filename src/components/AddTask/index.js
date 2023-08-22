import React,{useState} from "react";
import { Box,TextField,Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { addTodo } from "../../redux/Action"; 


const AddTask=()=>{
    const [task,setTask]=useState("");
    const dispatch=useDispatch();
    const handleTask=(e)=>{
        setTask(e.target.value);
    }
   const handleAddTask=()=>{
    if(task!==""){
        
   //console.log("addtask",dispatch(addTodo(task)));
        dispatch(addTodo(task));
        setTask("");
    }
   }
    return(
        <>
        <h1>Add Task</h1>
        <Box
          component="form"
          
          noValidate
          autoComplete="off"
        >
    
    <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleTask} value={task}  />
    
    <Button variant="contained" onClick={handleAddTask}>Contained</Button>
        </Box>
    </>
    )
}
export default AddTask;