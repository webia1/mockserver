import {
  ProjectType,
  SubCategoryType,
  MainCategoryType,
  CampaignType,
} from '../generator/types';

interface Db {
  projekt: Array<ProjectType>;
  kategorie: Array<SubCategoryType | MainCategoryType>;

  kampagne: Array<CampaignType>;
}
export const db: Db = {
  projekt: [],
  kategorie: [],
  kampagne: [],
};
