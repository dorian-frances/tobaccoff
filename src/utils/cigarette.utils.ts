import { CigaretteType } from './model/configuration.model';
import { CigaretteData } from './data/cigarette.data';

export class CigaretteUtils {
  getNumberOfCigarettesPerPack(cigaretteType: CigaretteType) {
    return cigaretteType === CigaretteType.INDUSTRIAL
      ? CigaretteData.industrialCigarettePerPacket.valueOf()
      : CigaretteData.rolledPacketWeight / CigaretteData.rolledCigaretteWeight;
  }
}
