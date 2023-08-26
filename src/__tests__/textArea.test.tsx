import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from '../components/TextArea';

const placeholder = 'Enter value';
const id = 'test-textarea';
const label = 'Test Textarea';

describe('TextArea placeholder="text" component', () => {
  it('renders textarea with correct attributes', () => {
    render(<TextArea placeholder={placeholder} id={id} label={label} />);
    
    const textarea = screen.getByPlaceholderText(placeholder);
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('id', id);
    expect(textarea).toHaveAttribute('placeholder', placeholder);
    
    const textareaLabel = screen.getByLabelText(label);
    expect(textareaLabel).toBeInTheDocument();
  });

  it('triggers onChange event', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<TextArea placeholder={placeholder} id={id} onChange={onChange} />);
    
    const textarea = screen.getByPlaceholderText(placeholder);
    
    const newValue = 'New Value';
    await user.click(textarea);
    await user.type(textarea, newValue);

    expect(onChange).toHaveBeenCalledTimes(newValue.length);
    expect(textarea).toHaveValue(newValue);
  });

  it('displays error text when provided', () => {
    const errorText = 'Field is required';
    
    render(<TextArea placeholder={placeholder} id={id} error={errorText} />);
    
    const errorElement = screen.getByText(errorText);
    
    expect(errorElement).toBeInTheDocument();
  });

  it('passes registration function to react-hook-form', () => {
    const registerMock = vi.fn();
    
    render(<TextArea placeholder={placeholder} id={id} register={registerMock} />);
    
    expect(registerMock).toHaveBeenCalledTimes(1);
    expect(registerMock).toHaveBeenCalledWith(id);
  });

  it('renders with provided value', () => {
    const value = 'Initial Value';
    
    render(<TextArea placeholder={placeholder} id={id} value={value} />);
    
    const textarea = screen.getByPlaceholderText(placeholder);
    
    expect(textarea).toHaveValue(value);
  });
});
