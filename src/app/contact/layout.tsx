import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with InstantStudio. Reach out for AI-powered creative solutions, partnerships, and consultations.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
