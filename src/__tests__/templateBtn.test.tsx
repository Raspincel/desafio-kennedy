import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import 'jest-styled-components'

import ButtonTemplate from '../components/ButtonTemplate';

describe('button template', () => {
  it('renders correctly', () => {
    render(
      <ButtonTemplate color="red"
        bgColor="mostlightestred"
        bgHover="lightestred"
        bgActive="lighterred" 
        level='primary' 
        type='button'
      >
          Button
    </ButtonTemplate>
    )

      const button = screen.getByRole('button', {
        name: 'Button'
      })

      expect(button).toBeInTheDocument()
  });

  it('renders with the correct colors', async ()=> {
    render(
      <ButtonTemplate 
        color="red"
        bgColor="mostlightestred"
        bgHover="lightestred"
        bgActive="lighterred" 
        level='primary' 
        type='button'
      >
          Button
    </ButtonTemplate>
    )
        
    const button = screen.getByRole('button', {
        name: 'Button'
    })

    expect(button).toHaveStyleRule('color', 'var(--red)');
    expect(button).toHaveStyleRule('background-color', 'var(--mostlightestred)');
    expect(button).toHaveStyleRule('background-color', 'var(--lightestred)', 
      { modifier: ':hover' });
    expect(button).toHaveStyleRule('background-color', 'var(--lighterred)', 
      { modifier: ':active' });
  })

});