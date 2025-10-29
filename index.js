const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors())
app.use("/public/images", express.static("public/images"));

// Example route
app.get("/", (req, res) => {
    res.render("/public/pages/index.html")
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
