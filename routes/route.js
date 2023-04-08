
import express from 'express'

//404 route not found after calling api

import { addTodo,getAllTodos ,toggleTodoDone,updateTodo,deleteTodo} from '../controller/todo-controller.js';
//subpath
const route= express.Router();

route.post('/todos',addTodo)
route.get('/todos',getAllTodos)
route.get('/todos/:id',toggleTodoDone)
route.put('/toda/:id',updateTodo)
route.delete('/todelete/:id',deleteTodo)

export default route;
