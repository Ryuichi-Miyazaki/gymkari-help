/** サイト全体の設定。問い合わせ先などはここだけ直せばよい */
export const site = {
  name: "ジムカリ ヘルプ",
  mainSiteUrl: "https://gymkari.jp/",
  /** 問い合わせフォーム。FAQ各項目のボタンは ?ref=faq&q=<slug> を付けて遷移する */
  contactUrl: "https://gymkari.jp/contact",
  company: "株式会社リーブル",
};

export function contactLink(ref?: string): string {
  return ref ? `${site.contactUrl}?ref=faq&q=${encodeURIComponent(ref)}` : site.contactUrl;
}
