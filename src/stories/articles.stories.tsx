import Articles from "../components/articles/articles";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: 'Components/Articles',
    component: Articles,
    args: {
        categories : [  
            {
            title: 'Category 1',
            slug: 'category-1',
            },
            {
                title: 'Category 2',
                slug: 'category-2',
            },
            {
            title: 'Category 3',
            slug: 'category-3',
            }
        ],
        articlesByPage: 10,
    },
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = (args) => <Articles {...args} />;
export const Default = Template.bind({});

