import { TimeUtils } from '../../src/utils/time.utils';

describe('getSecondsSinceStopDate', () => {
  it('should get seconds since stopDate', () => {
    const timeUtils = new TimeUtils();

    const nowDate = new Date('2023-03-02T00:00:30');
    const sinceDate = new Date('2023-03-01T00:00:30');
    jest.spyOn(global, 'Date').mockImplementationOnce(() => nowDate);
    jest.spyOn(global, 'Date').mockImplementationOnce(() => sinceDate);

    const secondsSinceStopDate = timeUtils.getSecondsSinceStopDate(
      sinceDate.toISOString()
    );

    expect(secondsSinceStopDate).toEqual(24 * 3600);
  });
});
