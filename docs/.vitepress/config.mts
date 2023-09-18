import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "frontend-interview",
  description: "宇宙最强的前端面试指南",
  themeConfig: {
    search: {
      provider: "local"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/README" },
      { text: "每日一题", link: "/daily/README", activeMatch: "/topics/" },
      { text: "模拟面试", link: "/mock-interview/", activeMatch: "/topics/" },


    ],

    sidebar: [
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Markdown Examples", link: "./docs/" },
      //     { text: "Runtime API Examples", link: "/api-examples" },
      //   ],
      // },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/azl397985856/fe-interview" },
    ],
    outline: [2, 4],
  },
});
