import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT = path.join(process.cwd(), "content");

export type Category = { id: string; name: string };

export type FaqItem = {
  slug: string;
  question: string;
  category: string;
  order: number;
  audience: "user" | "owner";
  html: string;
  text: string; // 検索用プレーンテキスト
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  order: number;
  html: string;
};

function render(md: string): string {
  return marked.parse(md, { async: false }) as string;
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function getCategories(): Category[] {
  return JSON.parse(fs.readFileSync(path.join(CONTENT, "categories.json"), "utf8"));
}

export function getFaqItems(): FaqItem[] {
  const dir = path.join(CONTENT, "faq");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      const html = render(content);
      return {
        slug: f.replace(/\.md$/, ""),
        question: String(data.question),
        category: String(data.category),
        order: Number(data.order ?? 999),
        audience: (data.audience === "owner" ? "owner" : "user") as "user" | "owner",
        html,
        text: `${data.question} ${stripTags(html)}`,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getGuides(): Guide[] {
  const dir = path.join(CONTENT, "guides");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return {
        slug: f.replace(/\.md$/, ""),
        title: String(data.title),
        description: String(data.description ?? ""),
        order: Number(data.order ?? 999),
        html: render(content),
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getGuide(slug: string): Guide | undefined {
  return getGuides().find((g) => g.slug === slug);
}

/** 本文中の h2/h3 から目次を作る（id を付与した html も返す） */
export function withToc(html: string): { html: string; toc: { id: string; text: string; level: number }[] } {
  const toc: { id: string; text: string; level: number }[] = [];
  let i = 0;
  const out = html.replace(/<h([23])>(.*?)<\/h\1>/g, (_m, lv, inner) => {
    const id = `s${++i}`;
    toc.push({ id, text: stripTags(inner), level: Number(lv) });
    return `<h${lv} id="${id}">${inner}</h${lv}>`;
  });
  return { html: out, toc };
}
