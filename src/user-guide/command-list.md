---
description: Pelajari apa saja yang Telegram Bot Quantist.io bisa lakukan dengan command list yang tersedia.
outline: 'deep'

# Social Card
head:
  - - meta
    - name: og:title
      content: Command List | Quantist.io
  - - meta
    - name: og:description
      content: Pelajari apa saja yang Telegram Bot Quantist.io bisa lakukan dengan command list yang tersedia.
  - - meta
    - name: og:image
      content: /brand.png
  - - meta
    - name: og:url
      content: https://quantist.io/command-list/
  - - meta
    - name: twitter:title
      content: Command List | Quantist.io
  - - meta
    - name: twitter:description
      content: Pelajari apa saja yang Telegram Bot Quantist.io bisa lakukan dengan command list yang tersedia.
  - - meta
    - name: twitter:image
      content: /brand.png
  - - meta
    - name: twitter:url
      content: https://quantist.io/command-list/
---

# Command List

Berikut daftar command yang tersedia di bot Quantist.io. Penjelasan dari setiap command akan terus dilengkapi.

## General Command
- `/start`
- `/list_commands`
- `/list_screeners`
- `/abcd` (kode saham, contoh: `/ihsg`, `/bmri`, `/brpt`, dll.)

## Chart Commands
- `/radar_foreign`
- `/radar_whale`
- `/chart_foreign`
- `/chart_whale`
- `/cluster_whale`
- `/clustertime_whale`

::: tip Spesific Stock Chart Commands
Agar tidak banyak mengetik, anda bisa mengakses pilihan chart di bawah dengan mengirimkan kode saham saja, seperti `/ihsg`, atau juga bisa langsung menggunakan command berikut:
- `/ihsg_chart_foreign` - Foreign Chart
- `/ihsg_chart_whale` - Whale Chart
- `/ihsg_cluster_whale` - Whale Cluster
- `/ihsg_clustertime_whale` - Whale Timeseries Cluster

*Ganti `ihsg` dengan kode saham yang diinginkan.*
:::

## Screener Commands:

::: info 📝 Note
- Money flow screener merupakan total dari 5 hari bursa terakhir
- Rally, around, breakout, dan breakdown adalah kondisi close pada 5 hari terakhir, tidak selalu kondisi hari ini
:::

### Foreign Flow Screeners
- `/screener_foreign_mostaccumulated` - Top Accumulated Stocks
- `/screener_foreign_mostdistributed` - Top Distributed Stocks
- `/screener_foreign_vwaprally` - Close selalu lebih dari VWAP
- `/screener_foreign_vwaparound` - Close around VWAP (+/- 5%)
- `/screener_foreign_vwapbreakout` - Close pernah breakout VWAP
- `/screener_foreign_vwapbreakdown` - Close pernah breakdown VWAP
- `/screener_foreign_vprofile` - Close berada pada trading zone profile (support/resistance)

### Whale Flow Screeners
- `/screener_whale_mostaccumulated` - Top Accumulated Stocks
- `/screener_whale_mostdistributed` - Top Distributed Stocks
- `/screener_whale_vwaprally` - Close selalu lebih dari  VWAP
- `/screener_whale_vwaparound` - Close around VWAP (+/- 5%)
- `/screener_whale_vwapbreakout` - Close pernah breakout VWAP
- `/screener_whale_vwapbreakdown` - Close pernah breakdown VWAP
- `/screener_whale_vprofile` - Close berada pada trading zone profile (support/resistance)

## Tutorial
- `/tutorial_chart`
- `/tutorial_radar`
- `/tutorial_long`

## Support
- `/contact_us`
- `/donate`