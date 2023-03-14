import React from 'react';
import CircleButton from '../../../src/components/atoms/buttons/CircleButton';
import { render } from '@testing-library/react-native';

describe('<CircleButton />', () => {
  it('should render correctly', () => {
    const circleButton = render(<CircleButton />);
    expect(circleButton.toJSON).toMatchSnapshot();
  });

  it('should find the CircleButton by testId', () => {
    const circleButtonTestId = 'circleButtonTestId';
    const circleButton = render(<CircleButton testID={circleButtonTestId} />);
    const foundButtonView = circleButton.getByTestId(circleButtonTestId);
    expect(foundButtonView).toBeTruthy();
  });
});
