import * as yup from 'yup'

export const ToolSchema = yup.object().shape({
    title: yup.string().required("Nome é um campo obrigatório"),
    link: yup.string().required("Insira o link para a ferramenta"),
    description: yup.string().required("Descrição é um campo obrigatório"),
    tags: yup.string().required("Insira ao menos 1 tag")
})