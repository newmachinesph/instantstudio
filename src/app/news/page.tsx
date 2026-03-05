import { getArticles } from '@/data/articles';
import NewsPageContent from './NewsPageContent';

export default function NewsPage() {
    const articles = getArticles();
    return <NewsPageContent articles={articles} />;
}
