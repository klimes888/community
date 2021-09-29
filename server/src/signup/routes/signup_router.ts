import express, {Application, Request, Response} from 'express';
let mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'taehee',
    password:'1234',
    port:3306,
    database:'cm'
});

db.connect()      

const router = express.Router();

router.post('/', function(req, res, next) {
    const {email, password, repassword, name} = req.body;
    const param = [email, password, name]
    if(email && password){
        if(password !== repassword) return;
        db.query(`INSERT INTO users('email', 'password', 'name') VALUES(?, ?, ?), ${param}`, (err:Error, row:any) => {
            if(err){ console.log(err); return;};
            console.log(row);
            res.send('api 정상 작동');
        })
    }
    // res.send('api 정상 작동');
    res.end();
    // res.json({ title: req });
});

    export default router;