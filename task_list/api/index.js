'use strict'
import express from 'express'
import serverless from 'serverless-http'
import {fetchTasks,deleteTasks,updateTasks,createTasks} from './task'


var app = module.exports = express()

app.get('/task', async(req, res)=>{
  try{
    const tasks=await fetchTasks();
    res.send(tasks.Items)
  }
  catch(err){
    res.status(400).send('error fetch tasks ${err}')
  }
});

app.put('/task', async(req, res)=>{
    try{
        const task=req.body;
        const response=await updateTasks(task);
        res.send(response)
      }
      catch(err){
        res.status(400).send('error updating tasks ${err}')
      }
});

app.post('/task', async(req, res)=>{
    try{
        const task=req.body;
        const response=await createTasks(task);
        res.send(response)
      }
      catch(err){
        res.status(400).send('error creating tasks ${err}')
      }
});

app.delete('/task/:id', async(req, res)=>{
    try{
        const {id}=req.params;
        const response=await deleteTasks(task);
        res.send(response)
      }
      catch(err){
        res.status(400).send('error delete tasks ${err}')
      }
});

/* istanbul ignore next */
if (process.env.DEVELOPMENT) {
  app.listen(3001,()=>{
  console.log('Express started on port 3001');
});
}

export const handler=serverless(app);
