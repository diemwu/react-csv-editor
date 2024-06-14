import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import BaseButton from '../baseComponents/BaseButton';

describe('BaseButton', () => {
  it('renders the button and responds to click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<BaseButton onClick={handleClick}>Test Button</BaseButton>);

    fireEvent.click(getByText('Test Button'));

    expect(handleClick).toHaveBeenCalled();
  });
});
