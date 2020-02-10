import express from 'express';
import router from './routes/users';
import dotenv from 'dotenv';
import passport from 'passport';
import passportConfiguration from './controllers/passport';

dotenv.config();
const port = process.env.PORT

const app = express();
app.use(express.json());

app.use('/api/v1', router);

app.use(passport.initialize());
app.use(passport.session());
passportConfiguration(passport)

app.listen(port, () => console.log(`server running on port ${port}`))