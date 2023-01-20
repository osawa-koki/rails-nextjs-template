
const Env = require('./next.config.js');

const isProd = process.env.NODE_ENV === 'production';

const setting = {
  isProd,
  basePath: isProd ? Env.basePath : '',
  title: '🐸 Rails × Next.js 🐸',
};

export default setting;
