require("dotenv").config()
const app = require("./src/app");
const db = require("./src/config/database");

db()

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
})