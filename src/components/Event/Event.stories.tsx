import { ComponentMeta, ComponentStory } from '@storybook/react'
import Event from './index'

import { mockEvent } from '@lib/mockData'

export default {
  title: 'Components/Event',
  component: Event,
} as ComponentMeta<typeof Event>

const Template: ComponentStory<typeof Event> = (args) => <Event {...args} />

export const Default = Template.bind({})
Default.args = {
  event: mockEvent,
}
