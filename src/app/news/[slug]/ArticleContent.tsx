'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Article } from '@/data/articles';

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

            {/* Featured Image */}
            <section style={{ padding: '0' }}>
                <div className="page-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            maxWidth: '48rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '2rem',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            position: 'relative',
                            height: '300px',
                        }}
                    >
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            unoptimized
                        />
                    </motion.div>
                </div>
            </section>

            {/* Article Body */}
            <section style={{ padding: '3rem 0 6rem' }}>
                <div className="page-container">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="article-markdown"
                        style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}
                    >
                        <ReactMarkdown
                            components={{
                                h2: ({ children }) => (
                                    <h2 style={{
                                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                        fontWeight: 700,
                                        marginTop: '2.5rem',
                                        marginBottom: '1rem',
                                        color: 'var(--text-primary)',
                                        letterSpacing: '-0.02em',
                                        lineHeight: 1.2,
                                    }}>
                                        {children}
                                    </h2>
                                ),
                                h3: ({ children }) => (
                                    <h3 style={{
                                        fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                                        fontWeight: 700,
                                        marginTop: '2rem',
                                        marginBottom: '0.75rem',
                                        color: 'var(--text-primary)',
                                        letterSpacing: '-0.01em',
                                        lineHeight: 1.3,
                                    }}>
                                        {children}
                                    </h3>
                                ),
                                p: ({ children }) => (
                                    <p style={{
                                        fontSize: '1.0625rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.8,
                                        marginBottom: '1.25rem',
                                    }}>
                                        {children}
                                    </p>
                                ),
                                ul: ({ children }) => (
                                    <ul style={{
                                        marginBottom: '1.25rem',
                                        paddingLeft: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem',
                                    }}>
                                        {children}
                                    </ul>
                                ),
                                li: ({ children }) => (
                                    <li style={{
                                        fontSize: '1.0625rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.7,
                                    }}>
                                        {children}
                                    </li>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote style={{
                                        margin: '2rem 0',
                                        padding: '1.5rem 2rem',
                                        borderLeft: '4px solid var(--primary-teal)',
                                        background: 'var(--bg-darker)',
                                        borderRadius: '0 1rem 1rem 0',
                                    }}>
                                        {children}
                                    </blockquote>
                                ),
                                img: ({ src, alt }) => typeof src !== 'string' ? null : (
                                    <span style={{
                                        display: 'block',
                                        position: 'relative',
                                        width: '100%',
                                        height: '300px',
                                        margin: '2rem 0',
                                        borderRadius: '1rem',
                                        overflow: 'hidden',
                                    }}>
                                        <Image
                                            src={src || ''}
                                            alt={alt || ''}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            unoptimized
                                        />
                                    </span>
                                ),
                                strong: ({ children }) => (
                                    <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                                        {children}
                                    </strong>
                                ),
                                a: ({ href, children }) => (
                                    <a href={href} style={{
                                        color: 'var(--primary-teal)',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '2px',
                                    }}>
                                        {children}
                                    </a>
                                ),
                            }}
                        >
                            {article.content}
                        </ReactMarkdown>
                    </motion.article>
                </div>
            </section>
        </main>
    );
}
