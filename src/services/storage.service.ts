import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CigaretteType,
  Configuration,
} from '../utils/model/configuration.model';
import { Animated } from 'react-native';
import { SmokedCigarettes } from '../utils/model/smoked-cigarettes.model';
import { SmokedCigarette } from '../utils/model/smoked-cigarette.model';

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
        `Error while saving @configuration with stopDate ${stopDate}, cigaretteType ${cigaretteType} and cigaretteAmount ${cigaretteAmount}`
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
      throw new Error(`Error while fetching @configuration data!\n${error}`);
    }
  }

  async fetchSmokedCigarettesData(): Promise<SmokedCigarettes> {
    try {
      const data = await AsyncStorage.getItem('@smoked-cigarettes');
      if (data) {
        return SmokedCigarettes.fromEntityToDomain(
          JSON.parse(data) as SmokedCigarettes
        );
      }
      return new SmokedCigarettes([]);
    } catch (error) {
      throw new Error(
        `Error while fetching @smoked-cigarettes data!\n${error}`
      );
    }
  }

  async saveSmokedCigarettes(additionalCigaretteAmount: SmokedCigarettes) {
    try {
      await AsyncStorage.setItem(
        '@smoked-cigarettes',
        JSON.stringify(additionalCigaretteAmount)
      );
    } catch (error) {
      throw new Error(
        `Error while saving @smoked-cigarette: ${additionalCigaretteAmount}`
      );
    }
  }

  async clearUserData() {
    try {
      await AsyncStorage.clear();
    } catch (error: unknown) {
      throw new Error(`Error while clearing the data: ${error}`);
    }
  }
}
