import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentItem {
  slug: string;
  title: string;
  date: string;
  content: string;
  week?: number;
  category?: string;
}

export interface EventItem {
  slug: string;
  title: string;
  date: string;        // When the event was posted
  eventDate: string;   // When the event will take place
  content: string;
  type: string;        // Type of event: 'event', 'deadline', 'field-trip', etc.
  importance: string;  // 'high', 'medium', or 'low'
}

export function getContentItems(folder: 'newsletters' | 'articles' | 'events' | 'info'): ContentItem[] | EventItem[] {
  const fullPath = path.join(contentDirectory, folder);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(fullPath);
  const allItems = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, folder, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      if (folder === 'events') {
        return {
          slug,
          content,
          title: data.title || slug,
          date: data.date || '',
          eventDate: data.eventDate || '',
          type: data.type || 'event',
          importance: data.importance || 'medium',
        } as EventItem;
      } else {
        return {
          slug,
          content,
          title: data.title || slug,
          date: data.date || '',
          week: data.week,
          category: data.category,
        } as ContentItem;
      }
    });

  // Sort by date, newest first
  return allItems.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function slugifyCategory(category: string): string {
  return category.trim().toLowerCase().replace(/\s+/g, '-');
}

export interface Heading {
  depth: number;
  text: string;
  slug: string;
}

// Mirrors rehype-slug's heading-id algorithm (same github-slugger library)
// so these anchors match the ids react-markdown actually renders.
export function extractHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  const lines = content.split('\n');
  let inCodeFence = false;

  for (const line of lines) {
    if (/^```/.test(line.trim())) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence) continue;

    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (match) {
      const text = match[2].replace(/[*_`]/g, '').trim();
      headings.push({
        depth: match[1].length,
        text,
        slug: slugger.slug(text),
      });
    }
  }

  return headings;
}

export function estimateReadingTime(content: string): number {
  const words = content
    .replace(/```[\s\S]*?```/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function excerpt(content: string, maxLen = 140): string {
  const text = content
    .replace(/^#+\s+.*$/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > maxLen ? text.slice(0, maxLen).trimEnd() + '…' : text;
}

export function getContentItem(folder: 'newsletters' | 'articles' | 'events' | 'info', slug: string): ContentItem | EventItem | null {
  try {
    const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    if (folder === 'events') {
      return {
        slug,
        content,
        title: data.title || slug,
        date: data.date || '',
        eventDate: data.eventDate || '',
        type: data.type || 'event',
        importance: data.importance || 'medium',
      } as EventItem;
    } else {
      return {
        slug,
        content,
        title: data.title || slug,
        date: data.date || '',
        week: data.week,
        category: data.category,
      } as ContentItem;
    }
  } catch {
    return null;
  }
}