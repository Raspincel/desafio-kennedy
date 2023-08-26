import type { Meta } from '@storybook/react';
import { useState } from 'react';

import ModalTemplate from '../components/ModalTemplate';

const meta = {
  title: 'Modal Template',
  component: ModalTemplate,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs']
} satisfies Meta<typeof ModalTemplate>;

export default meta

export const Default = () => {
  const [show, setShow] = useState(false)

  return (
    <>
    <button onClick={()=>setShow(!show)}>Show Modal</button>
    <ModalTemplate
      onClose={()=>setShow(false)}
      showModal={show}
      title="Welcome to the Modal"
      footer="Footer Content"
  >
    <p>This is the content of the modal.</p>
  </ModalTemplate>
  </>
  )
};

export const SmallModalWithForm = () => {
  const [show, setShow] = useState(false)

  return (
    <>
    <button onClick={()=>setShow(!show)}>Show Modal</button>
    <ModalTemplate
      onClose={()=>setShow(false)}
      showModal={show}
    title="Small Modal with Form"
    footer={<button type='button'>Submit</button>}
    small
  >
    <form>
      <label>Name:</label>
      <input style={{ border: '1px solid black'}} type="text" />
      <label>Email:</label>
      <input style={{ border: '1px solid black'}} type="email" />
    </form>
  </ModalTemplate>
  </>
)};

export const ImageGalleryModal = () => {
  const [show, setShow] = useState(false)

  return (
    <>
    <button onClick={()=>setShow(!show)}>Show Modal</button>
    <ModalTemplate
      onClose={()=>setShow(false)}
      showModal={show}
      title="Image Gallery"
      footer={<button type="button" onClick={()=>setShow(false)}>Fechar</button>}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src="https://www.indupropil.com.br/media/catalog/product/cache/1/image/900x/9df78eab33525d08d6e5fb8d27136e95/t/u/tumbler.jpg" alt="Image 1" style={{ width: '30%' }} />
        <img src="https://www.indupropil.com.br/media/catalog/product/cache/1/image/900x/9df78eab33525d08d6e5fb8d27136e95/t/u/tumbler.jpg" alt="Image 2" style={{ width: '30%' }} />
        <img src="https://www.indupropil.com.br/media/catalog/product/cache/1/image/900x/9df78eab33525d08d6e5fb8d27136e95/t/u/tumbler.jpg" alt="Image 3" style={{ width: '30%' }} />
      </div>
    </ModalTemplate>
    </>
  )
}
