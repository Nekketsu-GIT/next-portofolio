import Menu from '../components/menu/menu'
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Components/Menu',
    component: Menu,
    args: {
        menuItems: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Projects',
                link: '/projects'
            },
            {
                name: 'Contact',
                link: '/contact'
            }
        ]
    },
    argTypes: {
        menuItems: {
            control: {
                type: 'object'
            }
        }
    }
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;
export const Default = Template.bind({});