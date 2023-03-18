import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import SegmentedButtonsTobaccoType from '../../src/components/molecules/SegmentedButtonsTobaccoType';

describe('<SegmentedButtonsTobaccoType/>', () => {
  it('should render correctly', () => {
    const spyFunction = jest.fn();
    const component = render(
      <SegmentedButtonsTobaccoType
        defaultValue={'industrial'}
        getCigaretteType={spyFunction}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with industrial as default type', () => {
    const spyFunction = jest.fn();
    const component = render(
      <SegmentedButtonsTobaccoType
        defaultValue={'industrial'}
        getCigaretteType={spyFunction}
      />
    );
    const industrialButton = component.getByTestId('industrialTypeButton');
    expect(industrialButton.props.accessibilityState.checked).toEqual(true);
  });

  it('should change value from industrial to rolled', () => {
    const spyFunction = jest.fn();
    const component = render(
      <SegmentedButtonsTobaccoType
        defaultValue={'industrial'}
        getCigaretteType={spyFunction}
      />
    );
    const industrialButton = component.getByTestId('industrialTypeButton');
    const rolledButton = component.getByTestId('rolledTypeButton');
    fireEvent.press(rolledButton);
    expect(rolledButton.props.accessibilityState.checked).toEqual(true);
    expect(industrialButton.props.accessibilityState.checked).toEqual(false);
  });
});
