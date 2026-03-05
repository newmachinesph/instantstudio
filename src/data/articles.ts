import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Article {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    content: string;
}

const newsDirectory = path.join(process.cwd(), 'content/news');

export function getArticles(): Article[] {
    const filenames = fs.readdirSync(newsDirectory);
    const articles = filenames
        .filter((name) => name.endsWith('.md'))
        .map((filename) => {
            const slug = filename.replace(/\.md$/, '');
            const filePath = path.join(newsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                excerpt: data.excerpt,
                image: data.image || 'https://placehold.co/800x400/1a1a2e/00d4aa?text=InstantStudio',
                content,
            };
        });

    // Sort by date descending
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
    const filePath = path.join(newsDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) return undefined;

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        image: data.image || 'https://placehold.co/800x400/1a1a2e/00d4aa?text=InstantStudio',
        content,
    };
}
