import type { Meta, StoryObj } from '@storybook/react';

import ButtonTemplate from '../components/ButtonTemplate';

const meta = {
  title: 'Button Template',
  component: ButtonTemplate,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs']
} satisfies Meta<typeof ButtonTemplate>;

export default meta
type Story = StoryObj<typeof ButtonTemplate>;

export const PrimaryNeutral: Story = { 
  args: {
      bgColor: "blue",
      color: "white",
      bgActive: "darkerblue",
      bgHover: "darkblue",
      level: "primary",
      children: "Primary Neutral"
  }
}

export const PrimaryDanger: Story = { 
  args: {
      bgColor: "red",
      color: "white",
      bgActive: "darkerred",
      bgHover: "darkred",
      level: "primary",
      children: "Primary Danger"
  }
}

export const SecondaryNeutralBig: Story = { 
  args: {
      bgColor: "mostlightestblue",
      color: "blue",
      bgActive: "lighterblue",
      bgHover: "lightestblue",
      level: "primary",
      children: "Secondary Neutral (Big)"
  }
}

export const SecondarySuccess: Story = { 
  args: {
      bgColor: "mostlightestgreen",
      color: "green",
      bgActive: "lightergreen",
      bgHover: "lightestgreen",
      level: "secondary",
      children: "Secondary Success"
  }
}

export const TerciaryDanger: Story = { 
  args: {
      bgColor: "mostlightestred",
      color: "red",
      bgActive: "lighterred",
      bgHover: "lightestred",
      level: "terciary",
      children: "Terciary Danger"
  }
}