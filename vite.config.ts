import {defineConfig} from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@emotionagency/utils',
      fileName: format => `index.${format}.js`,
    },
    outDir: 'dist',
    reportCompressedSize: true,

    emptyOutDir: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
})
