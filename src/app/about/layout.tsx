import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about InstantStudio — our innovative AI company pushing the boundaries of AI to build tools for impactful visual design.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
