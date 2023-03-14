import React from 'react';
import CircleButton from '../../../src/components/atoms/buttons/CircleButton';
import { render } from '@testing-library/react-native';

describe('<CircleButton />', () => {
  it('should renders correctly', () => {
    const { toJSON } = render(<CircleButton />);
    expect(toJSON).toMatchSnapshot();
  });

  it('should find the CircleButton by testId', () => {
    const circleButtonTestId = 'circleButtonTestId';
    const { getByTestId } = render(<CircleButton />);
    const foundButtonView = getByTestId(circleButtonTestId);
    expect(foundButtonView).toBeTruthy();
  });
});
