import type { Metadata } from "next";
import { getCategories, getFaqItems } from "@/lib/content";
import FaqList from "@/components/FaqList";

export const metadata: Metadata = {
  title: "よくある質問",
  description: "ジムカリのご利用についてよくいただく質問と回答",
};

export default function FaqPage() {
  const categories = getCategories();
  const items = getFaqItems();
  return (
    <>
      <h1>よくある質問</h1>
      <p className="lead">
        ジムカリのご利用についてよくいただく質問をまとめました。キーワードで検索するか、質問をタップすると回答が開きます。
      </p>
      <FaqList categories={categories} items={items} />
      <p style={{ marginTop: 40 }}>
        災害や公衆衛生上の緊急事態などが発生した場合の取り扱いは{" "}
        <a href="/force-majeure/">重大な影響を及ぼす事象に関するキャンセル・返金ポリシー</a>{" "}
        をご覧ください。
      </p>
      <a className="to-top" href="#">
        ↑ ページ上部へ
      </a>
    </>
  );
}
