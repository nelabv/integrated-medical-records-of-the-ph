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

const corsOptions = {
  // origin: process.env.API_URL,
  origin: 'http://localhost:3001',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use('*', cors(corsOptions));
app.use(cookieParser());

const MongoDBStore = new MongoDBSession({
  uri: process.env.MEDIRECORDS_URI,
  collection: "sessions"
})

app.set("trust proxy", 1);

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
  name: "irmp_session",
  secret: process.env.AWS_SESSION_KEY,
  resave: true,
  saveUninitialized: false,
  httpOnly: true,
  maxAge: 7200000, // 2 hrs validity
  store: MongoDBStore,
  cookie: {
/*     path: "/",
    secure: true,
    sameSite: 'none',
    domain: '.niellebv.app' */
    maxAge: oneDay
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