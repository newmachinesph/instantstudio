'use client';

import { motion } from 'framer-motion';
import { Users, Image, Video, Download, Share2 } from 'lucide-react';

const stats = [
    { icon: Users, value: '27,547', label: 'Agents Reached', color: '#0e4c49' },
    { icon: Image, value: '22,206', label: 'Selfie eCards Generated', color: '#1a6b67' },
    { icon: Video, value: '5,561', label: 'AI-Personalized Videos', color: '#f4784d' },
    { icon: Download, value: '85%', label: 'Download Rate', color: '#d55a30' },
    { icon: Share2, value: '54%', label: 'Share Rate', color: '#0e4c49' },
];

const CampaignResults = () => {
    return (
        <section id="results" style={{ padding: '6rem 0', background: 'var(--bg-darker)' }}>
            <div className="page-container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
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
                            CAMPAIGN RESULTS
                        </span>
                    </motion.div>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                    }}>
                        The Numbers{' '}
                        <span style={{ color: 'var(--accent-orange)' }}>Speak</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '42rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.6,
                    }}>
                        Four markets collectively delivered exceptional engagement across Southeast Asia.
                    </p>
                </div>

                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }} className="results-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem 1.5rem',
                                borderRadius: '1.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            <div style={{
                                width: '3.5rem',
                                height: '3.5rem',
                                borderRadius: '1rem',
                                background: `${stat.color}10`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <stat.icon style={{ width: '1.75rem', height: '1.75rem', color: stat.color }} />
                            </div>

                            <div style={{
                                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                                fontWeight: 800,
                                background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                lineHeight: 1,
                            }}>
                                {stat.value}
                            </div>
                            <p style={{
                                fontSize: '0.8125rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                            }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Production Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        borderRadius: '1.5rem',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--glass-border)',
                    }}
                >
                    <p style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                    }}>
                        Production Timeline — Under 2 Months
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }} className="timeline-row">
                        <div style={{
                            position: 'absolute',
                            top: '0.75rem',
                            left: '1rem',
                            right: '1rem',
                            height: '2px',
                            background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                            opacity: 0.3,
                        }} />
                        {[
                            'Celebrity Collaboration',
                            'Smart Input Design',
                            'Agent Empowerment',
                            'AI Fusion',
                            'Instant Output',
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    position: 'relative',
                                    zIndex: 1,
                                    flex: 1,
                                }}
                            >
                                <div style={{
                                    width: '1.5rem',
                                    height: '1.5rem',
                                    borderRadius: '50%',
                                    background: i < 3 ? 'var(--primary-teal)' : 'var(--accent-orange)',
                                    border: '3px solid var(--bg-card)',
                                }} />
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--text-secondary)',
                                    textAlign: 'center',
                                    lineHeight: 1.3,
                                }}>
                                    {step}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    <p style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        textAlign: 'center',
                        marginTop: '1.5rem',
                    }}>
                        Campaign Live: Dec 2025 — Jan 2026
                    </p>
                </motion.div>

                {/* Markets Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                    }}
                >
                    {['Hong Kong', 'Philippines', 'Indonesia', 'Malaysia'].map((market, i) => (
                        <div key={i} style={{
                            padding: '0.625rem 1.25rem',
                            borderRadius: '9999px',
                            border: '1px solid var(--glass-border)',
                            background: 'var(--bg-card)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                        }}>
                            {market}
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .results-grid { grid-template-columns: repeat(3, 1fr) !important; }
                    .timeline-row { flex-wrap: wrap !important; gap: 1rem !important; }
                }
                @media (max-width: 640px) {
                    .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </section>
    );
};

export default CampaignResults;
