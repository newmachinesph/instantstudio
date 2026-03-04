import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IS Toolkit',
    description: 'Innovate with generative AI tools. Transform customer experiences with InstantStudio\'s advanced AI-driven visual solutions.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
