import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProjectCard from '../components/projects/project-card/project-card'

export default {
    title: 'Components/ProjectCard',
    component: ProjectCard,
    args: {
        title: 'Title',
        image: 'https://via.placeholder.com/150',
        tags: ['tag1', 'tag2', 'tag3'],
        link: '/link'
    },
    argTypes: {
        title: {
            control: {
                type: 'text'
            }
        },
        image: {
            control: {
                type: 'text'
            }
        },
        tags: {
            control: {
                type: 'object'
            }
        },
        link: {
            control: {
                type: 'text'
            }
        }
    }
} as ComponentMeta<typeof ProjectCard>

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />

export const Default = Template.bind({})