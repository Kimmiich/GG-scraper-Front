export interface GetGameResults {
  info: IInfo;
  results: IGame[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface IGame {
  id: number;
  gameTitle: string;
  gameImage: string;
  gameSlug: string;
  gameReleased: string;
  gamePublisher: string;
  guide: ISectionData[];
}

export interface ISectionData {
  id: number;
  sectionTitle: String;
  sectionImage: String | null;
  sdIndex: number;
  sectionChapter: ISectionChapter[];
  game: IGame;
  gameId: number;
}

export interface ISectionChapter {
  id: number;
  chapterHeader: String;
  scIndex: number;
  chapterPaths: IChapterPath[];
  sectionData: ISectionData;
  sectionDataId: number;
}

export interface IChapterContent {
  id: number;
  content: String | null;
  image: String | null;
  head: String | null;
  li: String | null;
  aside: String | null;
  chapterPath: IChapterPath;
  chapterPathId: number;
}

export interface IChapterPath {
  id: number;
  cpIndex: number;
  sectionTitle_bc: String;
  chapterHeader_bc: String;
  chapterTitle_bc: String;
  slugifiedUrl: String;
  chapterContent: IChapterContent[];
  sectionChapter: ISectionChapter;
  sectionChapterId: number;
}
