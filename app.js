const dotenv = require("dotenv");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schemas/index");
const { version } = require("./package.json");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_URL);

console.log("Connecting to database");
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use("/", (req, res) => {
  res.send({
    title: "Movies Graphql API",
    createdBy: "Ralph Largo",
    purpose: "Testing",
    version,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
