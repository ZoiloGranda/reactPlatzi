import express from 'express';
import http from 'http';
import engine from 'socket.io';

const port = 3000;
const app = express()

app.use('/', express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/index.html');
})

let server = http.createServer(app).listen(port, ()=>{
  console.log(`Server en puerto ${port}`);
})