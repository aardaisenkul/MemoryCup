import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import memoryRoutes from "./routes/memoryRoutes";

dotenv.config();

const app = express();


app.use(cors({
  origin: "*", // replace with your frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));

app.use(express.json());

app.use("/memories", memoryRoutes);
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
  });


app.listen(5001, () => {
  console.log("Server running on port 5001");
});
