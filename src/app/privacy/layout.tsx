import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'InstantStudio Privacy Policy — how we handle your personal data, images, and privacy.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
