import { CigaretteType } from '../utils/model/configuration.model';
import { CigaretteData } from '../utils/data/cigarette.data';
import { DateUtils } from '../utils/date.utils';
import { CigaretteUtils } from '../utils/cigarette.utils';

export class SavingService {
  constructor(
    private dateUtils: DateUtils,
    private cigaretteUtils: CigaretteUtils
  ) {}

  computeTotalSavings = (
    sinceDate: string,
    cigaretteType: CigaretteType,
    cigaretteAmount: string
  ): number => {
    const timeSinceStopDate = this.dateUtils.getTimeSinceStopDate(sinceDate);
    if (cigaretteType === CigaretteType.INDUSTRIAL) {
      return (
        (timeSinceStopDate *
          ((CigaretteData.industrialPacketPrice * parseFloat(cigaretteAmount)) /
            this.cigaretteUtils.getNumberOfCigarettesPerPack(
              CigaretteType.INDUSTRIAL
            ))) /
        (24.0 * 3600)
      );
    }

    return (
      (timeSinceStopDate *
        CigaretteData.rolledPacketPrice *
        parseFloat(cigaretteAmount)) /
      this.cigaretteUtils.getNumberOfCigarettesPerPack(CigaretteType.ROLLED) /
      (24.0 * 3600)
    );
  };

  computeMonthSavings = (
    sinceDate: string,
    cigaretteType: CigaretteType,
    cigaretteAmount: string
  ) => {
    const timeSinceBeginningOfTheMonth =
      this.dateUtils.getTimeSinceBeginningOfTheMonth(sinceDate);
    if (cigaretteType === CigaretteType.INDUSTRIAL) {
      return (
        (timeSinceBeginningOfTheMonth *
          ((CigaretteData.industrialPacketPrice * parseFloat(cigaretteAmount)) /
            CigaretteData.industrialCigarettePerPacket)) /
        (24.0 * 3600)
      );
    }

    return (
      (timeSinceBeginningOfTheMonth *
        CigaretteData.rolledPacketPrice *
        parseFloat(cigaretteAmount) *
        CigaretteData.rolledCigaretteWeight) /
      CigaretteData.rolledPacketWeight /
      (24.0 * 3600)
    );
  };
}
