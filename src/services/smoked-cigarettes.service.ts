import { SmokedCigarettes } from '../utils/model/smoked-cigarettes.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class SmokedCigarettesService {
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
}
