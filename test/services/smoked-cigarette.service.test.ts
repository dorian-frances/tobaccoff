import { SmokedCigaretteService } from '../../src/services/smoked-cigarette.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SmokedCigarettes } from '../../src/model/smoked-cigarettes.model';
import { SmokedCigarette } from '../../src/model/smoked-cigarette.model';
import { faker } from '@faker-js/faker';
import SpyInstance = jest.SpyInstance;

describe('SmokedCigarettesService', () => {
  let smokedCigarettesService: SmokedCigaretteService;
  let asyncStorageSetItemSpy: SpyInstance;

  beforeEach(async () => {
    smokedCigarettesService = new SmokedCigaretteService();
    await AsyncStorage.clear();
    asyncStorageSetItemSpy = jest.spyOn(AsyncStorage, 'setItem');
  });

  afterEach(() => {
    asyncStorageSetItemSpy.mockRestore();
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

      // When
      await smokedCigarettesService.saveSmokedCigarettes(smokedCigarettes);

      // Then
      expect(asyncStorageSetItemSpy).toBeCalledWith(
        '@smoked-cigarettes',
        JSON.stringify(smokedCigarettes)
      );
    });
  });
});
