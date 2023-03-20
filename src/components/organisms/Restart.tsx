import React from 'react';
import { View } from 'react-native';
import CircleButton from '../atoms/buttons/CircleButton';
import SectionText from '../atoms/texts/SectionText';
import { ColorsEnum } from '../../assets/colors/colors.enum';

const Restart = ({}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View>
        <CircleButton />
      </View>
      <View style={{ marginTop: 10 }}>
        <SectionText
          text={'Redémarrer le compteur'}
          fontSize={12}
          color={ColorsEnum.INDICATIVE_TEXT_COLOR}
        />
      </View>
    </View>
  );
};

export default Restart;
