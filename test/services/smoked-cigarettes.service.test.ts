import { SmokedCigarettesService } from '../../src/services/smoked-cigarettes.service';
import { ConfigurationService } from '../../src/services/configuration.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SmokedCigarettes } from '../../src/utils/model/smoked-cigarettes.model';
import { SmokedCigarette } from '../../src/utils/model/smoked-cigarette.model';
import { faker } from '@faker-js/faker';

describe('SmokedCigarettesService', () => {
  let smokedCigarettesService: SmokedCigarettesService;

  beforeEach(async () => {
    smokedCigarettesService = new SmokedCigarettesService();
    await AsyncStorage.clear();
  });

  describe('fetchSmokedCigarettes', () => {
    it('should fetch smoked cigarettes', async () => {
      // Given
      const smokedCigarettes = new SmokedCigarettes([
        new SmokedCigarette(
          faker.datatype.number(),
          new Date('2023-03-25T00:00:33')
        ),
        new SmokedCigarette(
          faker.datatype.number(),
          new Date('2023-03-26T00:00:33')
        ),
        new SmokedCigarette(
          faker.datatype.number(),
          new Date('2023-03-27T00:00:33')
        ),
      ]);
      const savedSmokedCigarettes = JSON.stringify(smokedCigarettes);
      await AsyncStorage.setItem('@smoked-cigarettes', savedSmokedCigarettes);

      // When
      const data = await smokedCigarettesService.fetchSmokedCigarettesData();

      // Then
      expect(data).not.toBeNull();
      expect(data).toEqual(smokedCigarettes);
    });
  });

  describe('saveSmokedCigarettes', () => {
    it('should save smoked cigarettes', async () => {
      // Given
      const smokedCigarettes = new SmokedCigarettes([
        new SmokedCigarette(
          faker.datatype.number(),
          new Date('2023-03-25T00:00:33')
        ),
        new SmokedCigarette(
          faker.datatype.number(),
          new Date('2023-03-26T00:00:33')
        ),
        new SmokedCigarette(
          faker.datatype.number(),
          new Date('2023-03-27T00:00:33')
        ),
      ]);

      const spy = jest.spyOn(AsyncStorage, 'setItem');

      // When
      await smokedCigarettesService.saveSmokedCigarettes(smokedCigarettes);

      // Then
      expect(spy).toBeCalledWith(
        '@smoked-cigarettes',
        JSON.stringify(smokedCigarettes)
      );
    });
  });
});
