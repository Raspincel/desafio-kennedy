import { useTool } from "../../hooks/contexts";
import ButtonPrimaryNeutral from "../ButtonPrimaryNeutral";
import ButtonSecondarySuccess from "../ButtonSecondarySuccess";
import { AddIcon } from "./style";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ToolSchema } from "../../schemas/tool";
import { iCreateTool, UseForm } from "../../utils/interfaces";
import TemplateModal from "../ModalTemplate";

export default function AddToolModal() {
    const { showAddModal, setShowAddModal, createTool } = useTool()

    const { register, trigger, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(ToolSchema)
    });

    const onClose = ()=> {
        reset()
        setShowAddModal(false)
        console.log(errors)
    }

    const onCreateTool = async ({ description, link, tags: stringTags, title }: iCreateTool)=> {
        await trigger()

        const tags = stringTags.split(' ')

        createTool({ title, tags, link, description})
                
        setShowAddModal(false)
        reset()
    }
    return (
        <>

        <ButtonSecondarySuccess onClick={()=>setShowAddModal(!showAddModal)} type="button">
            <><AddIcon/> Novo</>
        </ButtonSecondarySuccess>

        <TemplateModal
          handleSubmit={handleSubmit(onCreateTool)}
          title="Nova ferramenta"
          onClose={onClose}
          showModal={showAddModal}
          footer={
            <ButtonPrimaryNeutral type='submit'>
                Salvar
            </ButtonPrimaryNeutral>
          }

        >
            
                <TextInput 
                    id="title" 
                    placeholder="Digite o nome da ferramenta"
                    label="Nome"
                    register={register as UseForm}
                    error={errors?.title?.message}
                    />            
            
                <TextInput 
                    id="link" 
                    placeholder="Insira o link para a ferramenta"
                    label="Link"
                    register={register as UseForm}
                    error={errors?.link?.message}
                />            
            
                <TextArea
                    id="description"
                    placeholder="Insira a descrição da ferramenta"
                    label="Descrição"
                    register={register as UseForm}
                    error={errors?.description?.message}
                />            
            
                <TextInput 
                    id="tags" 
                    placeholder="Insira as tags associadas à ferramenta (ex: communication social chat call)"
                    label="Tags"
                    register={register as UseForm}
                    error={errors?.tags?.message}
                />
            
        </TemplateModal>
        </>
    )
}