import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'News & Insights',
    description: 'Stories, case studies, and insights from the world of AI-powered creativity at InstantStudio.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
