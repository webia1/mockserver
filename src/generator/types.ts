export type ProjectType = {
  id: number;
  name: string;
  beschreibung: string;
  createTime: Date;
  changeTime: Date;
  version: number;
};

type CategoryType = {
  id: number;
  name: string;
  nameKurzform: string;
  beschreibung: string;
  changeTime: Date;
  createTime: Date;
  modellId: number;
  projektId: number;
  sprache: string;
  aktiv: number;
  version: 2;
};

export interface MainCategoryType extends CategoryType {
  hauptkategorieId: null;
}

export interface SubCategoryType extends CategoryType {
  hauptkategorieId: number;
}

export type CampaignType = {
  id: number;
  name: string;
  kategorieId: number;
  suchbegriff: [
    {
      anzahlAusgewaehlterTexte: number;
      begriffeImTextEnthalten: Array<string>;
      begriffeImTextNichtEnthalten: Array<string>;
      changeTime: Date;
      createTime: Date;
      id: number;
      maxZeichenlaenge: number;
      mindestensEinBegriffImTextEnthalten: Array<string>;
      version: number;
    },
  ];
  changeTime: Date;
  createTime: Date;
  version: number;
};
