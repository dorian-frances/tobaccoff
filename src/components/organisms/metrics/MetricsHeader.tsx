import React, { useState } from 'react';
import TextInfo, { TextInfoProps } from '../../atoms/texts/TextInfo';
import IconButton from '../../atoms/buttons/ButtonIcon';
import { StyleSheet, View } from 'react-native';
import { Menu } from 'react-native-paper';
import { FontsEnum } from '../../../assets/fonts/fonts.enum';
import { fontPixel, fontStyles } from '../../../utils/font-scale.utils';
import { ColorsEnum } from '../../../assets/colors/colors.enum';

type MetricsHeaderProps = {
  infoTextProps: TextInfoProps;
  onPress: () => void;
};

const MetricsHeader = ({ infoTextProps, onPress }: MetricsHeaderProps) => {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);
  return (
    <View style={styles.container}>
      <View style={styles.dateInfo}>
        <TextInfo {...infoTextProps} />
      </View>
      <View style={styles.buttonsContainer}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton icon={'dots-vertical'} onPress={openMenu} />}
          contentStyle={{
            backgroundColor: ColorsEnum.PRIMARY_95,
          }}
        >
          <Menu.Item
            title={'Réinitialiser mon compteur'}
            onPress={() => {
              onPress();
              closeMenu();
            }}
            leadingIcon={'restart'}
            titleStyle={{
              fontSize: fontStyles.small,
              fontFamily: FontsEnum.MEDIUM,
            }}
          />
        </Menu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    justifyContent: 'center',
  },
  settingsButton: {},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default MetricsHeader;
