import {
    defineNestedType,
    defineDocumentType,
    makeSource,
} from "contentlayer/source-files";

const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: `projects/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the project",
            required: true,
        },
        location: {
            type: "string",
            description: "The location of the project",
            required: true,
        },
        date: {
            type: "string",
            description: "The date of the project",
            required: true,
        },
        image: {
            type: "string",
            description: "The feature image of the project",
            required: true,
        },
        for: {
            type: "string",
            description: "The client of the project",
            required: true,
        },
        timeline: {
            type: "string",
            description: "Time taken to complete the project",
            required: true,
        },
        role: {
            type: "string",
            description: "The role of the project",
            required: true,
        },
        year: {
            type: "string",
            description: "The year of the project",
            required: true,
        },
        color: {
            type: "string",
            description: "The color of the project",
            required: true,
        },
        bgcolor: {
            type: "string",
            description: "The background color of the project",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc) => `/${doc._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Project],
});
