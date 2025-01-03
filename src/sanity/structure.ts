import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio")
    .items([
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("article").title("Articles"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("tags").title("Tags"),
    ]);
