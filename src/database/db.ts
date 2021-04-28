import {
  ProjectType,
  SubCategoryType,
  MainCategoryType,
  CampaignType,
  HumanType
} from '../generator/types';

interface Db {
  projekt: Array<ProjectType>;
  kategorie: Array<SubCategoryType | MainCategoryType>;
  human: Array<HumanType>

  kampagne: Array<CampaignType>;
}
export const db: Db = {
  projekt: [],
  kategorie: [],
  kampagne: [],
  human: []
};
