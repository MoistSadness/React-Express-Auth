import sqlite3 from "sqlite3";

/** Opens a connection to the database
 * If it detects that there is no database, it will automatically create 
 * one and populate it with the desired tables
 */
export const checkDB = () => {
    const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err && err.code == "SQLITE_CANTOPEN") {
            createDatabase();
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
        } else {
            console.log('Confirmed Database is present')
        }
        return db;
    });
}

/** Create a new database if there is no db present */
function createDatabase() {
    console.log('Database not found, creating new db')
    
    try {
        const newdb = new sqlite3.Database('./users.db')
        newdb.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                salt TEXT NOT NULL,
                refreshToken TEXT
            );`
        );
    } catch (error) {
        console.log('idk')
    }
    

    /*
    const newdb = new sqlite3.Database('./users.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables(newdb);
    });
    */
}

/** Add desired tables to database */
function createTables(newdb) {
    const query = `
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        salt TEXT NOT NULL,
    );`
    newdb.run(query, (err) => {
        console.log('\tCreated tables for users')
    })
    /*
    newdb.exec(`
        create table user (
            user_id int primary key not null,
            username text not null,
            password text not null,
        );`, 
        ()  => {runQueries(newdb);}
    )
    */
}