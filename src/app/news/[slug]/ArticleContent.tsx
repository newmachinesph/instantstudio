'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import type { Article, ArticleBlock } from '@/data/articles';

function renderBlock(block: ArticleBlock, index: number) {
    switch (block.type) {
        case 'heading':
            return (
                <h2 key={index} style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                    marginTop: '2.5rem',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                }}>
                    {block.text}
                </h2>
            );
        case 'paragraph':
            return (
                <p key={index} style={{
                    fontSize: '1.0625rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    marginBottom: '1.25rem',
                }}>
                    {block.text}
                </p>
            );
        case 'list':
            return (
                <ul key={index} style={{
                    marginBottom: '1.25rem',
                    paddingLeft: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                }}>
                    {block.items.map((item, i) => (
                        <li key={i} style={{
                            fontSize: '1.0625rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                        }}>
                            {item}
                        </li>
                    ))}
                </ul>
            );
        case 'quote':
            return (
                <blockquote key={index} style={{
                    margin: '2rem 0',
                    padding: '1.5rem 2rem',
                    borderLeft: '4px solid var(--primary-teal)',
                    background: 'var(--bg-darker)',
                    borderRadius: '0 1rem 1rem 0',
                }}>
                    <p style={{
                        fontSize: '1.125rem',
                        fontStyle: 'italic',
                        color: 'var(--text-primary)',
                        lineHeight: 1.7,
                        marginBottom: block.attribution ? '0.75rem' : 0,
                    }}>
                        &ldquo;{block.text}&rdquo;
                    </p>
                    {block.attribution && (
                        <cite style={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: 'var(--text-muted)',
                            fontStyle: 'normal',
                        }}>
                            — {block.attribution}
                        </cite>
                    )}
                </blockquote>
            );
    }
}

export default function ArticleContent({ article }: { article: Article }) {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}>
            {/* Hero */}
            <section style={{
                paddingTop: '8rem',
                paddingBottom: '3rem',
                background: 'var(--bg-darker)',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div className="page-container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}
                    >
                        <Link href="/news" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: 'var(--primary-teal)',
                            textDecoration: 'none',
                            marginBottom: '2rem',
                        }}>
                            <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
                            Back to News
                        </Link>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.25rem',
                            color: 'var(--text-muted)',
                            fontSize: '0.875rem',
                        }}>
                            <Calendar style={{ width: '0.875rem', height: '0.875rem' }} />
                            {article.date}
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.15,
                        }}>
                            {article.title}
                        </h1>
                    </motion.div>
                </div>

                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'min(600px, 100vw)', height: 'min(600px, 100vw)',
                    background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                    borderRadius: '50%', filter: 'blur(150px)', opacity: 0.05, pointerEvents: 'none',
                }} />
            </section>

            {/* Article Body */}
            <section style={{ padding: '3rem 0 6rem' }}>
                <div className="page-container">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}
                    >
                        {article.content.map((block, i) => renderBlock(block, i))}
                    </motion.article>
                </div>
            </section>
        </main>
    );
}
