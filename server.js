import express from 'express'; 
import dotenv from 'dotenv';

import expressGraphQL from 'express-graphql';
import schema from './schema/schema';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';

dotenv.config();
const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening');
});