import React from 'react';
import { render } from '@testing-library/react-native';
import FailButtons from '../../src/components/organisms/FailButtons';

describe('<FailButtons/>', () => {
  it('should render correctly', () => {
    const component = render(<FailButtons />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
