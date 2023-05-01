// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import checker from 'vite-plugin-checker'

// Utilities
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'url'

export default (mode: string) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  // https://vitejs.dev/config/

  return defineConfig({
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true,
        styles: {
          configFile: 'src/styles/settings.scss'
        }
      }),
      checker({
        eslint: { lintCommand: 'eslint "./src/**/*.{ts,vue}"' },
        vueTsc: true
      })
    ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace('/api', '')
        }
      }
    }
  })
}
