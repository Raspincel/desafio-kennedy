import { CloseIcon, ModalBody, ModalContainer, ModalFooter, ModalHeader, ModalWrapper, Title } from "./style";
import { Modal } from '@mui/material';
import { FormEventHandler } from "react";

interface Props {
    onClose: ()=> void
    children: string | JSX.Element | JSX.Element[]
    handleSubmit?: FormEventHandler<HTMLFormElement>
    showModal: boolean
    title: string
    footer: string | JSX.Element | JSX.Element[]
    small?: boolean
}

export default function ModalTemplate({ onClose, children, handleSubmit, showModal, title, footer, small }: Props) {

    return (
        <>
        <Modal
            open={showModal}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ overflowY: 'scroll' }}
        >
            <ModalWrapper>
                <ModalContainer onSubmit={handleSubmit} $small={small}  autoComplete="off">
                    <ModalHeader>
                        <Title>{title}</Title>
                        <CloseIcon data-testid="close-icon" onClick={()=>onClose()}/>
                    </ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    
                    <ModalFooter>
                        {footer}
                    </ModalFooter>
                </ModalContainer>
            </ModalWrapper>
        </Modal>
        </>
    )
}