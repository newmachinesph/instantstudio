'use client';

import { motion } from 'framer-motion';

const videos = [
    { id: 'qB3fvYSTJMc', market: 'Hong Kong', ambassador: 'Sammy Leung', flag: '🇭🇰' },
    { id: 't4vACfj6Ov4', market: 'Philippines', ambassador: 'Sarah Geronimo', flag: '🇵🇭' },
    { id: '6ipiSAMxK80', market: 'Indonesia', ambassador: 'Abimana Aryasatya', flag: '🇮🇩' },
    { id: 'WQ8TmIjsers', market: 'Malaysia', ambassador: 'Alif Satar', flag: '🇲🇾' },
];

const VideoShowcase = () => {
    return (
        <section id="ambassadors" style={{ padding: '6rem 0', background: 'var(--bg-dark)' }}>
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
                            FOUR MARKETS · FOUR AMBASSADORS
                        </span>
                    </motion.div>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                    }}>
                        AI-Personalized{' '}
                        <span style={{ color: 'var(--accent-orange)' }}>3D eCards</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '42rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.6,
                    }}>
                        Celebrity ambassadors across Southeast Asia, each delivering personalized
                        New Year greetings fused with agent content via AI.
                    </p>
                </div>

                {/* Video Grid — 4 side by side */}
                <div
                    className="video-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1.25rem',
                    }}
                >
                    {videos.map((video, i) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            style={{
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                paddingBottom: '177.78%',
                            }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={`${video.market} — ${video.ambassador}`}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                    }}
                                />
                            </div>

                            <div style={{ padding: '1rem 1.25rem' }}>
                                <p style={{
                                    fontSize: '0.6875rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    color: 'var(--primary-teal)',
                                    marginBottom: '0.25rem',
                                }}>
                                    {video.flag} {video.market}
                                </p>
                                <h3 style={{
                                    fontSize: '0.9375rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                }}>
                                    {video.ambassador}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .video-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 640px) {
                    .video-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
                }
            `}</style>
        </section>
    );
};

export default VideoShowcase;
