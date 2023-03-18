import React from 'react';
import { render } from '@testing-library/react-native';
import SecondaryMetric from '../../src/components/molecules/SecondaryMetric';

describe('<SmokedCigarettes/>', () => {
  it('should render correctly', () => {
    const component = render(
      <SecondaryMetric
        sectionTextProps={{ text: 'Cigarettes fumées', fontSize: 12 }}
        metricTextProps={{
          metric: 50,
          unit: '',
          minimumFractionDigits: 0,
          fontSize: 20,
        }}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
