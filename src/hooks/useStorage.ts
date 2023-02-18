import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleError } from "../utils/errors";

export function useStorage<TData>() {
  const retrieve = async (key: string): Promise<TData> => {
    try {
      const stringifiedData = await AsyncStorage.getItem(key);
      return JSON.parse(stringifiedData) as TData;
    } catch (error) {
      handleError(error);
    }
  };

  const save = async (key: string, value: TData) => {
    try {
      const stringifiedData = JSON.stringify(value);
      console.log("Storage saving", key, value);
      await AsyncStorage.setItem(key, stringifiedData);
    } catch (error) {
      handleError(error);
    }
  };

  return { retrieve, save };
}
