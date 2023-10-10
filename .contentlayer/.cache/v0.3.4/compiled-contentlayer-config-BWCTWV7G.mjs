// contentlayer.config.js
import {
  defineNestedType,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true
    },
    location: {
      type: "string",
      description: "The location of the project",
      required: true
    },
    date: {
      type: "string",
      description: "The date of the project",
      required: true
    },
    image: {
      type: "string",
      description: "The feature image of the project",
      required: true
    },
    client: {
      type: "string",
      description: "The client of the project",
      required: true
    },
    role: {
      type: "string",
      description: "The role of the project",
      required: true
    },
    year: {
      type: "string",
      description: "The year of the project",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Project]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-BWCTWV7G.mjs.map
