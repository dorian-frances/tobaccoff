import { SmokedCigarette } from './smoked-cigarette.model';

export class SmokedCigarettes {
  smokedCigarettes: SmokedCigarette[];

  constructor(smokedCigarettes: SmokedCigarette[]) {
    this.smokedCigarettes = smokedCigarettes;
  }

  static fromEntityToDomain(data: SmokedCigarettes) {
    const smokedCigarettes: SmokedCigarette[] = [];
    data.smokedCigarettes.map((smokedCigarette) => {
      smokedCigarettes.push(
        new SmokedCigarette(
          smokedCigarette.value,
          new Date(smokedCigarette.date)
        )
      );
    });
    return new SmokedCigarettes(smokedCigarettes);
  }
}
