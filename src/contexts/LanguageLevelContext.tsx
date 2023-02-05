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

export interface LanguageLevelContextType {
  languageLevel: LanguageLevel;
  setLanguageLevel: (level: LanguageLevel) => void;
  isLoading: boolean;
}

const defaultValue: LanguageLevelContextType = {
  setLanguageLevel: () => {},
  languageLevel: "A1",
  isLoading: false,
};

export const LanguageLevelContext = createContext(defaultValue);

const LANGUAGE_LEVEL_STORAGE_KEY = "LANGUAGE_LEVEL";

export function LanguageLevelProvider({ children }: PropsWithChildren) {
  const { retrieve, save } = useStorage<LanguageLevel>();
  const [languageLevel, setLanguageLevel] = useState<LanguageLevel>();
  const [isLoading, setIsLoading] = useState(false);

  const retrieveLanguageLevel = async () => {
    setIsLoading(true);
    const languageLevel = await retrieve(LANGUAGE_LEVEL_STORAGE_KEY);

    if (languageLevel) {
      setLanguageLevel(languageLevel);
    }

    setIsLoading(false);
  };

  const saveLanguageLevel = async () => {
    if (languageLevel) {
      await save(LANGUAGE_LEVEL_STORAGE_KEY, languageLevel);
    }
  };

  useEffect(() => {
    retrieveLanguageLevel();

    return () => {
      saveLanguageLevel();
    };
  }, []);

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
