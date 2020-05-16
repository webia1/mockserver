import { Projekt } from './types';
import * as faker from 'faker/locale/de';
import { times } from 'lodash';
export class MockGenerator {
  generateProjects(): any {
    const now = new Date();
    const projects = times(3, (n: number) => {
      const past = faker.date.past();
      return {
        id: n,
        name: faker.lorem.word(),
        beschreibung: faker.lorem.words(3),
        createTime: past,
        changeTime: faker.date.between(past, now.toISOString()),
      };
    });

    return projects;
  }
}
