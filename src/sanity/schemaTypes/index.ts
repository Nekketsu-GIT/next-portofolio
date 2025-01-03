import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "./categoryType";
import { tagType } from "./TagType";
import { articleType } from "./articleType";
import { projectType } from "./projectType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, tagType, articleType, projectType],
};
