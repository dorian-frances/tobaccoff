import { CigaretteType } from '../utils/model/configuration.model';
import { CigaretteData } from '../utils/data/cigarette.data';
import { TimeUtils } from '../utils/time.utils';
import { CigaretteUtils } from '../utils/cigarette.utils';
import { SmokedCigarette } from '../utils/model/smoked-cigarette.model';

export class MetricService {
  constructor(
    private dateUtils: TimeUtils,
    private cigaretteUtils: CigaretteUtils
  ) {}

  computeTotalSavings = (
    sinceDate: string,
    cigaretteType: CigaretteType,
    cigarettesPerDay: string,
    smokedCigarettes: SmokedCigarette[]
  ): number => {
    const secondsSinceStopDate =
      this.dateUtils.getSecondsSinceStopDate(sinceDate);
    if (cigaretteType === CigaretteType.INDUSTRIAL) {
      const lostSavingsForSmokedCigarettes =
        this.computeLostSavingsForSmokedCigarettes(
          CigaretteData.industrialPacketPrice,
          this.cigaretteUtils.getNumberOfCigarettesPerPack(
            CigaretteType.INDUSTRIAL
          ),
          smokedCigarettes
        );
      return (
        (secondsSinceStopDate *
          ((CigaretteData.industrialPacketPrice *
            parseFloat(cigarettesPerDay)) /
            this.cigaretteUtils.getNumberOfCigarettesPerPack(
              CigaretteType.INDUSTRIAL
            ))) /
          (24.0 * 3600) -
        lostSavingsForSmokedCigarettes
      );
    }
    const lostSavingsForSmokedCigarettes =
      this.computeLostSavingsForSmokedCigarettes(
        CigaretteData.industrialPacketPrice,
        this.cigaretteUtils.getNumberOfCigarettesPerPack(
          CigaretteType.INDUSTRIAL
        ),
        smokedCigarettes
      );
    return (
      (secondsSinceStopDate *
        CigaretteData.rolledPacketPrice *
        parseFloat(cigarettesPerDay)) /
        this.cigaretteUtils.getNumberOfCigarettesPerPack(CigaretteType.ROLLED) /
        (24.0 * 3600) -
      lostSavingsForSmokedCigarettes
    );
  };

  computeMonthSavings = (
    sinceDate: string,
    cigaretteType: CigaretteType,
    cigarettesPerDay: string,
    smokedCigarettesInMonth: SmokedCigarette[]
  ) => {
    const secondsSinceBeginningOfTheMonth =
      this.dateUtils.getSecondsSinceBeginningOfTheMonth(sinceDate);
    if (cigaretteType === CigaretteType.INDUSTRIAL) {
      const lostSavingsForSmokedCigarettes =
        this.computeLostSavingsForSmokedCigarettes(
          CigaretteData.industrialPacketPrice,
          this.cigaretteUtils.getNumberOfCigarettesPerPack(
            CigaretteType.INDUSTRIAL
          ),
          smokedCigarettesInMonth
        );
      return (
        (secondsSinceBeginningOfTheMonth *
          ((CigaretteData.industrialPacketPrice *
            parseFloat(cigarettesPerDay)) /
            CigaretteData.industrialCigarettePerPacket)) /
          (24.0 * 3600) -
        lostSavingsForSmokedCigarettes
      );
    }

    const lostSavingsForSmokedCigarettes =
      this.computeLostSavingsForSmokedCigarettes(
        CigaretteData.industrialPacketPrice,
        this.cigaretteUtils.getNumberOfCigarettesPerPack(
          CigaretteType.INDUSTRIAL
        ),
        smokedCigarettesInMonth
      );
    return (
      (secondsSinceBeginningOfTheMonth *
        CigaretteData.rolledPacketPrice *
        parseFloat(cigarettesPerDay) *
        CigaretteData.rolledCigaretteWeight) /
        CigaretteData.rolledPacketWeight /
        (24.0 * 3600) -
      lostSavingsForSmokedCigarettes
    );
  };

  computeDaysSaved(
    stopDate: string,
    cigarettesPerDay: string,
    smokedCigarettes: SmokedCigarette[]
  ): number {
    const secondsSinceStopDate =
      this.dateUtils.getSecondsSinceStopDate(stopDate);
    const lostDaysForSmokedCigarettes =
      this.computeLostDaysForSmokedCigarettes(smokedCigarettes);
    return (
      (secondsSinceStopDate / 3600.0 / 24) *
        parseFloat(cigarettesPerDay) *
        (CigaretteData.secondsSavedPerCigarette / 3600.0 / 24) -
      lostDaysForSmokedCigarettes
    );
  }

  computeNonSmokedCigarettes(
    stopDate: string,
    cigarettesPerDay: string
  ): number {
    const secondsSinceStopDate =
      this.dateUtils.getSecondsSinceStopDate(stopDate);
    return (secondsSinceStopDate / 3600.0 / 24) * parseFloat(cigarettesPerDay);
  }

  private computeLostSavingsForSmokedCigarettes(
    industrialPacketPrice: CigaretteData,
    numberOfCigarettesPerPack: number,
    smokedCigarettes: SmokedCigarette[]
  ) {
    if (smokedCigarettes) {
      const smokedCigarettesSum = smokedCigarettes
        .map((smokedCigarette) => smokedCigarette.value)
        .reduce((sum, value) => sum + value, 0);
      return (
        (smokedCigarettesSum * industrialPacketPrice) /
        numberOfCigarettesPerPack
      );
    }
    return 0;
  }

  private computeLostDaysForSmokedCigarettes(
    smokedCigarettes: SmokedCigarette[]
  ) {
    const smokedCigarettesSum = smokedCigarettes
      .map((smokedCigarette) => smokedCigarette.value)
      .reduce((sum, value) => sum + value, 0);
    return (
      (smokedCigarettesSum * CigaretteData.secondsSavedPerCigarette) /
      3600.0 /
      24
    );
  }
}
