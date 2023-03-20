import { render } from '@testing-library/react-native';
import ClassicButton from '../../../src/components/atoms/buttons/ClassicButton';
import { FontsEnum } from '../../../src/assets/fonts/fonts.enum';
import React from 'react';

describe('<ClassicButton/>', () => {
  const fakeButtonText = 'fakeButtonText';
  const fakeMode = 'elevated';
  const labelStyle = {
    fontFamily: FontsEnum.BOLD,
    color: 'black',
    fontSize: 20,
  };
  const fakeOnPress = jest.fn();

  it('should render correctly', () => {
    const classicButton = render(
      <ClassicButton
        labelStyle={labelStyle}
        text={fakeButtonText}
        mode={fakeMode}
        onPress={fakeOnPress}
      />
    );
    expect(classicButton.toJSON()).toMatchSnapshot();
  });

  it('should access button text', () => {
    const classicButton = render(
      <ClassicButton
        text={fakeButtonText}
        labelStyle={labelStyle}
        mode={fakeMode}
        onPress={fakeOnPress}
      />
    );
    const foundText = classicButton.getByText(fakeButtonText);
    expect(foundText).toBeTruthy();
  });
});
