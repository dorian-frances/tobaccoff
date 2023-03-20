import React from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import InputText from '../../../src/components/atoms/texts/InputText';
import { ReactTestInstance } from 'react-test-renderer';

describe('<InputText/>', () => {
  const fakerGetCigaretteAmount = jest.fn();
  const fakeLabelText = 'fakeLabelText';
  const fakePlaceHolder = 'fakePlaceholder';

  it('should render correctly', () => {
    const headerText = render(
      <InputText
        getCigaretteAmount={fakerGetCigaretteAmount}
        label={fakeLabelText}
        placeholder={fakePlaceHolder}
      />
    );
    expect(headerText.toJSON()).toMatchSnapshot();
  });

  it('should change text correctly', () => {
    const expectedText = 'fakeText';
    const component: RenderAPI = render(
      <InputText
        getCigaretteAmount={fakerGetCigaretteAmount}
        label={fakeLabelText}
        placeholder={fakePlaceHolder}
      />
    );
    const inputText: ReactTestInstance = component.getByTestId('text-input-ID');
    fireEvent.changeText(inputText, expectedText);
    const changeInputText: ReactTestInstance =
      component.getByTestId('text-input-ID');
    expect(changeInputText.props.value).toEqual(expectedText);
  });
});
