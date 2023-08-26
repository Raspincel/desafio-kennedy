import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalTemplate from '../components/ModalTemplate';
import userEvent from '@testing-library/user-event';

const onCloseMock = vi.fn();
const handleSubmitMock = vi.fn();
const title = 'Test Modal';
const footerText = 'Footer Content';
const childrenText = 'Modal Content';

const user = userEvent.setup()

describe('ModalTemplate component', () => {
  it('renders modal with provided title and footer', () => {
    const { rerender } = render(
      <ModalTemplate onClose={onCloseMock} showModal={true} title={title} footer={footerText}>
        {childrenText}
      </ModalTemplate>
    );

    const modalTitle = screen.getByText(title);
    expect(modalTitle).toBeInTheDocument();

    const modalFooter = screen.getByText(footerText);
    expect(modalFooter).toBeInTheDocument();

    rerender(
      <ModalTemplate onClose={onCloseMock} showModal={true} title={title} footer={<div>{footerText}</div>}>
        {childrenText}
      </ModalTemplate>
    );

    const updatedModalFooter = screen.getByText(footerText);
    expect(updatedModalFooter).toBeInTheDocument();
  });

  it('renders modal content', () => {
    render(<ModalTemplate onClose={onCloseMock} showModal={true} title={title} footer={footerText}>{childrenText}</ModalTemplate>);

    const modalContent = screen.getByText(childrenText);
    expect(modalContent).toBeInTheDocument();
  });

  it('triggers onClose when CloseIcon is clicked', async () => {
    render(<ModalTemplate onClose={onCloseMock} showModal={true} title={title} footer={footerText}>{childrenText}</ModalTemplate>);

    const closeIcon = screen.getByTestId('close-icon');
    await user.click(closeIcon);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('triggers handleSubmit when modal form is submitted', () => {
    render(
      <ModalTemplate onClose={onCloseMock} handleSubmit={handleSubmitMock} showModal={true} title={title} footer={footerText}>
        {childrenText}
      </ModalTemplate>
    );

    const modalForm = screen.getByRole('form');
    fireEvent.submit(modalForm);

    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });

  it('does not render when showModal is false', () => {
    render(<ModalTemplate onClose={onCloseMock} showModal={false} title={title} footer={footerText}>{childrenText}</ModalTemplate>);

    const modal = screen.queryByLabelText('modal-container');
    expect(modal).not.toBeInTheDocument();
  });
});
