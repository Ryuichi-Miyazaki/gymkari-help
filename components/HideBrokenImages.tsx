"use client";
import { useEffect } from "react";

/** まだ撮影していないスクリーンショットの <figure> を丸ごと隠す */
export default function HideBrokenImages() {
  useEffect(() => {
    const hide = (img: HTMLImageElement) => {
      const fig = img.closest("figure") as HTMLElement | null;
      (fig ?? img).style.display = "none";
    };
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>("figure img"));
    for (const img of imgs) {
      if (img.complete && img.naturalWidth === 0) hide(img);
      img.addEventListener("error", () => hide(img), { once: true });
    }
  }, []);
  return null;
}
