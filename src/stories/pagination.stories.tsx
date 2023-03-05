import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pagination from '../components/pagination/pagination';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    args: {
        current: 1,
        total: 10,
        onChange: (page: number) => console.log(page)
    },
    argTypes: {
        current: {
            control: {
                type: 'number'
            }
        },
        total: {
            control: {
                type: 'number'
            }
        },
        onChange: {
            control: {
                type: 'function'
            }
        }
    }
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;
export const Default = Template.bind({});