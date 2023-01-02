const express = require('express');
const app = express();
const port = 5000
const path = require('path')


// app.use( error, express.static('./error page/error.html'))



app.use(express.static('./public'))
// app.use(express.)

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './public/signup.html'))

})


app.post('/login', (req,res)=>{

    console.log('req.body')

    res.status(200).send('Hey')


})




app.all('*', (req, res)=>{
    res.status(404).send(`

    <div class="error" style = 'text-align: center;'>

        <h3> Error!! Page Not Found!!</h3>
        <h2>404</h2>
    </div>
    
    `)
    
})

app.listen({port}, ()=>{
    console.log(`The server is running on port,${port}`)
})