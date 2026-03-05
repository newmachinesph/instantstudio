'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight, Shirt, Camera, Users, Zap,
    CheckCircle2, Palette, Video, ImagePlus,
} from 'lucide-react';

const processSteps = [
    'You choose the model, pose, and setting (urban, studio, outdoors, etc.)',
    'We dress the model with your garments, set the scene and generate images (photos and/or videos).',
    'You select shots from our digital contact sheet.',
    'You settle the bill or buy volume credits.',
    'We deliver high resolutions images (photos / videos)',
    'You publish on any channel, without license limitations.',
];

export default function FastFashionPage() {
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
                            FAST FASHION
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
                        InstantStudio{' '}
                        <span style={{ color: 'var(--accent-orange)' }}>Fast Fashion</span> AI
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                            maxWidth: '42rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Design custom fashion styles in seconds with InstantStudio Toolkit. Empowering fashion brands, retailers, models, influencers, and e-commerce platforms to instantly showcase unique colors, designs, and styles tailored to their vision.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Book a Consultation <ArrowRight style={{ width: '1rem', height: '1rem' }} />
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

            {/* ─── Fast Fashion Fotoshoots ─── */}
            <section style={{ padding: '5rem 0' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '52rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: '1.5rem',
                                textAlign: 'center',
                            }}
                        >
                            Fast Fashion Fotoshoots
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: 'var(--accent-orange)',
                                textAlign: 'center',
                                marginBottom: '2rem',
                            }}
                        >
                            Wave goodbye to old fashioned photoshoots!
                        </motion.p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
                            {[
                                'Hire Instant Studio to rapidly generate professional photos at scale, using the latest Generative AI technologies.',
                                'Showcase your fashion products on virtual models, choosing from a limitless range of looks, ethnicities, body shapes and ages.',
                                'We follow your vision and creative direction, applying our AI expertise to bring it to life.',
                            ].map((text, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{
                                textAlign: 'center',
                                marginTop: '2rem',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Publish faster. Sell quicker. Save bigger.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── Transformation Showcase ─── */}
            <section style={{ padding: '5rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        {/* Shirt example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="ff-showcase-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                                <div style={{
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{
                                        width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                        background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem',
                                    }}>
                                        <Shirt style={{ width: '1.25rem', height: '1.25rem' }} />
                                    </div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>From this real shirt</p>
                                    <div style={{ height: '10rem', borderRadius: '1rem', overflow: 'hidden', position: 'relative' }}>
                                        <Image src="https://placehold.co/400x280/1a1a2e/00d4aa?text=Real+Shirt" alt="Real shirt" fill style={{ objectFit: 'cover' }} unoptimized />
                                    </div>
                                </div>
                                <div style={{
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{
                                        width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                        background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem',
                                    }}>
                                        <Camera style={{ width: '1.25rem', height: '1.25rem' }} />
                                    </div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>To this AI photoshoot</p>
                                    <div style={{ height: '10rem', borderRadius: '1rem', overflow: 'hidden', position: 'relative' }}>
                                        <Image src="https://placehold.co/400x280/1a1a2e/ff6b35?text=AI+Photoshoot" alt="AI photoshoot" fill style={{ objectFit: 'cover' }} unoptimized />
                                    </div>
                                </div>
                                <div style={{
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{
                                        width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                        background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem',
                                    }}>
                                        <Video style={{ width: '1.25rem', height: '1.25rem' }} />
                                    </div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>To this AI video!</p>
                                    <div style={{ height: '10rem', borderRadius: '1rem', overflow: 'hidden', position: 'relative' }}>
                                        <Image src="https://placehold.co/400x280/1a1a2e/4ecdc4?text=AI+Video" alt="AI video" fill style={{ objectFit: 'cover' }} unoptimized />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Dress example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="ff-showcase-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '38rem', marginLeft: 'auto', marginRight: 'auto' }}>
                                <div style={{
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{
                                        width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                        background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem',
                                    }}>
                                        <Palette style={{ width: '1.25rem', height: '1.25rem' }} />
                                    </div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>From this real dress</p>
                                    <div style={{ height: '10rem', borderRadius: '1rem', overflow: 'hidden', position: 'relative' }}>
                                        <Image src="https://placehold.co/400x280/1a1a2e/e8a0bf?text=Real+Dress" alt="Real dress" fill style={{ objectFit: 'cover' }} unoptimized />
                                    </div>
                                </div>
                                <div style={{
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'center',
                                }}>
                                    <div style={{
                                        width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                        background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem',
                                    }}>
                                        <ImagePlus style={{ width: '1.25rem', height: '1.25rem' }} />
                                    </div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>To this AI photoshoot</p>
                                    <div style={{ height: '10rem', borderRadius: '1rem', overflow: 'hidden', position: 'relative' }}>
                                        <Image src="https://placehold.co/400x280/1a1a2e/ff6b35?text=AI+Dress+Photoshoot" alt="AI dress photoshoot" fill style={{ objectFit: 'cover' }} unoptimized />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Choose Your Models ─── */}
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
                            Choose your models
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            Choose from a wide range of models, multiple ethnicities, body shapes and ages.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── Order Process ─── */}
            <section style={{ padding: '5rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                textAlign: 'center',
                                marginBottom: '1rem',
                            }}
                        >
                            Order Fast Fashion Fotoshoots
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{
                                textAlign: 'center',
                                fontSize: '1.0625rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: '2.5rem',
                            }}
                        >
                            We operate as an AI model agency &amp; photo studio. The image generation process is fast and simple:
                        </motion.p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {processSteps.map((step, i) => (
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
                                        minWidth: '2rem', height: '2rem', borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', fontSize: '0.8125rem', fontWeight: 700,
                                    }}>
                                        {i + 1}
                                    </div>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, paddingTop: '0.25rem' }}>
                                        {step}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Book a Consultation CTA ─── */}
            <section style={{ padding: '5rem 0' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
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
                            Book a Consultation
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}
                        >
                            We are happy to set up a call to better understand your needs and demonstrate the wonders of our Generative AI technology, custom-designed to create hyper-real fashion fotoshoots. Please tell us more about you and what you&apos;re looking for below. We respond rapidly!
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Get in Touch <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) {
                    .ff-showcase-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 640px) {
                    .ff-showcase-grid { grid-template-columns: 1fr !important; }
                    .ff-showcase-2 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
}
