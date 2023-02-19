import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useStorage } from "../hooks/useStorage";
import { LanguageLevel } from "../types";

export const DEFAULT_LANGUAGE_LEVEL: LanguageLevel = "A1";

export interface LanguageLevelContextType {
  languageLevel: LanguageLevel;
  setLanguageLevel: (level: LanguageLevel) => void;
  isLoading: boolean;
}

const defaultValue: LanguageLevelContextType = {
  setLanguageLevel: () => {},
  languageLevel: undefined,
  isLoading: false,
};

export const LanguageLevelContext = createContext(defaultValue);

export function LanguageLevelProvider({ children }: PropsWithChildren) {
  const { retrieve, saveIfChanged } = useStorage("LANGUAGE_LEVEL_STORAGE_KEY");
  const [languageLevel, setLanguageLevel] = useState<LanguageLevel>();
  const [isLoading, setIsLoading] = useState(false);

  const retrieveLanguageLevel = async () => {
    setIsLoading(true);

    const languageLevel = await retrieve();
    setLanguageLevel(languageLevel ?? DEFAULT_LANGUAGE_LEVEL);

    setIsLoading(false);
  };

  useEffect(() => {
    retrieveLanguageLevel();
  }, []);

  useEffect(() => {
    saveIfChanged(languageLevel);
  }, [languageLevel]);

  return (
    <LanguageLevelContext.Provider
      value={{
        setLanguageLevel,
        languageLevel,
        isLoading,
      }}
    >
      {children}
    </LanguageLevelContext.Provider>
  );
}

export const useLanguageLevel = () => useContext(LanguageLevelContext);
