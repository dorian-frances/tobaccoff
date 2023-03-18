import React from 'react';
import { render } from '@testing-library/react-native';
import { Divider } from 'react-native-paper';

describe('<Divider/>', () => {
  it('should render correctly', () => {
    const divider = render(<Divider />);
    expect(divider.toJSON()).toMatchSnapshot();
  });
});
