import { mockAttacker } from '@lib/mockData'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Fighter from './index'

export default {
  title: 'Components/Fighter',
  component: Fighter,
} as ComponentMeta<typeof Fighter>

const Template: ComponentStory<typeof Fighter> = (args) => <Fighter {...args} />

export const Red = Template.bind({})
Red.args = {
  id: '1',
  loading: false,
  color: 'red',
  ingredient: mockAttacker,
}

export const Blue = Template.bind({})
Blue.args = {
  id: '1',
  loading: false,
  color: 'blue',
  ingredient: mockAttacker,
}
