require('./config/db');

const app = require('express')();
// process.env.PORT || 
const port = 3000;

const UserRouter = require('./api/User');

const bodyParser = require('express').json;
app.use(bodyParser());
`

`
app.use('/user', UserRouter)

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})