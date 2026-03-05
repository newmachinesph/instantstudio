'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Article } from '@/data/articles';

export default function NewsPageContent({ articles }: { articles: Article[] }) {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}>
            {/* Hero */}
            <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'var(--bg-darker)', position: 'relative', overflow: 'hidden' }}>
                <div className="page-container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                display: 'inline-block',
                                padding: '0.375rem 1.25rem',
                                borderRadius: '9999px',
                                border: '1px solid var(--glass-border)',
                                background: 'var(--glass-bg)',
                                marginBottom: '1.5rem',
                            }}
                        >
                            <span style={{
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '0.05em',
                            }}>
                                INSIGHTS & UPDATES
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.03em',
                                lineHeight: 1.1,
                                marginBottom: '1.5rem',
                            }}
                        >
                            News &{' '}
                            <span style={{ color: 'var(--accent-orange)' }}>Insights</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7,
                            }}
                        >
                            Stories, case studies, and insights from the world of AI-powered creativity.
                        </motion.p>
                    </div>
                </div>

                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'min(600px, 100vw)', height: 'min(600px, 100vw)',
                    background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                    borderRadius: '50%', filter: 'blur(150px)', opacity: 0.06, pointerEvents: 'none',
                }} />
            </section>

            {/* Article Grid */}
            <section style={{ padding: '4rem 0 6rem' }}>
                <div className="page-container">
                    <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {articles.map((article, i) => (
                            <motion.div
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/news/${article.slug}`}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        borderRadius: '1.5rem',
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--glass-border)',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        overflow: 'hidden',
                                    }}
                                    className="news-card"
                                >
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '200px',
                                        overflow: 'hidden',
                                    }}>
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            unoptimized
                                        />
                                    </div>

                                    <div style={{ padding: '1.5rem 2rem 2rem' }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '1rem',
                                            color: 'var(--text-muted)',
                                            fontSize: '0.8125rem',
                                        }}>
                                            <Calendar style={{ width: '0.875rem', height: '0.875rem' }} />
                                            {article.date}
                                        </div>

                                        <h2 style={{
                                            fontSize: '1.375rem',
                                            fontWeight: 700,
                                            lineHeight: 1.3,
                                            marginBottom: '1rem',
                                            letterSpacing: '-0.01em',
                                            color: 'var(--text-primary)',
                                        }}>
                                            {article.title}
                                        </h2>

                                        <p style={{
                                            fontSize: '0.9375rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.6,
                                            flex: 1,
                                            marginBottom: '1.5rem',
                                        }}>
                                            {article.excerpt}
                                        </p>

                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.375rem',
                                            fontSize: '0.875rem',
                                            fontWeight: 600,
                                            color: 'var(--primary-teal)',
                                        }}>
                                            Read more
                                            <ArrowRight style={{ width: '0.875rem', height: '0.875rem' }} />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .news-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px -12px rgba(0,0,0,0.08);
                }
                @media (max-width: 1024px) {
                    .news-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 640px) {
                    .news-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
}
