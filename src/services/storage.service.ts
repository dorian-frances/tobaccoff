import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CigaretteType,
  Configuration,
} from '../utils/model/configuration.model';

export class StorageService {
  async saveConfigurationData(
    stopDate: Date,
    cigaretteType: CigaretteType,
    cigaretteAmount: string
  ) {
    try {
      stopDate.setUTCHours(0, 0, 0);
      const newConfiguration: Configuration = new Configuration(
        stopDate.toISOString(),
        cigaretteType,
        cigaretteAmount
      );

      await AsyncStorage.setItem(
        '@configuration',
        JSON.stringify(newConfiguration)
      );
    } catch (error) {
      console.log(
        `Error while saving configuration with stopDate ${stopDate}, cigaretteType ${cigaretteType} and cigaretteAmount ${cigaretteAmount}`
      );
    }
  }

  async fetchConfigurationData() {
    try {
      const data = await AsyncStorage.getItem('@configuration');
      if (data) {
        return JSON.parse(data) as Configuration;
      }
      return null;
    } catch (error) {
      throw new Error(`Error while fetching @Configuration data!\n${error}`);
    }
  }

  async clearUserData() {
    try {
      await AsyncStorage.clear();
    } catch (error: unknown) {
      console.log(`Error while clearing the data: ${error}`);
    }
  }
}
