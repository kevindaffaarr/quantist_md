---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Quantist.io
  text: Untuk Setiap Keputusan Investasi Merdekamu
  tagline: Analisis bandarmologi semudah chatting
  image:
    src: /hero_image.jpg
    alt: Example whale chart from Quantist.io for BMRI stock
  actions:
    - theme: brand
      text: 🤖 Telegram Bot
      link: https://t.me/quantistiobot
    # - theme: brand
    #   text: 💻 Web Charts
    #   link: https://app.quantist.io/web
    - theme: alt
      text: ⚡Quickstart
      link: /user-guide/quickstart
    - theme: alt
      text: 📑 Blog
      link: /blog/

features:
  - icon: 📱
    title: Kemudahan akses secara mobile
    details: Hadir dalam bentuk Telegram Bot membuat analisis semudah chatting di genggaman anda, kapanpun dan dimanapun.
  - icon: 📈
    title: Visual chart yang lengkap
    details: Nikmati visualisasi yang komprehensif dan mudah dipahami. Gunakan whale flow, volume profile, komposisi pemegang saham, dan lainnya untuk membantu keputusan investasi.
  - icon: 🔎
    title: Cepat memilih saham dengan screener
    details: Temukan saham yang sesuai dengan kriteria anda dengan screener Most Accumulated, Breakout, Around Volume Profile, dan masih banyak lagi.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(-45deg, #8f33ff 10%, #8acdea 70%, #3ef4a8);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #8f33ff, #8acdea, #3ef4a8);
  --vp-home-hero-image-filter: blur(48px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>