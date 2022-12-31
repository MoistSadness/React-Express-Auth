/**
 * https://www.linode.com/docs/guides/getting-started-with-nodejs-sqlite/
 * 
 * Using passport with SQLite
 * https://stackoverflow.com/questions/23481817/node-js-passport-autentification-with-sqlite
 * https://github.com/passport/todos-express-password
 */

import sqlite3 from "sqlite3"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

/** Registers a new user in the application
 * 
 */
export const register = async (req, res) => {
    const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) { return console.log('Failed to connect to DB') }
    })

    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.body.password, salt);
    // console.log(req.body.password)
    // console.log(salt)
    // console.log(hash)

    const query = `INSERT INTO users(username, password, salt) VALUES(?, ?, ?);`

    const insert = db.run(query, [req.body.username, hash, salt], (err) => {
        if (err && err.code == 'SQLITE_CONSTRAINT') {
            return res.status(409).json('The selected username already exists')
        }
        console.log(`Added new user ${req.body.username}`)
        res.status(200).send('Success!')
    })
}

/** Logs user in
 * 
 */
export const login = async (req, res) => {
    //console.log(req.body)
    const { username, password } = req.body

    if (!username || !password) { return res.status(400).json({ 'message': 'Username and password are required' }) }

    const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) { return console.log('Failed to connect to DB') }
    })

    /** Search Database for user
     * Since DB is set to have unique users, there will only ever be one result.
     */
    const query = `SELECT id, username, password, salt FROM users WHERE username=?;`
    const user = db.get(query, [username], (err, row) => {
        if (err) { return res.status(400).json({ 'message': 'Login failed' }) }

        // If username is not found in the database, send error message to client
        if (!row) {
            return res.status(401).json({ 'message': 'Incorrect username or password' })
            // If found, evaluate the password
        } else {
            console.log('yayy!')
            // bcrypt.comapre returns a promise, which is handled with .then statements
            bcrypt.compare(password, row.password)
                .then(match => {
                    //console.log(match)
                    if (match) {
                        // Create JWT here
                        const accessToken = jwt.sign(
                            { 'username': row.username },
                            process.env.ACCESS_TOKEN_SECRET,
                            { 'expiresIn': '10m' }
                        )

                        const refreshToken = jwt.sign(
                            { 'username': row.username },
                            process.env.REFRESH_TOKEN_SECRET,
                            { 'expiresIn': '10m' }
                        )

                        // Add refresh token to database
                        const updateQuery = `UPDATE users SET refreshToken=? WHERE username=?`
                        const updateParams = [refreshToken, row.username]
                        db.run(updateQuery, updateParams, (err) => {
                            if (err) console.log('err.message')
                            //console.log('Added refresh token to db')
                        })

                        // Store refresh token inside an httponly cookie for increased security
                        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
                        // Send response containing a status code, message, and access token
                        res.status(200).json({
                            'message': 'Success!',
                            'username': row.username,
                            'accessToken': accessToken,
                        })
                    } else {
                        res.status(401).json({ 'message': 'Incorrect username or password' })
                    }

                })
                .catch(err => {
                    console.log(err)
                })
        }
    });
    //console.log(user)
}

/** Updates the client's access token by hashing it against their refresh token
 * Refresh token is sent to server
 * Username is decrypted from the refresh token using the REFRESH_TOKEN_SECRET environment variable
 * New access token is generated using ACCESS_TOKEN_SECRET and sent to client
 */
export const updateAccessToken = async (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) { return res.sendStatus(401) }
    console.log(cookies)
    const refreshToken = cookies.jwt

    const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) { return console.log('Failed to connect to DB') }
    })

    /** Search Database for user based on their refresh token value */
    const query = `SELECT id, username, password, salt, refreshToken FROM users WHERE refreshToken=?;`
    const user = db.get(query, [refreshToken], (err, row) => {
        if (err) { return res.status(400).json({ 'message': 'There was an error' }) }

        // If refresh token is not found in the database, send error message to client
        if (!row) {
            return res.status(401).json({ 'message': 'User does not exist' })
            // If a matching user is found, generate a new access token, and send it to the user
        } else {
            console.log('yayy!')

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if (err || row.username !== decoded.username) return res.sendStatus(403)
                const accessToken = jwt.sign(
                    { 'username': row.username },
                    process.env.ACCESS_TOKEN_SECRET,
                    { 'expiresIn': '10m' }
                )
                res.json({ accessToken })
            })
        }
    });
}

/** Logs user out
 * Clear cookies
 * Delete the refresh token for the specific user in the DB
 * Client must delete the access token on their side
 */
export const logout = async (req, res) => {
    // -- Delete access token on client -- 

    const cookies = req.cookies
    if (!cookies?.jwt) { return res.sendStatus(204) }   // Return success code since we don't have any refresh token sent in the cookie
    console.log(cookies)
    const refreshToken = cookies.jwt

    const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) { return console.log('Failed to connect to DB') }
    })

    /** Search Database for user based on their refresh token value */
    const query = `SELECT id, username, password, salt, refreshToken FROM users WHERE refreshToken=?;`
    const user = db.get(query, [refreshToken], (err, row) => {
        if (err) { return res.status(400).json({ 'message': 'There was an error' }) }

        // If refresh token is not found in the database, send error message to client
        // If the code got this far, it shouldnt need to since the cookie would be empty, but whatever
        if (!row) {
            return res.status(401).json({ 'message': 'User does not exist' })
        // If a refresh token  is found, clear the cookie and send status back to the client
        } else {
            console.log('Clearing cookie!')

            res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            res.sendStatus(204)

        }
    });
}