export interface LookupEntryMeaning {
  title: string;
  definitions: string[];
}

export interface LookupEntry {
  word: string;
  details: string;
  topDefinition?: string;
  meanings?: LookupEntryMeaning[];
}
