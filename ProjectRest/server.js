const express = require('express');
const app = express();
const path = require('path');
const port = process.eve.PORT||9800;
const http = require('http');

app.use(express.static(path.join(__dirname,'build')));
app.get('/',(req,res)=>{ 
res.sendFile(path.join(__dirname,'build/index.html'))

});

app.listen(port,(err)=>{
  if(err) throw err;
})
