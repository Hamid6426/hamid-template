import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  PORT: process.env.PORT,
  DEV_FRONTEND_URL: process.env.DEV_FRONTEND_URL,
};

export default envConfig;