import ArticleCard from "../components/articles/article-card/article-card";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Components/ArticleCard",
    component: ArticleCard,
    args: {
        title: "Title",
        description: "Description",
        link: "/link"
    },
    argTypes: {
        title: {
            control: { 
                type: "text"
            }
        },
        description: {
            control: {
                type: "text"
            }
        },
        link: {
            control: {
                type: "text"
            }
        }
    }
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => <ArticleCard {...args} />;
export const Default = Template.bind({});