import 'dotenv/config';
import App from './app';
import IndexRoute from './routes/index.route';
import GetwayRoute from './routes/getway.route';
import SwaggerRoute from './routes/swagger.route';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([
  new SwaggerRoute(),
  new IndexRoute(),
  new GetwayRoute(),
]);

app.listen();
