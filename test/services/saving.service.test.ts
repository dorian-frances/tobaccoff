import { SavingService } from '../../src/services/saving.service';
import { CigaretteType } from '../../src/utils/model/configuration.model';
import { DateUtils } from '../../src/utils/date.utils';
import { CigaretteData } from '../../src/utils/data/cigarette.data';
import { CigaretteUtils } from '../../src/utils/cigarette.utils';

describe('SavingsService', () => {
  it('should return true', () => {
    expect(true).toBeTruthy();
  });

  it('should return total savings equal to one industrial packet price for 1 day stop', () => {
    // Given
    const sinceDate = new Date(2022, 1, 1).toISOString();
    const cigaretteType = CigaretteType.INDUSTRIAL;
    const cigaretteAmount = '20';

    const dateUtils = new DateUtils();
    const cigaretteUtils = new CigaretteUtils();
    const savingService = new SavingService(dateUtils, cigaretteUtils);

    jest.spyOn(dateUtils, 'getTimeSinceStopDate').mockImplementation(() => {
      return 86400;
    });

    // When
    const totalSaving = savingService.computeTotalSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.industrialPacketPrice);
  });

  it('should return total savings equal to one rolled packet price for 1 day stop', () => {
    // Given
    const dateUtils = new DateUtils();
    const cigaretteUtils = new CigaretteUtils();
    const savingService = new SavingService(dateUtils, cigaretteUtils);

    const sinceDate = new Date(2022, 1, 1).toISOString();
    const cigaretteType = CigaretteType.ROLLED;
    const cigaretteAmount = cigaretteUtils.getNumberOfCigarettesPerPack(
      CigaretteType.ROLLED
    );

    jest.spyOn(dateUtils, 'getTimeSinceStopDate').mockImplementation(() => {
      return 24 * 3600;
    });

    // When
    const totalSaving = savingService.computeTotalSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount.toString()
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.rolledPacketPrice);
  });

  it('should return month savings equal to one industrial packet price', () => {
    // Given
    const sinceDate = new Date(2022, 1, 1).toISOString();
    const cigaretteType = CigaretteType.INDUSTRIAL;
    const cigaretteAmount = '20';

    const dateUtils = new DateUtils();
    const cigaretteUtils = new CigaretteUtils();
    const savingService = new SavingService(dateUtils, cigaretteUtils);

    jest
      .spyOn(dateUtils, 'getTimeSinceBeginningOfTheMonth')
      .mockImplementation(() => {
        return 24 * 3600;
      });

    // When
    const totalSaving = savingService.computeMonthSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.industrialPacketPrice);
  });

  it('should return month savings equal to one rolled packet price', () => {
    // Given

    const dateUtils = new DateUtils();
    const cigaretteUtils = new CigaretteUtils();
    const savingService = new SavingService(dateUtils, cigaretteUtils);

    const sinceDate = new Date(2022, 1, 1).toISOString();
    const cigaretteType = CigaretteType.ROLLED;
    const cigaretteAmount = cigaretteUtils.getNumberOfCigarettesPerPack(
      CigaretteType.ROLLED
    );

    jest
      .spyOn(dateUtils, 'getTimeSinceBeginningOfTheMonth')
      .mockImplementation(() => {
        return 24 * 3600;
      });

    // When
    const totalSaving = savingService.computeMonthSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount.toString()
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.rolledPacketPrice);
  });
});
