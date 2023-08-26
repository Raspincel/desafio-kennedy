import { Meta } from '@storybook/react';
import ToolCard from '../components/ToolCard';

const meta = {
    title: 'Tool Card',
    component: ToolCard,
    parameters: {
      layout: 'centered',
    },
  
    tags: ['autodocs']
} satisfies Meta<typeof ToolCard>;

export default meta

const sampleTool = {
  title: 'Sample Tool',
  description: 'A sample tool for demonstration purposes.',
  tags: ['tag1', 'tag2', 'tag3'],
  link: 'https://example.com',
  id: 'sample-id',
};

export const Default = () => <ToolCard {...sampleTool} />;
