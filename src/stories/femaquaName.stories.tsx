import { Meta } from '@storybook/react';
import FemaquaName from '../components/FemaquaName';

const meta = {
    title: 'Femaqua Heading',
    component: FemaquaName,
    parameters: {
      layout: 'centered',
    },
  
    tags: ['autodocs']
} satisfies Meta<typeof FemaquaName>;
  
export default meta

export const Default = () => <FemaquaName />;

export const SmallSize = () => <FemaquaName small />;
