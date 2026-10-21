import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { site } from "@/lib/site";
import HideBrokenImages from "@/components/HideBrokenImages";

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: "ジムカリの掲載手順・利用マニュアル・よくある質問",
};

const nav = [
  { href: "/gym_register/", label: "ジム掲載の流れ" },
  { href: "/manual_user/", label: "利用マニュアル" },
  { href: "/faq/", label: "よくある質問" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="inner">
            <Link className="brand" href="/">
              <span>ジムカリ</span> ヘルプ
            </Link>
            <nav className="site-nav">
              {nav.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="inner">
            <span>© {site.company}</span>
            <a href={site.mainSiteUrl} target="_blank" rel="noopener">
              ジムカリ本体サイトへ
            </a>
          </div>
        </footer>
        <HideBrokenImages />
      </body>
    </html>
  );
}
