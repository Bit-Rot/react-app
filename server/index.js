const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

var rootValue = {
    hello: () => {
        return 'Hello World!';
    },
};

graphql({
    schema, 
    source: '{ hello }',
    rootValue
}).then((response => {
    console.log(response);
}))

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

app.get("/api", (request, response) => {
    response.json({ message: "Hello from server!" });
});

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}));