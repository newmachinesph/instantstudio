'use client';

import { motion } from 'framer-motion';
import { Users, Cpu } from 'lucide-react';

const highlights = [
    {
        icon: <Users style={{ width: '1.5rem', height: '1.5rem' }} />,
        title: 'AI Team',
        text: 'Our diverse team of AI specialists, designers, and engineers collaborates to develop solutions that are both innovative and practical. Each member brings a unique perspective, ensuring our tools are versatile and user-friendly.',
    },
    {
        icon: <Cpu style={{ width: '1.5rem', height: '1.5rem' }} />,
        title: 'AI Technology',
        text: 'Leveraging the latest advancements in AI, we develop technologies that transform creative processes. Our tools are designed to be intuitive, allowing users to effortlessly create stunning visuals that make a lasting impact.',
    },
];

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}>
            {/* Hero */}
            <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'var(--bg-darker)', position: 'relative', overflow: 'hidden' }}>
                <div className="page-container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.03em',
                                lineHeight: 1.15,
                                marginBottom: '1.25rem',
                            }}
                        >
                            Our Innovative AI Company
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7,
                            }}
                        >
                            Pushing the Boundaries of AI: Building Tools for Impactful Visual Design
                        </motion.p>
                    </div>
                </div>
                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'min(600px, 100vw)', height: 'min(600px, 100vw)',
                    background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                    borderRadius: '50%', filter: 'blur(150px)', opacity: 0.05, pointerEvents: 'none',
                }} />
            </section>

            {/* Story */}
            <section style={{ padding: '4rem 0' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            At the heart of our company lies a team of passionate professionals dedicated to revolutionizing the way visual content is created. Our expertise spans across AI, design, and technology, converging to create tools that empower users to produce visually stunning and impactful designs.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            Our philosophy centers on the belief that AI should augment human creativity, not replace it. We strive to develop AI-driven tools that are accessible, intuitive, and capable of producing designs that resonate on a global scale.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            Our commitment to innovation drives us to continually push the boundaries of what&apos;s possible in AI-assisted design. We are not just a company; we are a community of forward-thinkers and creators, united by our passion for AI and its potential to transform the visual design landscape.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Team Environment */}
            <section style={{ padding: '2rem 0 4rem' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: '2rem',
                            }}
                        >
                            We take pride in a strong team environment
                        </motion.h2>

                        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        padding: '2rem',
                                        borderRadius: '1.5rem',
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--glass-border)',
                                    }}
                                >
                                    <div style={{
                                        width: '3rem',
                                        height: '3rem',
                                        borderRadius: '0.75rem',
                                        background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        marginBottom: '1.25rem',
                                    }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        marginBottom: '0.75rem',
                                        color: 'var(--text-primary)',
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.7,
                                    }}>
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 640px) {
                    .about-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
}
