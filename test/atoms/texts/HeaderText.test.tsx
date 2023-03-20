import React from 'react';
import HeaderText from '../../../src/components/atoms/texts/HeaderText';
import { render } from '@testing-library/react-native';

describe('<HeaderText/>', () => {
  const fakerText = 'fakeText';
  it('should render correctly', () => {
    const headerText = render(<HeaderText text={fakerText} />);
    expect(headerText.toJSON()).toMatchSnapshot();
  });

  it('should access text', () => {
    const headerText = render(<HeaderText text={fakerText} />);
    expect(headerText.getByText(fakerText)).toBeTruthy();
  });
});
