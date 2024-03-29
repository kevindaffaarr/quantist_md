import { defineConfig } from 'vitepress'

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

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide',
        items: [
          { text: 'Quickstart', link: '/markdown-examples' },
          { text: 'Articles', link: '/markdown-examples' }
        ]
      },
      { text: 'About', link: '/about' },
      { text: 'Donate', link: 'https://saweria.co/quantistio?utm_source=website&utm_medium=nav' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/quantist_io", ariaLabel: "Twitter Account of Quantist.io" },
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/></svg>'
        },
        link: "https://t.me/quantistiobot", ariaLabel: "Telegram Bot of Quantist.io"
      },
    ],

    footer: {
      message: "Quantist.io: Capturing The Silhouette of Data"
    }

  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  sitemap: {
    hostname: 'https://quantist.io',
  },
  
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
})

// TODO: Add Google Analytics
// TODO: Add meta tags for SEO: og and twitter
// TODO: About using Team Page
// TODO: Auto sidebar and different sidebar for each section
