import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://invoicecaddy.io",
  image: {
    domains: ["images.unsplash.com"],
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [
    sitemap(),
    compressor({
      gzip: false,
      brotli: true,
    }),
    tailwind(),
  ],
  experimental: {
    clientPrerender: true,
  },
});
