  import * as express from 'express';
  // import postRouter from './routes/post';

  const app: express.Application = express();

  // get
  app.get('/', (req: express.Request, res: express.Response) => {
    res.send('hello express');
  });

  app.get('/posts', (req: express.Request, res: express.Response) => {
    res.json([
      { id: 1, content: 'hello' },
      { id: 2, content: 'hello2' },
      { id: 3, content: 'hello3' },
    ]);
  });

  // app.use('/post', postRouter);

  app.listen(3000, () => {
    console.log('실행중');
  });