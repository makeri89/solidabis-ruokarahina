import { ComponentMeta, ComponentStory } from '@storybook/react'
import IngredientCard from './index'

import { mockAttacker } from '@lib/mockData'

export default {
  title: 'Components/IngredientCard',
  component: IngredientCard,
} as ComponentMeta<typeof IngredientCard>

const Template: ComponentStory<typeof IngredientCard> = (args) => (
  <IngredientCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ingredient: mockAttacker,
}

export const CardWithImage = Template.bind({})
CardWithImage.args = {
  ingredient: {
    ...mockAttacker,
    link: '/porkkana.jpg',
  },
}
