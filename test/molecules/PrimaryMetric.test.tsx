import React from 'react';
import { render } from '@testing-library/react-native';
import PrimaryMetric from '../../src/components/molecules/PrimaryMetric';

describe('<PrimaryMetric/>', () => {
  it('should render correctly', () => {
    const component = render(
      <PrimaryMetric
        sectionTextProps={{ text: 'Ce mois-ci', fontSize: 18 }}
        metricTextProps={{
          metric: 50,
          unit: '€',
          minimumFractionDigits: 2,
          fontSize: 30,
        }}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
