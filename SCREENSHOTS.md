# スクリーンショット撮影リスト（47枚）

保存先は `public/images/` 配下。ファイル名は下の表の通り（PNG、横幅1000〜1400px程度、PCブラウザで撮れば十分）。
撮れない・不要と判断したものは放置でOK（画像が無い間は自動で非表示になります）。

## Cursorでの配置手順

1. 撮ったスクショをまとめて `incoming/` フォルダに放り込む（ファイル名は何でもよい。`incoming/` はgit管理外）
2. Cursorのチャットに以下のように指示する

```
incoming/ の画像を public/images/ に配置して。対応は次の通り：
スクリーンショット 2026-10-22 10.15.03.png → manual/16-booking-calendar.png
スクリーンショット 2026-10-22 10.16.40.png → manual/17-time-select.png
（…続く）
配置したら incoming/ の元ファイルは削除し、commit して push して。
```

3. 対応表が面倒なら、スクショを **撮った順にリストの順番通り** に揃えて放り込み、
   「incoming/ の画像をファイル名順に、SCREENSHOTS.md の manual セクションの上から順に割り当てて配置して」でも通ります。

---

## A. ジム掲載の流れ（register/）— 施設オーナーのアカウントで撮る

| # | ファイル名 | 撮る画面 |
|---|---|---|
| 1 | `register/01-menu-signup.png` | ジムカリTOPのメニューを開いた状態。「会員登録」の位置が分かるように |
| 2 | `register/02-signup-form.png` | 会員登録フォーム。**「ジムを貸し出す」のチェックボックス**が写るように |
| 3 | `register/03-mail-verify.png` | 届いたメール認証メールの本文（URLの部分） |
| 4 | `register/04-user-info.png` | メール認証後のユーザー情報登録フォーム全体 |
| 5 | `register/05-settings-gym-manage.png` | メニュー「設定」→「ジム管理」の導線（横長のメニュー部分だけでよい） |
| 6 | `register/06-add-gym-button.png` | ジム管理画面の「ジムを登録する」ボタン |
| 7 | `register/07-gym-form-1.png` | ジム登録1ページ目：ジム名・表示名・住所・最寄り駅の入力欄 |
| 8 | `register/08-gym-form-2.png` | ジム登録1ページ目の続き：所在エリア・最大収容人数・トレーニングスペース・ジムについて・鍵の受け渡し |
| 9 | `register/09-photo-upload.png` | ジム登録2ページ目：写真アップロード画面 |
| 10 | `register/10-good-photo-example-1.jpg` | 良いトップ写真の例①（広いジムの全景。掲載中の施設から借用、または自社店舗） |
| 11 | `register/11-good-photo-example-2.jpg` | 良いトップ写真の例②（コンパクトなジムのパワーラック正面） |
| 12 | `register/12-price-time.png` | ジム登録3ページ目：価格と貸し出し時間帯の設定 |
| 13 | `register/13-equipment.png` | ジム登録4ページ目：マシン・器具のチェック欄 |
| 14 | `register/14-features-input.png` | 同ページ：特徴の入力欄（チェックボックス群） |
| 15 | `register/15-features-tags.png` | 施設一覧ページで、特徴がタグとして表示されている例 |
| 16 | `register/16-key-staff-rules.png` | 鍵の受け渡し方法・スタッフ常駐・禁止事項・注意事項の入力欄 |
| 17 | `register/17-deadline-period.png` | 予約締め切り時間と受付期間（何日先まで）の設定欄 |
| 18 | `register/18-calendar-sync-tab.png` | 「設定」画面上部の「カレンダー同期」タブ |
| 19 | `register/19-gcal-plus-button.png` | Googleカレンダー左側「他のカレンダー」横の「＋」ボタン |
| 20 | `register/20-gcal-new-calendar.png` | 「＋」を押して出るメニュー（「新しいカレンダーを作成」が見える状態） |

## B. 利用マニュアル（manual/）— 一般利用者のアカウントで撮る

| # | ファイル名 | 撮る画面 |
|---|---|---|
| 21 | `manual/01-top-search-box.png` | TOPページの検索ボックス（エリア・器具設備の入力部分） |
| 22 | `manual/02-area-search.png` | 「エリアから検索」をクリックして開いた検索ボックス全体 |
| 23 | `manual/03-freeword-search.png` | 検索ボックス上部の「好きな地名から探す」入力欄 |
| 24 | `manual/04-area-checkbox.png` | 都道府県タブとエリア・駅名のチェックボックス一覧 |
| 25 | `manual/05-gym-top-image.png` | ジム個別ページのトップ画像（右下の枚数表示、右上のハートが写るように） |
| 26 | `manual/06-feature-tabs.png` | ジム個別ページのタイトル下にある特徴タブ |
| 27 | `manual/07-availability.png` | ジム個別ページの空き状況表示 |
| 28 | `manual/08-capacity-space-place.png` | 最大収容人数・トレーニングスペース・場所・予約可能時間のブロック |
| 29 | `manual/09-gym-intro.png` | 「ジムについて」の紹介文ブロック |
| 30 | `manual/10-gym-equipment.png` | 器具・特徴・鍵・スタッフのブロック |
| 31 | `manual/11-prohibited.png` | 禁止事項のブロック |
| 32 | `manual/12-cancel-policy.png` | キャンセルポリシーのブロック |
| 33 | `manual/13-notes-rules.png` | 注意事項・個別規約のブロック |
| 34 | `manual/14-reviews.png` | レビュー欄 |
| 35 | `manual/15-trial-booking.png` | ログイン状態のジムページに出る「30分見学予約」のボタン |
| 36 | `manual/16-booking-calendar.png` | 「予約へ進む」後の予約カレンダー（グレーと白の違いが分かる状態） |
| 37 | `manual/17-time-select.png` | 日付をクリックして出る時間選択のUI |
| 38 | `manual/18-selected-slots.png` | 予約枠を選んだ後（オレンジ表示と上部の選択済み日程） |
| 39 | `manual/19-confirm-screen.png` | 予約確認画面（ポイント入力欄・カード選択が写るように） |
| 40 | `manual/20-confirm-mail.png` | 予約完了メールの本文（ジムの電話番号とメッセージリンク部分） |
| 41 | `manual/21-history-menu.png` | メニューの「予約一覧/履歴」の位置 |
| 42 | `manual/22-history-list.png` | 予約一覧（電話番号・メッセージ・キャンセルボタンが見える行） |

## C. よくある質問（faq/）

| # | ファイル名 | 撮る画面 |
|---|---|---|
| 43 | `faq/01-area-tabs.png` | エリア検索ボックスの都道府県タブ（東京都以外に切り替える部分） |
| 44 | `faq/02-contact-gym-button.png` | ジム個別ページ下部、レビュー下の「ジムへのお問い合わせ」ボタン |
| 45 | `faq/03-deadline-display.png` | ジム個別ページの料金下にある予約締め切り時間の表示 |
| 46 | `faq/04-max-capacity.png` | 最大収容人数と追加料金の記載部分 |
| 47 | `faq/05-contact-gym-link.png` | ジム一覧ページからの「ジムへのお問い合わせ」リンク |

---

### 撮影のコツ
- 個人情報（自分の名前・メール・カード下4桁など）が写る画面はモザイクを入れるか、ダミーアカウントで撮る
- 同じ画面から複数枚切り出すもの（#28〜34 はジム個別ページ1枚から）は、1枚を撮って必要な部分をトリミングすればよい
- `#10` `#11` の写真例は掲載施設のものを使うなら、その施設に一言断りを入れる
