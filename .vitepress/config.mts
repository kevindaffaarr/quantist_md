import { fileURLToPath } from 'url'
import { defineConfig, type DefaultTheme, type HeadConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'id-ID',
  title: "Quantist.io",
  description: "Untuk investor dan trader yang yakin dan merdeka dalam setiap keputusan investasinya. Analisa foreign flow dan bandarmologi secara mandiri semudah chatting bersama Quantist.io!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'Quantist.io',
    outline: 'deep',

    nav: nav(),
    sidebar: {
      "/user-guide/": { base: "/user-guide/", items: sidebarUserGuide() },
      "/blog/": { base: "/blog/", items: sidebarBlog() }
    },
    socialLinks: socialLinks(),
    footer: { message: "Quantist.io: Capturing The Silhouette of Data" }
  },

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPHero-custom.vue', import.meta.url)
          )
        }
      ]
    }
  },

  head: head(),
  sitemap: { hostname: 'https://quantist.io' },
  
  appearance: "dark",
  cleanUrls: true,
  lastUpdated: true,
  
  srcDir: 'src',
  srcExclude: ["./page-template.md"],
  metaChunk: true,
  
  markdown: {
    lineNumbers: true,
    math: true,
    image: {
      lazyLoading: true
    }
  },
});

function head(): HeadConfig[] {
  return [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: 'Quantist.io' }],
    ['meta', { property: 'og:description', content: 'Untuk investor dan trader yang yakin dan merdeka dalam setiap keputusan investasinya. Analisa foreign flow dan bandarmologi secara mandiri semudah chatting bersama Quantist.io!' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'id_ID' }],
    ['meta', { property: 'og:image', content: '/brand.png' }],
    ['meta', { property: 'og:url', content: 'https://quantist.io' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:title', content: 'Quantist.io' }],
    ['meta', { property: 'twitter:description', content: 'Untuk investor dan trader yang yakin dan merdeka dalam setiap keputusan investasinya. Analisa foreign flow dan bandarmologi secara mandiri semudah chatting bersama Quantist.io!' }],
    ['meta', { property: 'twitter:image', content: '/brand.png' }],
    ['meta', { property: 'twitter:url', content: 'https://quantist.io' }],
    ['meta', { property: 'twitter:site', content: '@quantist_io' }],
    ['meta', { property: 'twitter:creator', content: '@quantist_io' }],
    ['meta', { property: 'twitter:cta', content: 'Learn More' }],
  ];
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Docs',
      items: [
        { text: 'User Guide', link: '/user-guide/markdown-examples', activeMatch: '/user-guide/' },
        { text: 'Blog', link: '/blog/markdown-examples', activeMatch: '/blog/' }
      ]
    },
    { text: 'About', link: '/about' },
    { text: 'Donate', link: 'https://saweria.co/quantistio?utm_source=website&utm_medium=nav' }
  ];
}

function sidebarUserGuide(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Markdown Examples', link: 'markdown-examples' },
    { text: 'Runtime API Examples', link: 'api-examples' },
  ];
}

function sidebarBlog(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Runtime API Examples', link: 'api-examples' },
    { text: 'Markdown Examples', link: 'markdown-examples' },
  ];
}

function socialLinks(): DefaultTheme.SocialLink[] {
  return [
    { icon: "twitter", link: "https://twitter.com/quantist_io", ariaLabel: "Twitter Account of Quantist.io" },
    { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/></svg>'
      },
      link: "https://t.me/quantistiobot", ariaLabel: "Telegram Bot of Quantist.io"
    },
  ];
}

// TODO: Add Google Analytics
// TODO: About using Team Page
