export class Metrics {
  totalSavings: number;
  MonthSaving: number;
  lifeDays: number;
  nonSmokedCigarettes: number;
  smokedCigarettes: number;

  constructor(
    totalSavings: number,
    MonthSaving: number,
    lifeDays: number,
    nonSmokedCigarettes: number,
    smokedCigarettes: number
  ) {
    this.totalSavings = totalSavings;
    this.MonthSaving = MonthSaving;
    this.lifeDays = lifeDays;
    this.nonSmokedCigarettes = nonSmokedCigarettes;
    this.smokedCigarettes = smokedCigarettes;
  }
}
