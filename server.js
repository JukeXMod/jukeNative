
import mongoose from 'mongoose';
import express from "express";
import bodyParser from "body-parser";
import Oauth from "./routes/Oauth";
import path from "path";
import Mongo from './routes/mongoRoutes';
let app = express();
import httpImport from "http";
import socket from "socket.io";
let http = httpImport.Server(app);
let io = socket(http);


const PORT = process.env.PORT || 4000;


app.use(express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  app.use('/auth',Oauth);
  app.use('/db', Mongo);
});

mongoose.connect('mongodb://localhost/queue');


//This launches the server on port 4000

http.listen(4000, () => {
  const { address, port } = http.address();
  console.log(`Server is listening at http://${address}:${port}`);
});
