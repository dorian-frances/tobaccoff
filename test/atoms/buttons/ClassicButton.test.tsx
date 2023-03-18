import { render } from '@testing-library/react-native';
import ClassicButton from '../../../src/components/atoms/buttons/ClassicButton';
import { FontsEnum } from '../../../src/assets/fonts/fonts.enum';
import React from 'react';

describe('<ClassicButton/>', () => {
  const fakeButtonText = 'fakeButtonText';
  const fontFamily = FontsEnum.BOLD;
  const fakeMode = 'elevated';
  const fakeOnPress = jest.fn();

  it('should render correctly', () => {
    const classicButton = render(
      <ClassicButton
        text={fakeButtonText}
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
        mode={fakeMode}
        onPress={fakeOnPress}
      />
    );
    const foundText = classicButton.getByText(fakeButtonText);
    expect(foundText).toBeTruthy();
  });
});
