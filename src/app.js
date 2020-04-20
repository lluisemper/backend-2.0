import express, { json } from 'express';
import morgan from 'morgan';

import usersRoutes from './routes/users';
import postsRoutes from './routes/posts';

const app = express();

app.use(morgan('dev'));
app.use(json());

app.use('/api/users', usersRoutes);
app.use('/api/posts',postsRoutes);


export default app;