const express = require('express');
const router = require('./routes/articlesRoute');
const cors = require('cors')

const app = express();
app.use('/', router);

// let corsOptions =  {
//     origin: 'http://localhost:3000'
// }

app.use( 
    (req, res, next)=> {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
    });
    app.use(
        cors(),
        express.json(),
        express.urlencoded({extended: true})
    )

const PORT = 4000

app.listen(PORT, ()=>{
    console.log('Server is running on http://localhost:' + PORT);
})