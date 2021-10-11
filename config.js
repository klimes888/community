import mysql from 'mysql';

export const db = mysql.createConnection({
    host:'localhost',
    user:'taehee',
    password:'1234',
    port:3360,
    database:'community'
});

db.connect();
