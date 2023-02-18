import { LanguageLevel } from "./languageLevel";

export type StorageEntry = {
  WORDS_CHEST: Record<string, number>;
  LANGUAGE_LEVEL_STORAGE_KEY: LanguageLevel;
};
