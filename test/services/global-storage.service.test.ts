import {
  CigaretteType,
  Configuration,
} from '../../src/utils/model/configuration.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStorageService } from '../../src/services/global-storage.service';
import { ConfigurationService } from '../../src/services/configuration.service';
import { SmokedCigarettesService } from '../../src/services/smoked-cigarettes.service';
import { SmokedCigarettes } from '../../src/utils/model/smoked-cigarettes.model';
import { SmokedCigarette } from '../../src/utils/model/smoked-cigarette.model';
import { faker } from '@faker-js/faker';

describe('GlobalStorageService', () => {
  let globalStorageService: GlobalStorageService;
  let configurationService: ConfigurationService;
  let smokedCigarettesService: SmokedCigarettesService;

  beforeAll(async () => {
    globalStorageService = new GlobalStorageService();
    configurationService = new ConfigurationService();
    smokedCigarettesService = new SmokedCigarettesService();
    await AsyncStorage.clear();
  });
  describe('clearAllData', () => {
    it('should clear all stored data', async () => {
      // Given
      const configuration = new Configuration(
        '2023/06/01',
        CigaretteType.INDUSTRIAL,
        '30'
      );
      const savedConfiguration = JSON.stringify(configuration);
      await AsyncStorage.setItem('@configuration', savedConfiguration);

      const smokedCigarettes = new SmokedCigarettes([
        new SmokedCigarette(faker.datatype.number(), faker.date.recent()),
      ]);
      const savedSmokedCigarettes = JSON.stringify(smokedCigarettes);
      await AsyncStorage.setItem('@smoked-cigarettes', savedSmokedCigarettes);

      // When
      await globalStorageService.clearAllData();

      // Then
      const fetchedConfiguration =
        await configurationService.fetchConfigurationData();
      const fetchedSmokedCigarettes =
        await smokedCigarettesService.fetchSmokedCigarettesData();
      expect(fetchedConfiguration).toBeNull();
      expect(fetchedSmokedCigarettes.smokedCigarettes).toEqual([]);
    });
  });
});
