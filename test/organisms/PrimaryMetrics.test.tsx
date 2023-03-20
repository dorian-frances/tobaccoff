import { render } from '@testing-library/react-native';
import React from 'react';
import PrimaryMetrics from '../../src/components/organisms/PrimaryMetrics';

describe('<PrimaryMetrics/>', () => {
  it('should render correctly', () => {
    const component = render(
      <PrimaryMetrics
        totalSavingsProps={{
          sectionTextProps: {
            text: 'fakeTextPrimary',
            fontSize: 40,
          },
          metricTextProps: {
            metric: 20,
            unit: '€',
            minimumFractionDigits: 2,
            fontSize: 40,
          },
        }}
        monthlySavingsProps={{
          sectionTextProps: {
            text: 'fakeTextPrimary',
            fontSize: 40,
          },
          metricTextProps: {
            metric: 20,
            unit: '€',
            minimumFractionDigits: 2,
            fontSize: 40,
          },
        }}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
