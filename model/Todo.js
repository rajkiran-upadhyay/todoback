import mongoose from 'mongoose';
//validate the data comming from frontend
const TodoSchema = new mongoose.Schema({
    data: {

        type: String,
        required: true
    },
    done: {

        type: Boolean,
        default: false

    },
    createdAt: {

        type: Date,
        default: Date.now

    }

});

const todo = mongoose.model('todo', TodoSchema);//model is created with the help of schema and collection 
export default todo;





