import { render } from '@testing-library/react-native';
import Restart from '../../src/components/organisms/Restart';
import React from 'react';

describe('<Restart/>', () => {
  it('should render correctly', () => {
    const component = render(<Restart />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
