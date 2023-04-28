import { config } from 'dotenv';

config();

const mode = process.env.NODE_ENV;
const LOCAL_DATABASE_URL = process.env.LOCAL_DATABASE_URL;
const ONLINE_DATABASE_URL = process.env.ONLINE_DATABASE_URL;

export default {
  DATABASE_URL:
    mode === 'development' ? ONLINE_DATABASE_URL : ONLINE_DATABASE_URL,
  PUBLIC_ANON_KEY: process.env.PUBLIC_ANON_KEY,
  PORT: process.env.PORT,
  SALT_ROUNDS: process.env.PUBLIC_ANON_KEY,
  SESSION_SECRET: process.env.SESSION_SECRET,
  SERVER_URL:
    mode === 'development'
      ? process.env.DEVELOPMENT_URL
      : process.env.PRODUCTION_URL,
  CLIENT_URL:
    mode === 'development'
      ? process.env.DEVELOPMENT_CLIENT_URL
      : process.env.PRODUCTION_CLIENT_URL,
  STRIPE_TEST_KEY: process.env.STRIPE_TEST_KEY,
};
