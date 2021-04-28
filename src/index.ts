import { ProjectType } from './generator/types';
import { MockGenerator } from './generator/mock-generator.class';
import { db } from './database/db';
import * as jsonServer from 'json-server';

const generator = new MockGenerator();
db.projekt = generator.generateProjects();
db.human = generator.generateHumans();

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
