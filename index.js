const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const coffeeData = require("./data/coffee.js")
const machinesData = require("./data/machines.js")
const path = require("path")

app.use(cors())
app.use(express.static("/public"));

app.get("/", (req, res) => {
    // This correctly points to '.../your-app-directory/public/index.html'
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/docs", (req, res) => {
    // This correctly points to '.../your-app-directory/public/docs.html'
    res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

app.get("/api/coffee", (req, res) => {
    res.json(coffeeData)
});

app.get("/api/machines", (req, res) => {
    res.json(machinesData)
});

app.get("/api/machines/:type", (req, res) => {
    const { type } = req.params;
    res.json(machinesData[type])
})

app.get("/api/coffee/:id", (req, res) => {
    const { id } = req.params;
    res.json(coffeeData[id])
})

app.get("/api/machines/:type/:id", (req, res) => {
    const { type, id } = req.params;
    res.json(machinesData[type][id])
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
