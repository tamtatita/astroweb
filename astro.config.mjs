// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import reactI18next from "astro-react-i18next";
import node from "@astrojs/node";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    reactI18next({
      defaultLocale: "vi-VN",
      locales: ["en-US", "vi-VN", "cn-CN"],
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    ssr: {
      external: ["antd"],
    },
  },
});
