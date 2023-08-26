import { useState } from 'react';
import { Meta } from '@storybook/react';
import { FieldValues, useForm } from 'react-hook-form';
import TextArea, { Props } from '../components/TextArea';
import ButtonTerciaryDanger from '../components/ButtonTerciaryDanger';

const meta = {
    title: 'Text Area',
    component: TextArea,
    parameters: {
      layout: 'centered',
    },
  
    tags: ['autodocs']
} satisfies Meta<typeof TextArea>;
  
export default meta

const Template = (args: Props) => {
    const [error, setError] = useState("")

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (e: FieldValues)=> {
    console.log(e)
    setError(!e[args.id] ? "This field is mandatory" : "")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextArea {...args} register={register} error={error} />
      <ButtonTerciaryDanger type="submit">Submit</ButtonTerciaryDanger>
    </form>
  );
};

export const Default = Template.bind({});
((Default as unknown) as { args: { [key: string]: unknown }}).args = {
  id: 'default-textarea',
  placeholder: 'Enter your text here',
};

export const WithLabel = Template.bind({});
((WithLabel as unknown) as { args: { [key: string]: unknown }}).args = {
  id: 'textarea-with-label',
  label: 'Textarea Label',
  placeholder: 'Enter your text here',
};

export const WithValue = Template.bind({});
((WithValue as unknown) as { args: { [key: string]: unknown }}).args = {
  id: 'textarea-with-value',
  placeholder: 'Enter your text here',
  value: 'This is a pre-filled value.',
};