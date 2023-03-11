import { Text, TouchableRipple } from 'react-native-paper';
import { Platform, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { Colors } from '../../assets/colors/colors.enum';
import DateTimePicker from '@react-native-community/datetimepicker';

type DatePickerButtonProps = {
  infoText: string;
};

const DatePickerButton = ({
  infoText = 'Lorem Ipsum',
}: DatePickerButtonProps) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    setShow(false);
    setDate(selectedDate);
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
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 100,
            height: 50,
            backgroundColor: Colors.INPUT_BACKGROUND_COLOR,
          }}
        >
          <View style={{ marginLeft: 15 }}>
            <Icon name={'calendar-blank'} size={25} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: Colors.INDICATIVE_TEXT_COLOR }}>
              {infoText}
            </Text>
            <Text style={{ color: Colors.BUSINESS_TEXT_COLOR }}>
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
