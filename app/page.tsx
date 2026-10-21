import Link from "next/link";
import { site } from "@/lib/site";

const cards = [
  {
    href: "/gym_register/",
    title: "ジム掲載の流れ",
    text: "会員登録からジム情報の入力、写真、価格設定、Googleカレンダー連携まで。施設オーナー様向け。",
  },
  {
    href: "/manual_user/",
    title: "ジムカリの利用マニュアル",
    text: "ジムの探し方、個別ページの見かた、予約の入れ方、支払い、予約履歴、領収書について。利用者向け。",
  },
  {
    href: "/faq/",
    title: "よくある質問",
    text: "予約・利用方法・支払い・キャンセル・インボイス対応・トラブル時の対応など。",
  },
];

export default function Home() {
  return (
    <>
      <h1>ジムカリ ヘルプ・マニュアル</h1>
      <p className="lead">
        レンタルジムのシェアリングサービス「ジムカリ」のヘルプページです。知りたい内容を選んでください。
      </p>
      <div className="cards">
        {cards.map((c) => (
          <Link key={c.href} className="card" href={c.href}>
            <div className="card-title">{c.title}</div>
            <p>{c.text}</p>
          </Link>
        ))}
      </div>
      <p>
        解決しない場合は{" "}
        <a href={site.contactUrl} target="_blank" rel="noopener">
          お問い合わせフォーム
        </a>{" "}
        からご連絡ください。
      </p>
    </>
  );
}
