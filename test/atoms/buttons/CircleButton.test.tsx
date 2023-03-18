import React from 'react';
import CircleButton from '../../../src/components/atoms/buttons/CircleButton';
import { render } from '@testing-library/react-native';

describe('<CircleButton />', () => {
  it('should render correctly', () => {
    const circleButton = render(<CircleButton />);
    expect(circleButton.toJSON()).toMatchSnapshot();
  });

  it('should find the CircleButton by testId', () => {
    const circleButton = render(<CircleButton />);
    const foundButtonView = circleButton.getByTestId('circleButton');
    expect(foundButtonView).toBeTruthy();
  });
});
