'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowRight, LayoutDashboard, Shield, CreditCard,
    Palette, Settings2, CheckCircle2, Sparkles,
} from 'lucide-react';

const models = [
    { name: 'Aimelie', text: 'Be local, globally. Design models for different markets. We\'ll make them come to life for your campaign.' },
    { name: 'Edda Hasmi', text: 'Once a model is designed and approved clients can generate images using the InstantStudio Toolkit \u2013 our content generation engine.' },
    { name: 'Jin Kim', text: 'You can also commission our experienced AI artists to create images for your campaigns.' },
    { name: 'Ting He', text: 'Advanced Workflows' },
];

const futureFeatures = [
    { icon: <LayoutDashboard style={{ width: '1.25rem', height: '1.25rem' }} />, text: 'Integrated Dashboard for your team that stores your generated images.' },
    { icon: <Shield style={{ width: '1.25rem', height: '1.25rem' }} />, text: 'Private and secure \u2013 you keep all your data and images.' },
    { icon: <CreditCard style={{ width: '1.25rem', height: '1.25rem' }} />, text: 'Credit based system with simple billing.' },
    { icon: <Palette style={{ width: '1.25rem', height: '1.25rem' }} />, text: 'Customized image models to meet your brand requirements.' },
    { icon: <Settings2 style={{ width: '1.25rem', height: '1.25rem' }} />, text: 'Workflows can be customized to fit your production needs.' },
];

export default function IconiqPage() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}>

            {/* ─── Hero ─── */}
            <section style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'var(--bg-darker)', position: 'relative', overflow: 'hidden' }}>
                <div className="page-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
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
                            ICONIQ
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
                            maxWidth: '48rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        Enhancing{' '}
                        <span style={{ color: 'var(--accent-orange)' }}>Creativity</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                            maxWidth: '40rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '1rem',
                        }}
                    >
                        InstantStudio harnesses generative AI to boost human creativity. We empower artists to innovate, to apply their creativity commercially, and to thrive.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        style={{
                            fontSize: '1rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.7,
                            maxWidth: '38rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '2.5rem',
                        }}
                    >
                        By providing cutting-edge tools that simplify complex technical processes, we create new opportunities for innovators to produce unique and impactful work.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Book a Demo Now <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                        </Link>
                    </motion.div>
                </div>

                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'min(700px, 120vw)', height: 'min(700px, 120vw)',
                    background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                    borderRadius: '50%', filter: 'blur(160px)', opacity: 0.06, pointerEvents: 'none',
                }} />
            </section>

            {/* ─── Book Digital Talent ─── */}
            <section style={{ padding: '5rem 0' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '52rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: '1.25rem',
                            }}
                        >
                            Book Digital Talent
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            Introducing the first fully AI enabled model agency &ndash; ICONIQ by InstantStudio. Hire digital personas that can be created to client specifications and used to create brand appropriate marketing assets.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── AI Models ─── */}
            <section style={{ padding: '2rem 0 5rem' }}>
                <div className="page-container">
                    <div className="iconiq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                        {models.map((model, i) => (
                            <motion.div
                                key={model.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
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
                                    width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                    background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                                }}>
                                    <Sparkles style={{ width: '1.25rem', height: '1.25rem' }} />
                                </div>
                                <h3 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    IconIQ AI Model {model.name}
                                </h3>
                                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                    {model.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Automate Influencer Marketing ─── */}
            <section style={{ padding: '5rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '52rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: '1.25rem',
                            }}
                        >
                            Automate Influencer Marketing
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}
                        >
                            Produce content much more quickly and replace models for different markets.
                        </motion.p>

                        <div className="iconiq-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    padding: '2rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'center',
                                }}
                            >
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.75rem', letterSpacing: '0.03em' }}>
                                    Original Product Photo + ICONIQ Model
                                </p>
                                <div style={{
                                    height: '12rem', borderRadius: '1rem',
                                    background: 'linear-gradient(135deg, rgba(14,76,73,0.15), rgba(244,120,77,0.10))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: '1px dashed var(--glass-border)',
                                }}>
                                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Image placeholder</span>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    padding: '2rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'center',
                                }}
                            >
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.75rem', letterSpacing: '0.03em' }}>
                                    New Product Photo
                                </p>
                                <div style={{
                                    height: '12rem', borderRadius: '1rem',
                                    background: 'linear-gradient(135deg, rgba(244,120,77,0.10), rgba(14,76,73,0.15))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: '1px dashed var(--glass-border)',
                                }}>
                                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Image placeholder</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Automate Product Placement ─── */}
            <section style={{ padding: '5rem 0' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '52rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: '1.25rem',
                            }}
                        >
                            Automate Product Placement
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            Start with simple product photography and create multiple versions with different subjects.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── ICONIQ is the Future ─── */}
            <section style={{ padding: '5rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '3rem' }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: '1rem',
                            }}>
                                <span style={{
                                    background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    ICONIQ
                                </span>{' '}
                                is the future
                            </h2>
                            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                InstantStudio is an image generation platform designed for work.
                            </p>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                            {futureFeatures.map((feat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    viewport={{ once: true }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        padding: '1.25rem 1.5rem',
                                        borderRadius: '1rem',
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--glass-border)',
                                    }}
                                >
                                    <div style={{
                                        minWidth: '2.5rem', height: '2.5rem', borderRadius: '0.625rem',
                                        background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                                    }}>
                                        {feat.icon}
                                    </div>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, paddingTop: '0.375rem' }}>
                                        {feat.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Book a Demo Now <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) {
                    .iconiq-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 640px) {
                    .iconiq-grid { grid-template-columns: 1fr !important; }
                    .iconiq-grid-2 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
}
