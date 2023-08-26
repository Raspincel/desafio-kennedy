import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '../components/TextInput';


const placeholder = 'Enter value';
const id = 'test-input';
const label = 'Test Input';

describe('TextInput placeholder="text" component', () => {
  it('renders input with correct attributes', () => {
    
    render(<TextInput placeholder={placeholder} id={id} label={label} />);
    
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', id);
    expect(input).toHaveAttribute('placeholder', placeholder);
    
    const inputLabel = screen.getByLabelText(label);
    expect(inputLabel).toBeInTheDocument();
  });

  it('triggers onChange event', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn();

    render(<TextInput placeholder={placeholder} id={id} onChange={onChange} />);
    
    const input = screen.getByPlaceholderText(placeholder);
    
    const newValue = 'New Value';
    await user.click(input);
    await user.type(input, newValue)

    expect(onChange).toHaveBeenCalledTimes(newValue.length);
    expect(input).toHaveValue(newValue);
  });

  it('displays error text when provided', () => {
    const id = 'test-input';
    const errorText = 'Field is required';
    
    render(<TextInput placeholder={placeholder} id={id} error={errorText} />);
    
    const errorElement = screen.getByText(errorText);
    
    expect(errorElement).toBeInTheDocument();
  });

  it('passes registration function to react-hook-form', () => {
    const id = 'test-input';
    const registerMock = vi.fn();
    
    render(<TextInput placeholder={placeholder} id={id} register={registerMock} />);
    
    expect(registerMock).toHaveBeenCalledTimes(1);
    expect(registerMock).toHaveBeenCalledWith(id);
  });

  it('renders with provided value', () => {
    const id = 'test-input';
    const value = 'Initial Value';
    
    render(<TextInput placeholder={placeholder} id={id} value={value} />);
    
    const input = screen.getByPlaceholderText(placeholder);
    
    expect(input).toHaveValue(value);
  });

  it('renders with provided type', () => {
    const id = 'test-input';
    const type = 'password';
    
    render(<TextInput placeholder={placeholder} id={id} type={type} />);
    
    const input = screen.getByPlaceholderText(placeholder);
    
    expect(input).toHaveAttribute('type', type);
  });
});
