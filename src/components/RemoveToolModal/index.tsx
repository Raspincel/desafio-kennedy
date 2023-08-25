import { useState } from "react";
import { useTool } from "../../hooks/contexts";
import ButtonPrimaryDanger from "../ButtonPrimaryDanger";
import ButtonSecondaryNeutralBig from "../ButtonSecondaryNeutralBig";
import ButtonTerciaryDanger from "../ButtonTerciaryDanger";
import ModalTemplate from "../ModalTemplate";
import { Warning } from "./style";

interface Props {
    id: string
}

export default function RemoveToolModal({ id }: Props) {
    const { deleteTool } = useTool()
    const [showModal, setShowModal] = useState(false)
    
    const onClose = ()=> setShowModal(false)

    const onDelete = ()=> {
        deleteTool(id)
        onClose()
    }

    return (
        <>
            <ButtonTerciaryDanger onClick={()=>setShowModal(!showModal)} type="button">
                Deletar
            </ButtonTerciaryDanger>

            <ModalTemplate
                onClose={onClose}
                showModal={showModal}
                title="Remover ferramenta"
                footer={
                    <>
                        <ButtonSecondaryNeutralBig type="button" onClick={onClose}>
                            Cancelar
                        </ButtonSecondaryNeutralBig>
                        <ButtonPrimaryDanger onClick={onDelete} type="button">
                            Sim
                        </ButtonPrimaryDanger>
                    </>
                }
                small
            >
                <Warning>Deseja realmente remover essa ferramenta?</Warning>
            </ModalTemplate>
        </>
    )
}