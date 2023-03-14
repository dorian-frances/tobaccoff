export class Configuration {
  stopDate: string;
  cigaretteType: CigaretteType;
  cigaretteAmount: string;

  constructor(
    stopDate: string,
    cigaretteType: CigaretteType,
    cigaretteAmount: string
  ) {
    this.stopDate = stopDate;
    this.cigaretteType = cigaretteType;
    this.cigaretteAmount = cigaretteAmount;
  }
}

export enum CigaretteType {
  INDUSTRIAL = 'industrial',
  ROLLED = 'rolled',
}
