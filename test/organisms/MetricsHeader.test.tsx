import { render } from '@testing-library/react-native';
import MetricsHeader from '../../src/components/organisms/MetricsHeader';
import React from 'react';

describe('<MetricsHeader/>', () => {
  const fakeText = 'fakeText';
  it('should render correctly', () => {
    const component = render(
      <MetricsHeader infoTextProps={{ text: fakeText }} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
