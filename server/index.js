import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();
const port = process.env.PORT || 8080;

try {
  mongoose.connect(
    process.env.MEDIRECORDS_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to the database.")
  )
} catch (err) {
  console.log(`Error: ${err}`)
}

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});