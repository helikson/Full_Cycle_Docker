const express = require("express");
const connection = require("./dbConnection");

const app = express();
const port = 3000;

const insertQuery = "INSERT INTO people(name) values('Helikson')";
const searchQuery = "SELECT * FROM people";

let htmlResult = "<h1>Full cycle</h1>";

connection.query(insertQuery, () => {
    connection.query(searchQuery, (_, result) => (
        result?.forEach(({ id, name }) => (
            htmlResult += `<p id="${id}">- ${name}</p>`
        ))
    ))
});

app.get('/', (_, res) => (
    res.send(htmlResult)
));

app.listen(port, () => (
    console.log("Rodando na porta " + port)
));
