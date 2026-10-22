# ジムカリ ヘルプ（help.gymkari.jp）

media.gymkari.jp の WordPress から移行した、Next.js 製の静的ヘルプサイトです。
FAQ・掲載手順・利用マニュアルを Markdown で管理し、Vercel に静的書き出しで公開します。

## 構成

```
content/
  faq/*.md            よくある質問（1件1ファイル）
  guides/*.md         ジム掲載の流れ / 利用マニュアル / 重大事象ポリシー
  categories.json     FAQのカテゴリ定義（表示順もここ）
app/
  page.tsx            トップ
  faq/page.tsx        よくある質問（検索・対象フィルタ。問い合わせはページ末尾）
  [slug]/page.tsx     ガイド（content/guides のファイル名がURLになる）
  layout.tsx          ヘッダー・フッター
  globals.css         スタイル
components/
  FaqList.tsx         FAQ一覧（クライアント側検索）
lib/
  content.ts          Markdown 読み込み
  site.ts             問い合わせURLなどサイト設定 ← 送信先を変えるときはここ
public/images/        スクリーンショット（SCREENSHOTS.md 参照）
```

## URL

| URL | 内容 |
|---|---|
| `/` | トップ |
| `/faq/` | よくある質問（`/faq/#book-07` のように項目へ直接リンク可） |
| `/gym_register/` | ジム掲載の流れ |
| `/manual_user/` | 利用マニュアル |
| `/force-majeure/` | 重大な影響を及ぼす事象に関するキャンセル・返金ポリシー |

旧 WordPress と同じスラッグなので、既存リンクはそのまま使えます。

## FAQ を追加・修正する

`content/faq/` に Markdown を1つ置くだけです。

```markdown
---
question: "領収書は発行してもらえますか？"
category: pay          # categories.json の id
order: 21              # 表示順（小さい順）
audience: user         # user / owner（フィルタ用）
---

回答本文。Markdown が使えます。FAQはテキストのみで、画像は置きません。
```

ファイル名（例 `pay-21.md`）が項目のアンカーIDになります（`/faq/#pay-21`）。
問い合わせはページ末尾のボタンと、トップページの導線にまとめています。

## 開発・ビルド

```
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ に静的ファイルを書き出し
```

## Vercel で公開する

1. この folder を GitHub リポジトリに push
2. Vercel → Add New → Project → リポジトリを選択。Framework は Next.js が自動検出される（設定変更不要）
3. Settings → Domains に `help.gymkari.jp` を追加
4. DNS で `help` の CNAME を `cname.vercel-dns.com` に設定
5. 旧ドメインを引き継ぐ場合は `media.gymkari.jp` も Domains に追加し、help へのリダイレクト設定にする
6. 表示確認後、Lightsail のロードバランサー `media-gymkari` とインスタンス `gymkari` を削除して課金を止める

## 今後の拡張（今回は未実装）

- **AIチャット**：`lib/content.ts` の `getFaqItems()` が返す `text` を全件まとめてプロンプトに渡せば、
  FAQ を根拠にした回答ボットが作れます（現状30件強なので検索DB不要）。
  問い合わせの前段に置く場合は `FaqList.tsx` の問い合わせボタンの遷移先をチャットに差し替えます。
- **問い合わせフォームの自前化**：`lib/site.ts` の `contactUrl` を差し替えるだけで、全ボタンの遷移先が変わります。
