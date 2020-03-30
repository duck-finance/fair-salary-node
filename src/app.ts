import express from 'express';
import { router as userRouter } from './api/user/user';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('x-powered-by', false);

app.use('/user', userRouter);
