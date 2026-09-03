import type { Components } from "react-markdown";

// Shared ReactMarkdown overrides for article/newsletter bodies:
// headings get a "// slug" code-comment label (matching the rest of the
// site's section-eyebrow convention), and images with real alt text
// become captioned figures instead of bare floating images.
function MarkdownImage({ src, alt }: { src?: string; alt?: string }) {
  return (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? ""} className="illustration" />
      {alt && <figcaption>{alt}</figcaption>}
    </figure>
  );
}

export const proseMarkdownComponents: Components = {
  h2: ({ id, children }) => (
    <h2 id={id}>
      {id && <span className="heading-comment">{`// ${id}`}</span>}
      {children}
    </h2>
  ),
  h3: ({ id, children }) => (
    <h3 id={id}>
      {id && <span className="heading-comment">{`// ${id}`}</span>}
      {children}
    </h3>
  ),
  // A bare fallback for an image that appears inline alongside other text —
  // the captioned <figure> below is block-level and only safe to use when
  // the image is a paragraph's sole content (handled by `p` below).
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} className="illustration" />
  ),
  // Markdown renders a standalone image as `<p><img></p>`; since our image
  // becomes a block-level <figure>, that <p> wrapper must be dropped here
  // or the browser's HTML-nesting correction produces a hydration mismatch.
  p: ({ node, children }) => {
    const only = node?.children.length === 1 ? node.children[0] : undefined;
    if (only?.type === "element" && only.tagName === "img") {
      const props = only.properties ?? {};
      return (
        <MarkdownImage
          src={typeof props.src === "string" ? props.src : undefined}
          alt={typeof props.alt === "string" ? props.alt : undefined}
        />
      );
    }
    return <p>{children}</p>;
  },
};
