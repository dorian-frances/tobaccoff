import React from 'react';
import { render } from '@testing-library/react-native';
import MetricText from '../../../src/components/atoms/texts/MetricText';

describe('<MetricText/>', () => {
  const fakeMetric = 100;
  const fakeUnit = '€';
  const fakeMinimumFractionDigit = 2;
  const fakeFontSize = 20;
  it('should render correctly', () => {
    const component = render(
      <MetricText
        metric={fakeMetric}
        unit={fakeUnit}
        minimumFractionDigits={fakeMinimumFractionDigit}
        fontSize={fakeFontSize}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
