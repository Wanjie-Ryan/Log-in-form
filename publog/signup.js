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

// app.use('/login' ,express.static('./publog'))


app.post('/login', (req, res)=>{

    res.status(200).sendFile(path.join(__dirname, './publog/login.html'))
})


// app.post('/login', (req,res)=>{

//     // console.log(req.body)

//     const {name} = req.body
//     console.log(name)

//     if([...name]){
//       return  res.status(200).send(`

//          <h2>Hello and Welcome ${name}</h2>

//         `)
//     }


//     return res.status(401).send(`

//      <h2> An unidentified Persona </h2>
    
//     `)


// })




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