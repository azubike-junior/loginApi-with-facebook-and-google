import express from 'express';
import router from './routes/users';
import dotenv from 'dotenv';
import passport from 'passport';
import {
    passportFacebookConfiguration,
    passportGoogleConfiguration
} from './controllers/passport';

dotenv.config();
const port = process.env.PORT || 3000
const app = express();

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

passportGoogleConfiguration(passport)
passportFacebookConfiguration(passport)

app.use('/api/v1', router);

app.listen(port, () => console.log(`server running on port ${port}`))