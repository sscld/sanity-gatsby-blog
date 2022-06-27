export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62b93cfb1aa56f52be05c9b9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-mnto7nw8",
                  apiId: "4b54cee2-6979-40c4-85ce-73662bd1eea9",
                },
                {
                  buildHookId: "62b93cfb70930d50d3bd0ecc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ngo1ery9",
                  apiId: "e4270a04-8483-4a4d-9777-59861d7157f4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sscld/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ngo1ery9.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
