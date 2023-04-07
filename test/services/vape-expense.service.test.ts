import AsyncStorage from '@react-native-async-storage/async-storage';
import { faker } from '@faker-js/faker';
import { VapeExpenseService } from '../../src/services/vape-expense.service';
import { VapeExpenses } from '../../src/model/vape-expenses.model';
import { VapeExpense } from '../../src/model/vape-expense.model';
import SpyInstance = jest.SpyInstance;

describe('VapeExpenseService', () => {
  let vapeExpenseService: VapeExpenseService;
  let asyncStorageSetItemSpy: SpyInstance;

  beforeEach(async () => {
    vapeExpenseService = new VapeExpenseService();
    await AsyncStorage.clear();
    asyncStorageSetItemSpy = jest.spyOn(AsyncStorage, 'setItem');
  });

  afterEach(() => {
    asyncStorageSetItemSpy.mockRestore();
  });

  describe('fetchVapeExpenses', () => {
    it('should fetch vape expenses', async () => {
      // Given
      const vapeExpenses = new VapeExpenses([
        new VapeExpense(
          faker.datatype.float(),
          new Date('2023-03-25T00:00:33')
        ),
        new VapeExpense(
          faker.datatype.float(),
          new Date('2023-03-26T00:00:33')
        ),
        new VapeExpense(
          faker.datatype.float(),
          new Date('2023-03-27T00:00:33')
        ),
      ]);
      const savedVapeExpenses = JSON.stringify(vapeExpenses);
      await AsyncStorage.setItem('@vape-expenses', savedVapeExpenses);

      // When
      const data = await vapeExpenseService.fetchVapeExpensesData();

      // Then
      expect(data).not.toBeNull();
      expect(data).toEqual(vapeExpenses);
    });
  });

  describe('saveVapeExpenses', () => {
    it('should save vape expenses', async () => {
      // Given
      const vapeExpenses = new VapeExpenses([
        new VapeExpense(
          faker.datatype.float(),
          new Date('2023-03-25T00:00:33')
        ),
        new VapeExpense(
          faker.datatype.float(),
          new Date('2023-03-26T00:00:33')
        ),
        new VapeExpense(
          faker.datatype.float(),
          new Date('2023-03-27T00:00:33')
        ),
      ]);

      // When
      await vapeExpenseService.saveVapeExpenses(vapeExpenses);

      // Then
      expect(asyncStorageSetItemSpy).toBeCalledWith(
        '@vape-expenses',
        JSON.stringify(vapeExpenses)
      );
    });
  });
});
