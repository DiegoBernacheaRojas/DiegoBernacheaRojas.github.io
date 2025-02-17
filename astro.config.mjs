import { defineConfig } from "astro/config";
import staticAdapter from '@astrojs/static';

export default defineConfig({
  output: "static",
  site: "https://DiegoBernacheaRojas.github.io", // Para sitio de usuario. Si es de proyecto, incluye el repo.
  base: "/", // Para sitio de usuario. Para proyecto: "/nombre-del-repo/"
  adapter: staticAdapter(),
});
