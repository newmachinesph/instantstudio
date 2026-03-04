import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Selfie Cards',
    description: 'Elevate your brand with AI-powered festive magic. Create personalized AI selfie cards for holidays, events, and campaigns.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
