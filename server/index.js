import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { checkDB } from "./utils/userDB.js";
import sessionConfig from "./config/sessionConfig.js";
import corsOptions from "./config/corsOptions.js";

import access from './routers/access.js'
import servants from './routers/servants.js'
import craftEssences from './routers/craftEssences.js'
import mysticCodes from './routers/mysticCodes.js'
import items from './routers/items.js'

const app = express()
app.use(cors(corsOptions))

// Open users.db to check if it exists or not 
checkDB()

// Setting up session
app.use(sessionConfig);

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())

// parse various different custom JSON types as JSON
app.use(bodyParser.json())

app.use('/api/v1/servants', servants)
app.use('/api/v1/craftEssences', craftEssences)
app.use('/api/v1/mysticCodes', mysticCodes)
app.use('/api/v1/items', items)
app.use('/api/v1/', access)

/**
 * General purpose error handler
 */
app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;
    if (!err.message) err.message = "Oh, no!";
    res.status(statusCode).send(message);
    //res.status(404).send("NOT FOUND!!!");
})


const PORT = 5000
app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
})