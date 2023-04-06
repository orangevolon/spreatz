import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRef } from 'react';
import { StorageEntry } from '../types/storageKeys';
import { handleError } from '../utils/errors';

export function useStorage<TKey extends keyof StorageEntry>(key: TKey) {
  type TData = StorageEntry[TKey];

  const isValueRetrievedRef = useRef(false);
  const latestValueRef = useRef<TData>();

  const retrieve = async (): Promise<TData> => {
    try {
      const stringifiedData = await AsyncStorage.getItem(key);
      const data = JSON.parse(stringifiedData) as TData;
      console.log('Storage retrieving', key, data);
      isValueRetrievedRef.current = true;
      latestValueRef.current = data;

      return data;
    } catch (error) {
      handleError(error);
    }
  };

  const save = async (value: TData) => {
    try {
      const stringifiedData = JSON.stringify(value);
      console.log('Storage saving', key, value);
      await AsyncStorage.setItem(key, stringifiedData);
    } catch (error) {
      handleError(error);
    }
  };

  const saveIfChanged = async (value: TData) => {
    if (isValueRetrievedRef.current && latestValueRef.current !== value) {
      save(value);
    }
  };

  return { retrieve, saveIfChanged };
}
