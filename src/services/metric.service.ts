import { CigaretteType } from '../utils/model/configuration.model';
import { CigaretteData } from '../utils/data/cigarette.data';
import { TimeUtils } from '../utils/time.utils';
import { CigaretteUtils } from '../utils/cigarette.utils';

export class MetricService {
  constructor(
    private dateUtils: TimeUtils,
    private cigaretteUtils: CigaretteUtils
  ) {}

  computeTotalSavings = (
    sinceDate: string,
    cigaretteType: CigaretteType,
    cigarettesPerDay: string
  ): number => {
    const secondsSinceStopDate =
      this.dateUtils.getSecondsSinceStopDate(sinceDate);
    if (cigaretteType === CigaretteType.INDUSTRIAL) {
      return (
        (secondsSinceStopDate *
          ((CigaretteData.industrialPacketPrice *
            parseFloat(cigarettesPerDay)) /
            this.cigaretteUtils.getNumberOfCigarettesPerPack(
              CigaretteType.INDUSTRIAL
            ))) /
        (24.0 * 3600)
      );
    }

    return (
      (secondsSinceStopDate *
        CigaretteData.rolledPacketPrice *
        parseFloat(cigarettesPerDay)) /
      this.cigaretteUtils.getNumberOfCigarettesPerPack(CigaretteType.ROLLED) /
      (24.0 * 3600)
    );
  };

  computeMonthSavings = (
    sinceDate: string,
    cigaretteType: CigaretteType,
    cigarettesPerDay: string
  ) => {
    const secondsSinceBeginningOfTheMonth =
      this.dateUtils.getSecondsSinceBeginningOfTheMonth(sinceDate);
    if (cigaretteType === CigaretteType.INDUSTRIAL) {
      return (
        (secondsSinceBeginningOfTheMonth *
          ((CigaretteData.industrialPacketPrice *
            parseFloat(cigarettesPerDay)) /
            CigaretteData.industrialCigarettePerPacket)) /
        (24.0 * 3600)
      );
    }

    return (
      (secondsSinceBeginningOfTheMonth *
        CigaretteData.rolledPacketPrice *
        parseFloat(cigarettesPerDay) *
        CigaretteData.rolledCigaretteWeight) /
      CigaretteData.rolledPacketWeight /
      (24.0 * 3600)
    );
  };

  computeDaysSaved(stopDate: string, cigarettesPerDay: string): number {
    const secondsSinceStopDate =
      this.dateUtils.getSecondsSinceStopDate(stopDate);
    return (
      (secondsSinceStopDate / 3600.0 / 24) *
      parseFloat(cigarettesPerDay) *
      (CigaretteData.secondsSavedPerCigarette / 3600.0 / 24)
    );
  }
}
