import React from 'react';
import { render } from '@testing-library/react-native';
import InfoText from '../../../src/components/atoms/texts/InfoText';

describe('<InfoText/>', () => {
  const fakerText = 'fakeText';
  it('should render correctly', () => {
    const headerText = render(<InfoText text={fakerText} />);
    expect(headerText.toJSON()).toMatchSnapshot();
  });

  it('should access text', () => {
    const headerText = render(<InfoText text={fakerText} />);
    expect(headerText.getByText(fakerText)).toBeTruthy();
  });
});
