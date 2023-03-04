import { createClient } from "next-sanity";

export const config = {
    api: {
        projectId: "owyendcv",
        dataset: "production",
    },
};

export const sanityClient = createClient(config.api);