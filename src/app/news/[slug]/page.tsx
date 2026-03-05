import { notFound } from 'next/navigation';
import { getArticles, getArticleBySlug } from '@/data/articles';
import ArticleContent from './ArticleContent';

export function generateStaticParams() {
    return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) return {};
    return {
        title: `${article.title} | InstantStudio`,
        description: article.excerpt,
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) notFound();

    return <ArticleContent article={article} />;
}
