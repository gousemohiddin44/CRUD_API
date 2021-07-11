import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000; //for backend use. can use other than 3000

app.use(express.json()); //saying our data is json.
app.use("/users", usersRoutes); //using middleware to call /users


app.get("/", (req, res) => {
    console.log("testing .....");
    res.send("<h1>Hiii</hi>");
});

app.listen(PORT, () => console.log("Server running on port : http://localhost:" + PORT));