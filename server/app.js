import express from "express";
import cors from 'cors';
import session from "express-session";
import router from "./methods/router.js";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import connectMongo from 'connect-mongodb-session';

const MongoDBSession = connectMongo(session);

dotenv.config();

const app = express();

app.use('*', cors());

const MongoDBStore = new MongoDBSession({
  uri: process.env.MEDIRECORDS_URI,
  collection: "sessions"
})

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: true,
  saveUninitialized: false,
  httpOnly: false,
  maxAge: 7200000, // 2 hrs validity
  store: MongoDBStore,
  cookie: {
    secure: false,
    sameSite: 'none'
  }
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());

app.use("/", router);

app.use("*", (req, res) => 
  res.status(404).json({error: "not found"})
);

export default app;