import { VapeExpense } from './vape-expense.model';

export class VapeExpenses {
  vapeExpenses: VapeExpense[];

  constructor(vapeExpenses: VapeExpense[]) {
    this.vapeExpenses = vapeExpenses;
  }

  static fromEntityToDomain(data: VapeExpenses) {
    const vapeExpenses: VapeExpense[] = [];
    data.vapeExpenses.map((vapeExpense) => {
      vapeExpenses.push(
        new VapeExpense(vapeExpense.value, new Date(vapeExpense.date))
      );
    });
    return new VapeExpenses(vapeExpenses);
  }
}
