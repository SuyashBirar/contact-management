import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use(express.static("public"))

app.use(cookieParser())




import userRouter from "./src/routes/user.routes.js";
import contactRouter from "./src/routes/contact.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/contacts", contactRouter);

import { ApiError } from "./src/utils/ApiError.js"

app.use((err, req, res, next) => {
    console.error(err); // or err.stack

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
});


export { app }