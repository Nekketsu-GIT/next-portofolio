import Presentation from '../components/presentation/presentation'
import { ComponentMeta, ComponentStory } from "@storybook/react";


export default {
    title: 'Components/Presentation',
    component: Presentation,
    args: {
        image: '/profile.jpg',
        title: 'lorem ipsum',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        socialMediaLinks: {
            github:  'http://',
            linkedin: 'http://',
            twitter: 'http://'
        }
    },
    argTypes: {
        image: {
            control: {
                type: 'text'
            }
        },
        socialMediaLinks: {
            control: {
                type: 'object'
            }
        },
        title: {
            control: {
                type: 'text'
            }
        },
        description: {
            control: {
                type: 'text'
            }
        }
    }
} as ComponentMeta<typeof Presentation>;

const Template: ComponentStory<typeof Presentation> = (args) => <Presentation {...args} />;

export const Default = Template.bind({});