import { CigaretteType } from '../model/configuration.model';
import { CigaretteData } from '../data/cigarette.data';

export const computeTotalSavings = (
  sinceDate: string,
  cigaretteType: CigaretteType,
  cigaretteAmount: string
): number => {
  const timeSinceStopDate = getTimeSinceStopDate(sinceDate);
  if (cigaretteType === CigaretteType.INDUSTRIAL) {
    const totalSaving: number =
      (timeSinceStopDate *
        ((CigaretteData.industrialPacketPrice * parseFloat(cigaretteAmount)) /
          CigaretteData.industrialCigarettePerPacket)) /
      (24.0 * 3600);
    console.log(totalSaving);
    return totalSaving;
  }

  console.log(timeSinceStopDate);
  const totalSaving: number =
    (timeSinceStopDate *
      CigaretteData.rolledPacketPrice *
      parseFloat(cigaretteAmount) *
      CigaretteData.rolledCigaretteWeight) /
    CigaretteData.rolledPacketWeight /
    (24.0 * 3600);
  console.log(totalSaving);
  return totalSaving;
};

export const computeMonthSavings = (
  cigaretteType: CigaretteType,
  cigaretteAmount: string
) => {
  const timeSinceBeginningOfTheMonth = getTimeSinceBeginningOfTheMonth();
  if (cigaretteType === CigaretteType.INDUSTRIAL) {
    const totalSaving: number =
      (timeSinceBeginningOfTheMonth *
        ((CigaretteData.industrialPacketPrice * parseFloat(cigaretteAmount)) /
          CigaretteData.industrialCigarettePerPacket)) /
      (24.0 * 3600);
    console.log(totalSaving);
    return totalSaving;
  }

  const totalSaving: number =
    (timeSinceBeginningOfTheMonth *
      CigaretteData.rolledPacketPrice *
      parseFloat(cigaretteAmount) *
      CigaretteData.rolledCigaretteWeight) /
    CigaretteData.rolledPacketWeight /
    (24.0 * 3600);
  console.log(totalSaving);
  return totalSaving;
};

const getTimeSinceBeginningOfTheMonth = () => {
  const now = new Date();
  return (
    (new Date().getTime() -
      new Date(now.getUTCFullYear(), now.getUTCMonth(), 1).getTime()) /
    1000
  );
};

const getTimeSinceStopDate = (sinceDate: string) => {
  return (new Date().getTime() - Date.parse(sinceDate)) / 1000;
};
