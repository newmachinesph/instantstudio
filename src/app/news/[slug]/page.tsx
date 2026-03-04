import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import ArticleContent from './ArticleContent';

export function generateStaticParams() {
    return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return {};
    return {
        title: `${article.title} | InstantStudio`,
        description: article.excerpt,
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) notFound();

    return <ArticleContent article={article} />;
}
