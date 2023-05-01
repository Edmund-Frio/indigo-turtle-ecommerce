import express from 'express';
import session, { SessionOptions } from 'express-session';
import registrationRoute from './routes/registrationRoute';
import productsRoute from './routes/productsRouter';
import loginRoute from './routes/loginRoute';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { strategy } from './middlewares/passport';
import envConfig from './config/envConfig';
import cors from 'cors';

const { CLIENT_PORT } = envConfig;


const sessionOptions: SessionOptions = {
  secret: 'BlogSecret',
  resave: false,
  saveUninitialized: false,
};

const app = express();

app.use(cors({ origin: `http://localhost:${CLIENT_PORT}`, credentials: true }));

app.use(express.json());
app.use(session(sessionOptions));
app.use(cookieParser());

// passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

//routes
app.use('/api/register', registrationRoute);
app.use('/api/products/', productsRoute);
app.use('/api/login', loginRoute);

export default app;
