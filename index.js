import express from "express";
import cors from 'cors';
import moviesRouter from "./src/routes/movies.router.js";
import authRouter from "./src/routes/auth.router.js"


const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "API funcionando correctamente" });
});

app.use("/api/movies", moviesRouter);
app.use("/api/auth", authRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});