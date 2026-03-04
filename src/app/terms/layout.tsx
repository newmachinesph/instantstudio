import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions',
    description: 'InstantStudio Terms and Conditions — rules governing the use of our AI-powered creative services.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
