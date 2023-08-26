import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchContext } from '../contexts/search';
import ToolCard from '../components/ToolCard';
import userEvent from '@testing-library/user-event';

const setSearchTerms = vi.fn();

const toolData = {
  title: 'Sample Tool',
  description: 'This is a sample tool',
  tags: ['tag1', 'tag2', 'tag3'],
  link: 'https://samplelink.com',
  id: 'sample-id'
};

describe('ToolCard', () => {
  it('renders tool information correctly', () => {
    render(
      <SearchContext.Provider value={{ searchTerms: '', setSearchTerms }}>
        <ToolCard {...toolData} />
      </SearchContext.Provider>
    );

    const title = screen.getByText('Sample Tool');
    expect(title).toBeInTheDocument();

    const description = screen.getByText('This is a sample tool');
    expect(description).toBeInTheDocument();

    const tag1 = screen.getByText('#tag1');
    expect(tag1).toBeInTheDocument();

    const tag2 = screen.getByText('#tag2');
    expect(tag2).toBeInTheDocument();

    const tag3 = screen.getByText('#tag3');
    expect(tag3).toBeInTheDocument();
  });

  it('calls toggleFilter on tag click', async () => {
    const user = userEvent.setup()

    render(
      <SearchContext.Provider value={{ searchTerms: '', setSearchTerms }}>
        <ToolCard {...toolData} />
      </SearchContext.Provider>
    );

    const tag1 = screen.getByText('#tag1');
    await user.click(tag1);

    expect(setSearchTerms).toHaveBeenCalledTimes(1);
  });
});
