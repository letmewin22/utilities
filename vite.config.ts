import {defineConfig} from 'vite'
import {resolve} from 'path'
import {fileURLToPath} from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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
