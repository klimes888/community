import express, {Application, Request, Response} from 'express';
// import mysql from 'mysql';
const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'taehee',
    password:'1234',
    port:3360,
    database:'community'
});

db.connect();

const router = express.Router();

router.post('/', function(req, res, next) {
    const {email, password, repassword} = req.body;
    const param = [email, password]
    if(email && password){
        if(password !== repassword) return;
        db.query(`INSERT INTO users('email', 'password') VALUES(?, ?), ${param}`, (err:Error, row:any) => {
            if(err) console.log(err)
        })
    }
    // res.send('api 정상 작동');
    res.end();
    // res.json({ title: req });
});

    export default router;