import express, {Application, Request, Response} from 'express';
const router = express.Router();

router.post('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({ title: req });
});

    export default router;