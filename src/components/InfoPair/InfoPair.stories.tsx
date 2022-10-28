import { ComponentMeta, ComponentStory } from '@storybook/react'
import InfoPair from './index'

export default {
  title: 'Components/InfoPair',
  component: InfoPair,
} as ComponentMeta<typeof InfoPair>

const Template: ComponentStory<typeof InfoPair> = (args) => (
  <InfoPair {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Info',
  value: 'Pair',
}
