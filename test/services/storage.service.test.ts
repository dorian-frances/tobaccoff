import {
  CigaretteType,
  Configuration,
} from '../../src/utils/model/configuration.model';
import { faker } from '@faker-js/faker';
import { StorageService } from '../../src/services/storage.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('StorageService', () => {
  let storageService: StorageService;

  beforeEach(async () => {
    storageService = new StorageService();
    await AsyncStorage.clear();
  });

  describe('saveConfigurationData', () => {
    it('should save configuration', () => {
      // Given
      const stopDate = new Date();
      const cigaretteType = CigaretteType.INDUSTRIAL;
      const cigaretteAmount = faker.datatype.string();

      const spy = jest.spyOn(AsyncStorage, 'setItem');

      // When
      storageService.saveConfigurationData(
        stopDate,
        cigaretteType,
        cigaretteAmount
      );
      const savedDate = stopDate;
      savedDate.setUTCHours(0, 0, 0);
      const expectedConfigurationSaved = new Configuration(
        savedDate.toISOString(),
        cigaretteType,
        cigaretteAmount
      );

      // Then
      expect(spy).toBeCalledWith(
        '@configuration',
        JSON.stringify(expectedConfigurationSaved)
      );
    });
  });

  describe('fetchConfigurationData', () => {
    it('should fetch configuration data', async () => {
      // Given
      const configuration = new Configuration(
        '2023/06/01',
        CigaretteType.INDUSTRIAL,
        '30'
      );
      const savedConfiguration = JSON.stringify(configuration);
      await AsyncStorage.setItem('@configuration', savedConfiguration);

      // When
      const data = await storageService.fetchConfigurationData();

      // Then
      expect(data).not.toBeNull();
      expect(data).toEqual(configuration);
    });

    it('should return null configuration', async () => {
      // When
      const data = await storageService.fetchConfigurationData();

      // Then
      expect(data).toBeNull();
    });
  });

  describe('clearUserData', () => {
    it('should clear all stored data', async () => {
      // Given
      const configuration = new Configuration(
        '2023/06/01',
        CigaretteType.INDUSTRIAL,
        '30'
      );
      const savedConfiguration = JSON.stringify(configuration);
      await AsyncStorage.setItem('@configuration', savedConfiguration);

      // When
      await storageService.clearUserData();

      // Then
      const data = await storageService.fetchConfigurationData();
      expect(data).toBeNull();
    });
  });
});
