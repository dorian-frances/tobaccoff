import { VapeExpenses } from '../model/vape-expenses.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class VapeExpenseService {
  async fetchVapeExpensesData(): Promise<VapeExpenses> {
    try {
      const data = await AsyncStorage.getItem('@vape-expenses');
      if (data) {
        return VapeExpenses.fromEntityToDomain(
          JSON.parse(data) as VapeExpenses
        );
      }
      return new VapeExpenses([]);
    } catch (error) {
      throw new Error(`Error while fetching @vape-expenses data!\n${error}`);
    }
  }

  async saveVapeExpenses(updatedVapeExpenses: VapeExpenses) {
    try {
      await AsyncStorage.setItem(
        '@vape-expenses',
        JSON.stringify(updatedVapeExpenses)
      );
    } catch (error) {
      throw new Error(
        `Error while saving @vape-expenses: ${updatedVapeExpenses}`
      );
    }
  }
}
