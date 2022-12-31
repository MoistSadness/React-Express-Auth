import { v4 as uuidv4 } from 'uuid';
import session from 'express-session'

const sessionConfig = session({
    genid: function (req) {
        return uuidv4() // use UUIDs for session IDs
    },
    key: 'sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        path: '/',
        sameSite: 'none',
        httpOnly: true,
        secure: false,
        maxAge: 1000000000, // ten seconds, for testing
    },
})

export default sessionConfig