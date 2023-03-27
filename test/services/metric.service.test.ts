import { MetricService } from '../../src/services/metric.service';
import { CigaretteType } from '../../src/utils/model/configuration.model';
import { TimeUtils } from '../../src/utils/time.utils';
import { CigaretteData } from '../../src/utils/data/cigarette.data';
import { CigaretteUtils } from '../../src/utils/cigarette.utils';
import { SmokedCigarette } from '../../src/utils/model/smoked-cigarette.model';

describe('MetricService', () => {
  it('should return true', () => {
    expect(true).toBeTruthy();
  });

  it('should return total savings equal to one industrial packet price for 1 day stop and 0 smoked cigarettes', () => {
    // Given
    const sinceDate = new Date(2022, 1, 1).toISOString();
    const cigaretteType = CigaretteType.INDUSTRIAL;
    const cigaretteAmount = '20';

    const dateUtils = new TimeUtils();
    const cigaretteUtils = new CigaretteUtils();
    const metricService = new MetricService(dateUtils, cigaretteUtils);

    jest.spyOn(dateUtils, 'getSecondsSinceStopDate').mockImplementation(() => {
      return 86400;
    });

    // When
    const totalSaving = metricService.computeTotalSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount,
      []
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.industrialPacketPrice);
  });

  it('should return total savings for industrial cigarettes for 1 day stop (20 cigarettes a day) and 10 smoked cigarettes', () => {
    // Given
    const sinceDate = new Date('2022-02-01T00:00:30').toISOString();
    const cigaretteType = CigaretteType.INDUSTRIAL;
    const cigaretteAmount = '20';

    const dateUtils = new TimeUtils();
    const cigaretteUtils = new CigaretteUtils();
    const metricService = new MetricService(dateUtils, cigaretteUtils);

    jest.spyOn(dateUtils, 'getSecondsSinceStopDate').mockImplementation(() => {
      return 86400;
    });

    // When
    const totalSaving = metricService.computeTotalSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount,
      [
        new SmokedCigarette(5, new Date('2022-02-10T00:00:30')),
        new SmokedCigarette(5, new Date('2022-03-10T00:00:30')),
      ]
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.industrialPacketPrice / 2);
  });

  it('should return total savings equal to one rolled packet price for 1 day stop and 0 smoked cigarettes', () => {
    // Given
    const dateUtils = new TimeUtils();
    const cigaretteUtils = new CigaretteUtils();
    const metricService = new MetricService(dateUtils, cigaretteUtils);

    const sinceDate = new Date(2022, 1, 1).toISOString();
    const cigaretteType = CigaretteType.ROLLED;
    const cigaretteAmount = cigaretteUtils.getNumberOfCigarettesPerPack(
      CigaretteType.ROLLED
    );

    jest.spyOn(dateUtils, 'getSecondsSinceStopDate').mockImplementation(() => {
      return 24 * 3600;
    });

    // When
    const totalSaving = metricService.computeTotalSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount.toString(),
      []
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.rolledPacketPrice);
  });

  it('should return total savings for rolled cigarettes for 1 day stop and half packet as smoked cigarettes', () => {
    // Given
    const dateUtils = new TimeUtils();
    const cigaretteUtils = new CigaretteUtils();
    const metricService = new MetricService(dateUtils, cigaretteUtils);

    const sinceDate = new Date('2022-02-01T00:00:30').toISOString();
    const cigaretteType = CigaretteType.ROLLED;
    const cigaretteAmount = cigaretteUtils.getNumberOfCigarettesPerPack(
      CigaretteType.ROLLED
    );

    jest.spyOn(dateUtils, 'getSecondsSinceStopDate').mockImplementation(() => {
      return 24 * 3600;
    });

    // When
    const totalSaving = metricService.computeTotalSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount.toString(),
      [
        new SmokedCigarette(
          cigaretteAmount / 2,
          new Date('2022-02-10T00:00:30')
        ),
      ]
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.rolledPacketPrice / 2);
  });

  it('should return month savings equal to one industrial packet price and 0 smoked cigarettes', () => {
    // Given
    const sinceDate = new Date(2022, 1, 1).toISOString();
    const cigaretteType = CigaretteType.INDUSTRIAL;
    const cigaretteAmount = '20';

    const dateUtils = new TimeUtils();
    const cigaretteUtils = new CigaretteUtils();
    const metricService = new MetricService(dateUtils, cigaretteUtils);

    jest
      .spyOn(dateUtils, 'getSecondsSinceBeginningOfTheMonth')
      .mockImplementation(() => {
        return 24 * 3600;
      });

    // When
    const totalSaving = metricService.computeMonthSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount,
      []
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.industrialPacketPrice);
  });

  it('should return month savings equal to one rolled packet price and 0 smoked cigarettes', () => {
    // Given
    const dateUtils = new TimeUtils();
    const cigaretteUtils = new CigaretteUtils();
    const metricService = new MetricService(dateUtils, cigaretteUtils);

    const sinceDate = new Date(2022, 1, 1).toISOString();
    const cigaretteType = CigaretteType.ROLLED;
    const cigaretteAmount = cigaretteUtils.getNumberOfCigarettesPerPack(
      CigaretteType.ROLLED
    );

    jest
      .spyOn(dateUtils, 'getSecondsSinceBeginningOfTheMonth')
      .mockImplementation(() => {
        return 24 * 3600;
      });

    // When
    const totalSaving = metricService.computeMonthSavings(
      sinceDate,
      cigaretteType,
      cigaretteAmount.toString(),
      []
    );

    // Then
    expect(totalSaving).toEqual(CigaretteData.rolledPacketPrice);
  });

  it('should compute days saved for 10 day quit smoking for a 1 cigarette-per-day smoker and 0 smoked cigarettes', () => {
    const dateUtils = new TimeUtils();
    const cigaretteUtils = new CigaretteUtils();
    const metricService = new MetricService(dateUtils, cigaretteUtils);

    const sinceDate = new Date().toISOString();
    const cigarettesPerDay = '1.0';

    jest
      .spyOn(dateUtils, 'getSecondsSinceStopDate')
      .mockImplementation(() => 10 * 24 * 3600);

    const daysSaved = metricService.computeDaysSaved(
      sinceDate,
      cigarettesPerDay,
      []
    );

    expect(Math.round(daysSaved * 100) / 100).toEqual(0.08);
  });

  it('should compute non smoked cigarettes for 1 day quit smoking for a 20 cigarette-per-day smoker', () => {
    const dateUtils = new TimeUtils();
    const cigaretteUtils = new CigaretteUtils();
    const metricService = new MetricService(dateUtils, cigaretteUtils);

    const sinceDate = new Date().toISOString();
    const cigarettesPerDay = '20.0';

    jest
      .spyOn(dateUtils, 'getSecondsSinceStopDate')
      .mockImplementation(() => 24 * 3600);

    const nonSmokedCigarettes = metricService.computeNonSmokedCigarettes(
      sinceDate,
      cigarettesPerDay
    );

    expect(nonSmokedCigarettes).toEqual(parseFloat(cigarettesPerDay));
  });
});
