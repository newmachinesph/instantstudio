import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fast Fashion',
    description: 'Design custom fashion styles in seconds with InstantStudio. AI-powered fotoshoots for fashion brands, retailers, and e-commerce.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
