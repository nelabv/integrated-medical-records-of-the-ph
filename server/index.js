import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";
import AWS from 'aws-sdk';

dotenv.config();
const port = process.env.PORT || 3000;

try {
  mongoose.connect(
    process.env.MEDIRECORDS_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to the database.")
  )
} catch (err) {
  console.log(`Error: ${err}`)
}

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log('Connected to S3 Bucket')
  }
});

app.use(express.static(path.join(__dirname, "/client/build")));

/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
}); */

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});