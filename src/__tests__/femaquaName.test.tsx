import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FemaquaName from '../components/FemaquaName';

describe('FemaquaName', () => {
  it('renders full name and acronym correctly', () => {
    render(<FemaquaName />);

    const acronym = screen.getByText('FEMAQUA');
    expect(acronym).toBeInTheDocument();

    const fullname = screen.getByText('Ferramentas Maravilhosas que Adoro');
    expect(fullname).toBeInTheDocument();
  });

  it('renders small version correctly', () => {
    render(<FemaquaName small={true} />);

    const acronym = screen.getByText('FEMAQUA');
    expect(acronym).toBeInTheDocument();

    const fullname = screen.getByText('Ferramentas Maravilhosas que Adoro');
    expect(fullname).toBeInTheDocument();
  });
});
