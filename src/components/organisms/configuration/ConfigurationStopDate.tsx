import React from 'react';
import TextSection from '../../atoms/texts/TextSection';
import { StyleSheet, View } from 'react-native';
import DatePicker from '../../molecules/DatePicker';
import {
  fontPixel,
  fontStyles,
  widthPixel,
} from '../../../utils/font-scale.utils';

type ConfigurationStopDateProps = {
  getStopDate: (stopDate: Date) => void;
};

const ConfigurationStopDate = ({ getStopDate }: ConfigurationStopDateProps) => {
  return (
    <View>
      <View style={styles.sectionTextStyle}>
        <TextSection
          text={"J'ai arrêté depuis : "}
          fontSize={fontStyles.subTitle}
        />
      </View>
      <View style={styles.datePickerStyle}>
        <DatePicker
          infoText={'Sélectionnez une date'}
          defaultDate={new Date()}
          getStopDate={(stopDate: Date) => getStopDate(stopDate)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTextStyle: {
    alignItems: 'center',
    marginBottom: widthPixel(20),
  },
  datePickerStyle: {},
});

export default ConfigurationStopDate;
