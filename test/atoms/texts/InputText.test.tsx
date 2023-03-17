import React from 'react';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react-native';
import InputText from '../../../src/components/atoms/texts/InputText';

jest.useFakeTimers();

describe('<InputText/>', () => {
  const fakerGetCigaretteAmount = jest.fn();
  const fakeLabelText = faker.name.firstName();
  const fakePlaceHolder = faker.name.firstName();

  it('should render correctly', () => {
    const headerText = render(
      <InputText
        getCigaretteAmount={fakerGetCigaretteAmount}
        label={fakeLabelText}
        placeholder={fakePlaceHolder}
      />
    );
    expect(headerText.toJSON).toMatchSnapshot();
  });
});
