import Articles from "../components/articles/articles";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: 'Components/Articles',
    component: Articles,
    args: {
        categories : ['all', 'web', 'mobile', 'design'],
        articlesByPage: 10,
    },
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = (args) => <Articles {...args} />;
export const Default = Template.bind({});

