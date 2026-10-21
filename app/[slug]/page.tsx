import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, getGuides, withToc } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  return g ? { title: g.title, description: g.description } : {};
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const { html, toc } = withToc(guide.html);
  const h2s = toc.filter((t) => t.level === 2);

  return (
    <article>
      <h1>{guide.title}</h1>
      {h2s.length > 2 && (
        <nav className="toc" aria-label="目次">
          <p className="toc-title">目次</p>
          <ol>
            {h2s.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.text}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="contact-box">
        <p>このページで解決しなかった場合は、お問い合わせフォームからご連絡ください。</p>
        <a className="btn btn-primary" href={site.contactUrl} target="_blank" rel="noopener">
          お問い合わせフォームへ
        </a>
      </div>
      <a className="to-top" href="#">
        ↑ ページ上部へ
      </a>
    </article>
  );
}
