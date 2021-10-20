  
  import express, {Application, Request, Response} from 'express';

  import cors from 'cors'
  import signupRouter from './signup/routes/signup_router';

  const app: Application = express();
  app.use(express.json())
  app.use(express.urlencoded( {extended : false } )); 

  const corsOptions = {
    origin: 'http://localhost:8080', // proxy
    credentials: true,
};

  app.use(cors(corsOptions))
  // get
  app.get('/api/', (req: Request, res: Response) => {
    res.send('api 정상 작동');
  });

  app.get('/api/posts', (req: Request, res: Response) => {
    res.json([
      { id: 1, content: 'hello' },
      { id: 2, content: 'hello2' },
      { id: 3, content: 'hello3' },
    ]);
  });

  app.use('/api/signup', signupRouter);

  // app.use('/post', postRouter);

  app.listen(3000, () => {
    console.log('실행중');
  });
