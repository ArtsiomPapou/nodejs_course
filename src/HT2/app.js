import express from 'express';
import {client} from 'pg';
import {DB_VARS} from './configs/db';
import userRoute from './routes/user';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT);

client.connect(DB_VARS.DATABASE_URL, (error, client, done) => {
  console.log(client)
});

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/user', userRoute);
