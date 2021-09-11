  
  import express, {Application, Request, Response} from 'express';
  import cors from 'cors'
  // import postRouter from './routes/post';

  const app: Application = express();
  app.use(express.json())

  const corsOptions = {
    origin: 'http://localhost:8080', // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

  app.use(cors(corsOptions))
  // get
  app.get('/', (req: Request, res: Response) => {
    res.send('hello express');
  });

  app.get('/posts', (req: Request, res: Response) => {
    res.json([
      { id: 1, content: 'hello' },
      { id: 2, content: 'hello2' },
      { id: 3, content: 'hello3' },
    ]);
  });

  // app.use('/post', postRouter);

  app.listen(3000, '0,0,0,0,', () => {
    console.log('실행중');
  });