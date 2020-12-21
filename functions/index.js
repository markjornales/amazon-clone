const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I0S3sI85bGLNQ2BQGwHWAgNY0CkPZF1ZPVuepNAeGCsjPQbgMqW5wl93oY6w5ZbLKihiXqbNpnsp7PKvNqM9O2v00NLXBeaO6"
);
const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request received!!! for this amount", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-87707/us-central1/api
//firebase emulator:start
