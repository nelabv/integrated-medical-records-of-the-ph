import express from "express";
import session from "express-session";
import router from "./methods/router.js";
import dotenv from "dotenv";
import connectMongo from 'connect-mongodb-session';

const MongoDBSession = connectMongo(session);

dotenv.config();

const app = express();

const MongoDBStore = new MongoDBSession({
  uri: process.env.MEDIRECORDS_URI,
  collection: "sessions"
})

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  store: MongoDBStore
}))

app.use(express.json());

app.use("/", router);

app.use("*", (req, res) => 
  res.status(404).json({error: "not found"})
);

export default app;