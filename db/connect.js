const mongoose = require('mongoose');
const connection ='mongodb+srv://shuvo:1234@nodeexpressproject.jexqk.mongodb.net/task-manager?retryWrites=true&w=majority;'
mongoose
    .connect(connection,
        {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true,}
    )
    .then(()=>console.log('CONNECTED TO THE DB...'))
    .catch((err)=>console.log(err));