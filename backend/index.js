import express from "express";
import cors from "cors";
import sdk from "./upholdSdk.js";

const app = express();
const port = 4001;

app.use(cors());

app.get("/api/ticker/:pair", (req, res) => {
    // Basic GET request to check if app is running
    console.log(req);
    sdk
        .getTicker(req.params.pair)
        .then((r) => res.send(r))
        .catch((e) => console.log(e));
});

app.listen(port, () => {
    // Setting up app
    console.log(`Server running on http://localhost:${port}`);
});
