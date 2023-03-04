import { ComponentMeta, ComponentStory } from '@storybook/react'
import Title from '../components/title/title'

export default {
    title: 'Components/Title',
    component: Title,
    args: {
        title: 'Title',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-1-15h2v8h-2v-8zm0 10h2v2h-2v-2z"/></svg>
    },
    argTypes: {
        title: {
            control: {
                type: 'text'
            }
        },
        icon: {
            control: {
                type: 'object'
            }
        }
    }
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Default = Template.bind({})