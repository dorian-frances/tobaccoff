export class TimeUtils {
  public getSecondsSinceBeginningOfTheMonth = (sinceDate: string) => {
    const nowDate = new Date();
    if (this.isStopDateInCurrentMonth(sinceDate, nowDate)) {
      return this.getSecondsSinceStopDate(sinceDate);
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

  public getSecondsSinceStopDate = (sinceDate: string) => {
    return (new Date().getTime() - new Date(sinceDate).getTime()) / 1000;
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
