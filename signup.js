const express = require('express');
const app = express();
const port = 5000





app.all('*', (req, res)=>{
    
})

app.listen({port}, ()=>{
    console.log(`The server is running on port,${port}`)
})