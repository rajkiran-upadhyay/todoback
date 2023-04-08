
import Todo from '../model/Todo.js'
//write biz logic in controller
export const addTodo = async (request, response) => {
    try {
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()//optional 
        })//validated
        await newTodo.save();
        return response.status(200).json(newTodo)//if you want to use the data that you sent for further operations.
    }catch (error) {
        return response.status(500).json(error.message)
 }
}
//////////////////////////////////////////////////////////////

export const getAllTodos = async (request, response) => {
    try {
         const todos=   await Todo.find({}).sort({'createdAt':-1})//descending
         return response.status(200).json(todos)
    } catch (error) {
        return response.status(500).json(error.message)
 }
}
///////////////////////////////////////////////////////////////////////////////

export const toggleTodoDone = async (request, response) => {
    try {
         const todoRef=   await Todo.findById(request.params.id)//get that doc to manipulate done field
         const todo=   await Todo.findOneAndUpdate({_id: request.params.id},{done:!todoRef.done} )
         await todo.save()
         return response.status(200).json(todo)
       } catch (error) {
         return response.status(500).json(error.message)
    }
}

/////////////////////////////////////////////////
export const updateTodo = async (request, response) => {
    try {
         await Todo.findOneAndUpdate({_id: request.params.id},{data:request.body.data});
         const todo=  await Todo.findById(request.params.id)//pick the updated object
         return response.status(200).json(todo)
    } catch (error) {
        return response.status(500).json(error.message)
  }
}
///////////////////////////////////////////////////////////////////

export const deleteTodo = async (request, response) => {
    try {
       
        const todo=  await Todo.findByIdAndDelete(request.params.id);
     
         return response.status(200).json(todo)
    } catch (error) {
        return response.status(500).json(error.message)

    }

}