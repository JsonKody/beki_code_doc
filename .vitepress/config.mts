import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "p_r_g_m",
  description: "Notepad of coding art",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Základy", link: "/basics/start" },
      { text: "JS", link: "/js/basics/hello_world" },
    ],

    sidebar: {
      "/basics/": [
        {
          text: "Základy",
          items: [
            { text: "Start", link: "/basics/start" },
            { text: "HTML", link: "/basics/html" },
            { text: "CSS", link: "/basics/css" },
            { text: "Terminál", link: "/basics/terminal" },
            { text: "Git", link: "/basics/git" },
          ],
        },
      ],
      "/js/": [
        {
          text: "Základy JS",
          items: [
            { text: "Hello, world!", link: "/js/basics/hello_world" },
            { text: "Variables", link: "/js/basics/variables" },
            { text: "Data types", link: "/js/basics/data_types" },
            { text: "Logic", link: "/js/basics/logic" },
            { text: "Functions", link: "/js/basics/functions" },
            { text: "Arrays", link: "/js/basics/arrays" },
            { text: "Objects", link: "/js/basics/objects" },
            { text: "Arrow function", link: "/js/basics/arrow_function" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/bexhex" }],
  },
  markdown: {
    theme: {
      // dark: "catppuccin-mocha",
      // dark: "github-dark-default",
      dark: "dracula",
      light: "light-plus",
    },
  },
});
