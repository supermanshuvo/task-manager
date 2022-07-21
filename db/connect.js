const mongoose = require('mongoose');
const connection ='mongodb+srv://shuvo:1234@nodeexpressproject.jexqk.mongodb.net/task-manager?retryWrites=true&w=majority;';

const connectDB = () =>{
    return mongoose.connect(connection,
            {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true,}
        )
};
module.exports = connectDB;