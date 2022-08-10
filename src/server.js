import express from 'express';
import bodyParser from 'body-parser';

import {routes} from './controllers';

const server = express();
server.use(bodyParser.json());

routes.forEach(route => {
    server[route.method](route.path, route.handler);
});

server.listen(8080, () => {
    console.log('Server ready on port 8080');
});