import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

const router1 = express.Router();
const router2 = express.Router();

router1.get("/user", (request, response, next) => {
    response.status(200).send("User Router Working");
});
router2.get("/admin", (request, response, next) => {
    response.status(200).send("Admin Router Working");
});

app.use(router1);
app.use(router2);

app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
}).on("error", (error) => {
    throw new Error(error.message);
});

export default app;
