import React from 'react';
import { render } from '@testing-library/react-native';
import SectionText from '../../../src/components/atoms/texts/SectionText';

describe('<SectionText/>', () => {
  const text = 'fake-text';
  const fontSize = 20;
  it('should render correctly', () => {
    const component = render(<SectionText text={text} fontSize={fontSize} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
