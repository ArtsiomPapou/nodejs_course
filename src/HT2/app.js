import express from 'express';
import {Client} from 'pg';
import {db_conf} from './configs/db';
import userRoute from './routes/user';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 3000;
const client = new Client(db_conf)
app.listen(PORT);

client.connect((error ) => {
  if(error) console.log(error);
  console.log('db connected');
});

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/user', userRoute);
