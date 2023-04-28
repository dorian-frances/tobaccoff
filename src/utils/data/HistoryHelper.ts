import { VapeExpenses } from '../../model/vape-expenses.model';
import { SmokedCigarettes } from '../../model/smoked-cigarettes.model';
import _ from 'lodash';

export type CardData = {
  id: number;
  value: number;
  date: Date;
  type: 'cigarette' | 'vape';
};

export type CardItem = {
  id: string;
  title: string;
  subtitle: string;
  type: 'cigarette' | 'vape';
};

export const createCardData = (
  smokedCigarettes: SmokedCigarettes,
  vapeExpenses: VapeExpenses
) => {
  let id = 0;
  const smokedCigaretteCardData: CardData[] =
    smokedCigarettes.smokedCigarettes.map((smokedCigarette) => {
      id++;
      return {
        id: id,
        value: smokedCigarette.value,
        date: smokedCigarette.date,
        type: 'cigarette',
      };
    });
  const vapeExpenseCardData: CardData[] = vapeExpenses.vapeExpenses.map(
    (vapeExpense) => {
      id++;
      return {
        id: id,
        value: vapeExpense.value,
        date: vapeExpense.date,
        type: 'vape',
      };
    }
  );
  return _.orderBy(
    _.concat(smokedCigaretteCardData, vapeExpenseCardData),
    'date',
    'desc'
  );
};

export const createCardItems = (cardData: CardData[]): CardItem[] => {
  return cardData.map((card) => {
    return {
      id: card.id.toString(),
      title:
        card.type === 'cigarette'
          ? addCigaretteTitle(card.value)
          : addVapeTitle(card.value),
      subtitle: `${card.date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      })}`,
      type: card.type,
    };
  });
};

function addCigaretteTitle(value: number) {
  return `${value} cigarettes fumées`;
}

function addVapeTitle(value: number) {
  return `${value}€ dépensés`;
}
