"use client";
import { useEffect, useMemo, useState } from "react";
import type { Category, FaqItem } from "@/lib/content";
import { contactLink, site } from "@/lib/site";

type Audience = "all" | "user" | "owner";

function normalize(s: string): string {
  // 全角英数→半角、カタカナ→ひらがな、小文字化（ざっくりした表記ゆれ吸収）
  return s
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

export default function FaqList({ categories, items }: { categories: Category[]; items: FaqItem[] }) {
  const [q, setQ] = useState("");
  const [aud, setAud] = useState<Audience>("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // /faq/#book-07 のようなアンカーで来たら該当項目を開く
  useEffect(() => {
    const h = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (h && items.some((i) => i.slug === h)) {
      setOpenSlug(h);
      setTimeout(() => document.getElementById(h)?.scrollIntoView({ block: "start" }), 0);
    }
  }, [items]);

  const terms = useMemo(() => normalize(q).split(/\s+/).filter(Boolean), [q]);
  const filtered = useMemo(
    () =>
      items.filter((it) => {
        if (aud !== "all" && it.audience !== aud) return false;
        if (terms.length === 0) return true;
        const hay = normalize(it.text);
        return terms.every((t) => hay.includes(t));
      }),
    [items, aud, terms],
  );

  const searching = terms.length > 0;

  return (
    <>
      <div className="faq-tools">
        <input
          className="faq-search"
          type="search"
          placeholder="キーワードで探す（例：キャンセル、領収書、鍵）"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="FAQを検索"
        />
        <div className="seg" role="group" aria-label="対象">
          {(
            [
              ["all", "すべて"],
              ["user", "利用者"],
              ["owner", "ジムオーナー"],
            ] as [Audience, string][]
          ).map(([v, label]) => (
            <button key={v} type="button" className={aud === v ? "on" : ""} onClick={() => setAud(v)}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {!searching && (
        <nav className="toc" aria-label="カテゴリ">
          <p className="toc-title">カテゴリ</p>
          <ol>
            {categories
              .filter((c) => filtered.some((i) => i.category === c.id))
              .map((c) => (
                <li key={c.id}>
                  <a href={`#cat-${c.id}`}>{c.name}</a>
                </li>
              ))}
          </ol>
        </nav>
      )}

      {filtered.length === 0 && (
        <div className="faq-empty">
          <p>「{q}」に一致する質問は見つかりませんでした。</p>
          <a className="btn btn-primary" href={contactLink("search:" + q)} target="_blank" rel="noopener">
            お問い合わせフォームへ
          </a>
        </div>
      )}

      {categories.map((c) => {
        const list = filtered.filter((i) => i.category === c.id);
        if (list.length === 0) return null;
        return (
          <section key={c.id}>
            <h2 id={`cat-${c.id}`}>
              {c.name}
              {searching && <span style={{ fontSize: 14, fontWeight: 400, marginLeft: 8 }}>（{list.length}件）</span>}
            </h2>
            {list.map((it) => (
              <details
                key={it.slug}
                id={it.slug}
                className="faq"
                open={searching || openSlug === it.slug}
                onToggle={(e) => {
                  if ((e.currentTarget as HTMLDetailsElement).open) setOpenSlug(it.slug);
                }}
              >
                <summary>{it.question}</summary>
                <div className="faq-body" dangerouslySetInnerHTML={{ __html: it.html }} />
              </details>
            ))}
          </section>
        );
      })}

      {filtered.length > 0 && (
        <div className="contact-box">
          <p>探している質問が見つからない場合は、お問い合わせフォームからご連絡ください。</p>
          <a className="btn btn-primary" href={site.contactUrl} target="_blank" rel="noopener">
            お問い合わせフォームへ
          </a>
        </div>
      )}
    </>
  );
}
