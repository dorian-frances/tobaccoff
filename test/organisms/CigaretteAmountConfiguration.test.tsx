import React from 'react';
import { render } from '@testing-library/react-native';
import CigaretteAmountConfiguration from '../../src/components/organisms/CigaretteAmountConfiguration';

describe('<CigaretteAmountConfiguration/>', () => {
  it('should render correctly', () => {
    const fakeCigaretteAmountRetriever = jest.fn();
    const fakeCigaretteTypeRetriever = jest.fn();
    const component = render(
      <CigaretteAmountConfiguration
        getCigaretteAmount={fakeCigaretteAmountRetriever}
        getCigaretteType={fakeCigaretteTypeRetriever}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
