import {
  CigaretteType,
  Configuration,
} from '../../src/model/configuration.model';
import { faker } from '@faker-js/faker';
import { ConfigurationService } from '../../src/services/configuration.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('ConfigurationService', () => {
  let configurationService: ConfigurationService;

  beforeEach(async () => {
    configurationService = new ConfigurationService();
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
      configurationService.saveConfigurationData(
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
      const data = await configurationService.fetchConfigurationData();

      // Then
      expect(data).not.toBeNull();
      expect(data).toEqual(configuration);
    });

    it('should return null configuration', async () => {
      // When
      const data = await configurationService.fetchConfigurationData();

      // Then
      expect(data).toBeNull();
    });
  });
});
