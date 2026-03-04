'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Globe, Users } from 'lucide-react';

const principles = [
    {
        icon: Shield,
        title: 'Agreed Boundaries',
        description: 'Clear parameters defined during pre-production for how AI can represent each celebrity ambassador across all markets.',
    },
    {
        icon: Eye,
        title: 'Cultural Representation',
        description: 'Localized standards ensuring every AI-generated greeting respects the cultural nuances of each Southeast Asian market.',
    },
    {
        icon: Globe,
        title: 'Ethical AI Fusion',
        description: 'Strict guidelines governing how generative AI blends celebrity and agent content — ensuring respectful representation at every step.',
    },
    {
        icon: Users,
        title: 'Agent Empowerment',
        description: 'A user-friendly platform designed so that every agent can participate — no technical expertise required, just a selfie and a voice recording.',
    },
];

const PhilosophySection = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg-dark)' }}>
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
                            RESPONSIBLE AI
                        </span>
                    </motion.div>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                    }}>
                        Built With{' '}
                        <span style={{ color: 'var(--accent-orange)' }}>Trust</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '42rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.6,
                    }}>
                        Every step of the campaign was designed with clear ethical guardrails —
                        from celebrity collaboration to final output delivery.
                    </p>
                </div>

                {/* Principles Grid */}
                <div
                    className="philosophy-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1.25rem',
                    }}
                >
                    {principles.map((principle, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                            }}
                        >
                            <div style={{
                                width: '3rem',
                                height: '3rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(14, 76, 73, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <principle.icon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--primary-teal)' }} />
                            </div>
                            <h3 style={{
                                fontSize: '1.125rem',
                                fontWeight: 700,
                                color: 'var(--text-primary)',
                            }}>
                                {principle.title}
                            </h3>
                            <p style={{
                                fontSize: '0.9375rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                            }}>
                                {principle.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .philosophy-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 640px) {
                    .philosophy-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default PhilosophySection;
