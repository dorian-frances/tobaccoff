import { StatusBar, StyleSheet, View } from 'react-native';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPixel, widthPixel } from '../../utils/font-scale.utils';
import ButtonsExpenseType from '../molecules/ButtonsExpenseType';
import TextHeader from '../atoms/texts/TextHeader';
import { SmokedCigaretteService } from '../../services/smoked-cigarette.service';
import { VapeExpenseService } from '../../services/vape-expense.service';
import { useIsFocused } from '@react-navigation/native';
import {
  CardData,
  CardItem,
  createCardData,
  createCardItems,
} from '../../utils/data/HistoryHelper';
import HistoryFlatList from '../organisms/history/HistoryFlatList';
import { VapeExpenses } from '../../model/vape-expenses.model';
import { SmokedCigarettes } from '../../model/smoked-cigarettes.model';

const HistoryPage = () => {
  const isFocused = useIsFocused();
  const [cardItems, setCardItems] = useState<CardItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'cigarette' | 'vape'>('all');
  const smokedCigaretteService = useMemo(
    () => new SmokedCigaretteService(),
    []
  );
  const vapeExpenseService = useMemo(() => new VapeExpenseService(), []);

  const cleanCardData = useCallback(() => {
    setCardItems([]);
  }, []);

  const getSmokedCigarettes =
    useCallback(async (): Promise<SmokedCigarettes> => {
      return await smokedCigaretteService.fetchSmokedCigarettesData();
    }, [smokedCigaretteService]);

  const getVapeExpenses = useCallback(async (): Promise<VapeExpenses> => {
    return await vapeExpenseService.fetchVapeExpensesData();
  }, [vapeExpenseService]);

  const getCardList = useCallback(async () => {
    let cardData: CardData[];
    if (filter === 'all') {
      const [persistedSmokedCigarettes, persistedVapeExpenses] =
        await Promise.all([getSmokedCigarettes(), getVapeExpenses()]);
      cardData = createCardData(
        persistedSmokedCigarettes,
        persistedVapeExpenses
      );
    } else if (filter === 'cigarette') {
      const persistedSmokedCigarettes = await getSmokedCigarettes();
      cardData = createCardData(
        persistedSmokedCigarettes,
        new VapeExpenses([])
      );
    } else {
      const persistedVapeExpenses = await getVapeExpenses();
      cardData = createCardData(
        new SmokedCigarettes([]),
        persistedVapeExpenses
      );
    }

    const cardItems: CardItem[] = createCardItems(cardData);
    setCardItems(cardItems);
  }, [filter, getSmokedCigarettes, getVapeExpenses]);

  useEffect(() => {
    cleanCardData();
    getCardList();
  }, [cleanCardData, getCardList, isFocused, filter]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={ColorsEnum.WHITE} barStyle={'dark-content'} />
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.header}>
          <TextHeader text={'Historique'} />
        </View>
        <View style={styles.filter}>
          <ButtonsExpenseType
            expenseType={filter}
            getFilterType={(filterType: string) => setFilter(filterType)}
          />
        </View>
        <View style={styles.flatListContainer}>
          <HistoryFlatList cardItems={cardItems} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: widthPixel(10),
    backgroundColor: ColorsEnum.WHITE,
  },
  header: {
    flex: 1,
    width: widthPixel(360),
    paddingTop: heightPixel(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  filter: {
    flex: 2,
    width: widthPixel(360),
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    flex: 10,
    width: widthPixel(370),
    alignItems: 'center',
  },
});

export default HistoryPage;
