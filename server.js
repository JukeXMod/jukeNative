
import mongoose from 'mongoose';
import express from "express";
import bodyParser from "body-parser";
// import spotify from "./routes/spotifyRoutes";
import Oauth from "./routes/Oauth";
import path from "path";
import Mongo from './routes/mongoRoutes';
var app = express();

const PORT = process.env.PORT || 4000;


app.use(express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Add music api here
// app.use("/spotify",spotify);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
app.use('/auth',Oauth);
app.use('/db', Mongo);
});

mongoose.connect('mongodb://localhost/queue');


//This launches the server on port 4000

const server = app.listen(4000, () => {
  const { address, port } = server.address();
  console.log(`Server is listening at http://${address}:${port}`);
});
