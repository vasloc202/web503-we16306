import express from "express";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import authRouter from "./routes/auth";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
// Router express
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
// Connect Database
mongoose.connect("mongodb://localhost:27017/nodejs")
    .then(() => console.log("Connect database thanh cong"));
// Connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server đang chạy ở cổng "+PORT);
})



