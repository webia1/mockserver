import { ProjectConstraints } from './constraints';
import { ProjectType } from './types';
import * as faker from 'faker/locale/de';
import { times } from 'lodash';
export class MockGenerator {
  generateProjects(): Array<ProjectType> {
    const now = new Date();
    const length = ProjectConstraints.length;
    const projects: Array<ProjectType> = times(length, (n: number) => {
      const past = faker.date.past();
      return {
        id: ProjectConstraints[n].id,
        name: ProjectConstraints[n].name,
        beschreibung: faker.lorem.words(3),
        createTime: past,
        changeTime: faker.date.between(past, now.toISOString()),
        version: 2,
      };
    });

    return projects;
  }
}
