import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import axios from 'axios'
import React,{useEffect,useState} from 'react';
import { API_URL } from './util';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export default function App() {
  const [tasks,setTasks]=useState([])

  const fetchTasks=async()=>{
    try{
      const {data}=axios.get(API_URL)
      setTasks(data)

    }
    catch (err){
      console.log(err)

    }

  }
  return (
    <ThemeProvider theme={darkTheme}>
      "Hello Hello 1 2 3"
      <CssBaseline />
      <AddTaskForm/>
      <Task task={task}/>
    </ThemeProvider>
  );
}
