import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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