import { Text, TouchableRipple } from 'react-native-paper';
import { Platform, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import DateTimePicker from '@react-native-community/datetimepicker';
import { heightPixel, widthPixel } from '../../utils/font-scale.utils';
import { StyleSheet } from 'react-native';

type DatePickerProps = {
  infoText: string;
  defaultDate: Date;
  getStopDate: (stopDate: Date) => void;
};

const DatePicker = ({
  infoText = 'Lorem Ipsum',
  defaultDate,
  getStopDate,
}: DatePickerProps) => {
  const [date, setDate] = useState(defaultDate);
  const [show, setShow] = useState(false);

  const onChange = async (event: any, selectedDate: any) => {
    setShow(false);
    setDate(selectedDate);
    getStopDate(selectedDate);
  };

  const showMode = () => {
    if (Platform.OS === 'android') {
      setShow(false);
    }
    setShow(true);
  };

  return (
    <View>
      <TouchableRipple
        borderless={true}
        onPress={showMode}
        style={{
          borderRadius: 100,
          height: heightPixel(50),
        }}
        testID={'dateTimePickerTouchable'}
      >
        <View style={styles.datePickerButton}>
          <View style={{ marginLeft: widthPixel(15) }}>
            <Icon name={'calendar-blank'} size={heightPixel(25)} />
          </View>
          <View style={{ marginLeft: widthPixel(15) }}>
            <Text style={{ color: ColorsEnum.INDICATIVE_TEXT_COLOR }}>
              {infoText}
            </Text>
            <Text style={{ color: ColorsEnum.BLACK }} testID={'dateText'}>
              {date.toLocaleDateString()}
            </Text>
          </View>
        </View>
      </TouchableRipple>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: ColorsEnum.INPUT_STROKE_COLOR,
    borderWidth: 1,
    borderRadius: 100,
    height: heightPixel(50),
    backgroundColor: ColorsEnum.WHITE,
  },
});

export default DatePicker;
