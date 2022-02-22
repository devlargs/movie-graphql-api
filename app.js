const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/index");

const app = express();
const PORT = 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
