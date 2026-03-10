const express = require("express")
const cors = require('cors')
const cookieParser = require("cookie-parser")
const authRouter = require("./routes/auth.route")

const allowedOrigins = (process.env.FRONTEND_URI || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true)
        }

        return callback(new Error("Not allowed by CORS"))
    }
}))

app.get("/health", (req, res) => {
  res.status(200).send("Server is alive");
});


app.use("/api/auth", authRouter)

module.exports = app