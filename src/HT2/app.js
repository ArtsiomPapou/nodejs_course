import express from 'express';
import userRoute from './routes/user';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT);

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/user', userRoute);
