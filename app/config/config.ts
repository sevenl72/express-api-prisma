import dotenv from 'dotenv';

dotenv.config();

interface Config {
    env: string;
    port: number;
}

const config: Config = {
    env: process.env.APP_ENV || 'development',
    port: Number(process.env.APP_PORT) || 3000
};

export default config;