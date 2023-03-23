export class DateUtils {
  public getTimeSinceBeginningOfTheMonth = (sinceDate: string) => {
    const nowDate = new Date();
    if (this.isStopDateInCurrentMonth(sinceDate, nowDate)) {
      return this.getTimeSinceStopDate(sinceDate);
    }
    return (
      (nowDate.getTime() -
        new Date(
          nowDate.getUTCFullYear(),
          nowDate.getUTCMonth(),
          1
        ).getTime()) /
      1000
    );
  };

  public getTimeSinceStopDate = (sinceDate: string) => {
    return (new Date(Date.now()).getTime() - Date.parse(sinceDate)) / 1000;
  };

  private isStopDateInCurrentMonth(sinceDate: string, nowDate: Date) {
    const firstDateOfCurrentMonth = new Date(
      nowDate.getUTCFullYear(),
      nowDate.getUTCMonth(),
      1
    );
    return firstDateOfCurrentMonth.getTime() < Date.parse(sinceDate);
  }
}
