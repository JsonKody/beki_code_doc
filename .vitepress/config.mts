import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bki_cdg",
  description: "Notepad of coding art",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "EZY", link: "/terminal" },
    ],

    sidebar: [
      {
        text: "EZY",
        items: [
          { text: "Terminál", link: "/terminal" },
          { text: "Git", link: "/git" },
          { text: "CSS", link: "/css" },
          { text: "HTML", link: "/html" },
        ],
      },
    ],

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
