export interface EntryMeaning {
  title: string;
  definitions: string[];
}

export interface WordLookupEntry {
  word: string;
  details: string;
  meaning?: string;
  meanings?: EntryMeaning[];
}
