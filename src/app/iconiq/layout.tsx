import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ICONIQ',
    description: 'ICONIQ by InstantStudio — the first fully AI-enabled model agency. Hire digital personas for your brand campaigns.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
