import { Text, TouchableRipple } from 'react-native-paper';
import { Platform, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { ColorsEnum } from '../../assets/colors/colors.enum';
import DateTimePicker from '@react-native-community/datetimepicker';

type DatePickerButtonProps = {
  infoText: string;
  defaultDate: Date;
  getStopDate: (stopDate: Date) => void;
};

const DatePickerButton = ({
  infoText = 'Lorem Ipsum',
  defaultDate,
  getStopDate,
}: DatePickerButtonProps) => {
  const [date, setDate] = useState(defaultDate);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = async (event: any, selectedDate: any) => {
    setShow(false);
    setDate(selectedDate);
    getStopDate(selectedDate);
  };

  const showMode = (mode: string) => {
    if (Platform.OS === 'android') {
      setShow(false);
    }
    setShow(true);
    setMode(mode);
  };
  const showDatePicker = () => {
    showMode('date');
  };

  return (
    <View>
      <TouchableRipple
        borderless={true}
        onPress={showDatePicker}
        style={{
          borderRadius: 100,
          height: 50,
        }}
        testID={'dateTimePickerTouchable'}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: ColorsEnum.INPUT_STROKE_COLOR,
            borderWidth: 1,
            borderRadius: 100,
            height: 50,
            backgroundColor: ColorsEnum.INPUT_BACKGROUND_COLOR,
          }}
        >
          <View style={{ marginLeft: 15 }}>
            <Icon name={'calendar-blank'} size={25} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: ColorsEnum.INDICATIVE_TEXT_COLOR }}>
              {infoText}
            </Text>
            <Text
              style={{ color: ColorsEnum.BUSINESS_TEXT_COLOR }}
              testID={'dateText'}
            >
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

export default DatePickerButton;
