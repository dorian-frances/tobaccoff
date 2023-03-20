import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import DatePickerButton from '../../src/components/molecules/DatePickerButton';

describe('<DatePickerButton/>', () => {
  const infoText = 'fakeInfoText';
  const fakeSetStopDate = jest.fn();

  it('should render correctly', () => {
    const component = render(
      <DatePickerButton
        infoText={infoText}
        defaultDate={new Date(2023, 2, 18)}
        getStopDate={fakeSetStopDate}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render correctly with default date set to now', () => {
    const defaultDate = new Date(2023, 2, 18);
    const component = render(
      <DatePickerButton
        infoText={infoText}
        defaultDate={defaultDate}
        getStopDate={fakeSetStopDate}
      />
    );
    const dateText = component.getByTestId('dateText');
    expect(dateText.props.children).toEqual(defaultDate.toLocaleDateString());
  });

  it('should not show dateTimePicker when initialising', () => {
    const component = render(
      <DatePickerButton
        infoText={infoText}
        defaultDate={new Date(2023, 2, 18)}
        getStopDate={fakeSetStopDate}
      />
    );
    expect(() => component.getByTestId('dateTimePicker')).toThrowError();
  });

  it('should show dateTimePicker on click', () => {
    const component = render(
      <DatePickerButton
        infoText={infoText}
        defaultDate={new Date(2023, 2, 18)}
        getStopDate={fakeSetStopDate}
      />
    );
    const touchableView = component.getByTestId('dateTimePickerTouchable');
    fireEvent.press(touchableView);
    const dateTimePicker = component.getByTestId('dateTimePicker');
    expect(dateTimePicker).toBeTruthy();
  });

  it('should change value on selected dated', async () => {
    const component = render(
      <DatePickerButton
        infoText={infoText}
        defaultDate={new Date(2023, 2, 18)}
        getStopDate={fakeSetStopDate}
      />
    );

    const touchableView = await component.getByTestId(
      'dateTimePickerTouchable'
    );
    fireEvent.press(touchableView);

    const newDate = new Date(2023, 0, 1);
    const dateTimePicker = await component.getByTestId('dateTimePicker');
    fireEvent(dateTimePicker, 'onChange', {
      nativeEvent: {
        timestamp: newDate,
      },
    });
    const displayedDate = await component.getByTestId('dateText');
    expect(displayedDate.props.children).toEqual(newDate.toLocaleDateString());
  });
});
