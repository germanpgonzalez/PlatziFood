import { defineConfig } from 'vite';

export default defineConfig({
  root: './public',  
  build: {
    outDir: '../build', 
  },
  base: '/PlatziFood/'
});
