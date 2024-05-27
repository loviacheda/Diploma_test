import express from "express"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import roomRoutes from "./routes/rooms.js"
import cookieParser from "cookie-parser";

const app=express()


app.use(express.json());
app.use(cookieParser());
app.use("/backend/auth", authRoutes)
app.use("/backend/users", userRoutes)
app.use("/backend/rooms", roomRoutes)


app.get("/", (req, res)=>
    res.json("hello from the backend")
) 


app.listen(8800, ()=>{
    console.log("Connected")
})