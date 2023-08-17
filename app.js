import express from 'express'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
//import TuitsController from "./controllers/tuits/tuits-controller.js";
import TuitsController from "./tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import cors from 'cors'
import session from "express-session";
import mongoose from "mongoose";
const CONNECTION_STRING = 'mongodb+srv://mbrunkhorst219:mGCsboguLFqP4dQZ@cluster0.xwuxckj.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/tuiter'

//mongoose.connect(CONNECTION_STRING);
 mongoose.connect("mongodb://127.0.0.1:27017/tuiter");
const app = express()
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
  }
 ))
 const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  app.use(
    session(sessionOptions)
  );
  
app.use(express.json());
const port = process.env.PORT || 4000;
TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app); 
app.listen(4000);
