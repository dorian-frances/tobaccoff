import { FlatList, View } from 'react-native';
import React from 'react';
import { CardItem } from '../../../utils/data/HistoryHelper';
import { heightPixel, widthPixel } from '../../../utils/font-scale.utils';
import { StyleSheet } from 'react-native';
import CardHistory from '../../molecules/CardHistory';
import AvatarIconCigarette from '../../atoms/avatar/AvatarIconCigarette';
import AvatarIconVape from '../../atoms/avatar/AvatarIconVape';
import { ColorsEnum } from '../../../assets/colors/colors.enum';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';

type HistoryFlatListProps = {
  cardItems: CardItem[];
};

const HistoryFlatList = ({ cardItems }: HistoryFlatListProps) => {
  const CigaretteItem = ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) => {
    return (
      <View>
        <CardHistory
          style={styles.card}
          title={title}
          subtitle={subtitle}
          left={() => <AvatarIconCigarette />}
        />
      </View>
    );
  };
  const VapeItem = ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) => {
    return (
      <View>
        <CardHistory
          style={styles.card}
          title={title}
          subtitle={subtitle}
          left={() => <AvatarIconVape />}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={cardItems}
      renderItem={({ item }) =>
        item.type === 'cigarette' ? (
          <CigaretteItem title={item.title} subtitle={item.subtitle} />
        ) : (
          <VapeItem title={item.title} subtitle={item.subtitle} />
        )
      }
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.contentFlatList}
    />
  );
};

export default HistoryFlatList;

const styles = StyleSheet.create({
  contentFlatList: {
    width: widthPixel(370),
    alignItems: 'center',
  },
  card: {
    marginBottom: heightPixel(10),
    marginHorizontal: widthPixel(5),
    backgroundColor: ColorsEnum.PRIMARY_95,
    width: widthPixel(360),
  },
});
