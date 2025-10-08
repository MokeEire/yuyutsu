import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";
import netlify from '@sveltejs/adapter-netlify';
import dotenv from 'dotenv'
dotenv.config()
// const dev = process.env.NODE_ENV === "development";

const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: PROCESS.ENV.ADAPTER === 'vercel'
      ? vercel()
      : netlify(),
    // Enable below line and change /yuyutsu to /<your-repo-name> to host the site on github pages
    // paths: {
    //   base: dev ? "" : "/yuyutsu",
    // },
    // appDir: "app",
  },

  preprocess: [preprocess({}), mdsvex(mdsvexConfig)],
};

export default config;
