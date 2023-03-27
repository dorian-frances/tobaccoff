import AsyncStorage from '@react-native-async-storage/async-storage';

export class GlobalStorageService {
  async clearAllData() {
    try {
      await AsyncStorage.clear();
    } catch (error: unknown) {
      throw new Error(`Error while clearing the data: ${error}`);
    }
  }
}
