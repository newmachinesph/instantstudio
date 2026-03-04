'use client';

import { motion } from 'framer-motion';
const TOOLKIT_URL = 'https://toolkit.instantstudio.ai/';
import {
    Sparkles, Gamepad2, Palette, CalendarHeart, Users,
    Cpu, Handshake, BrainCircuit, Layout, PenTool, Blocks, ArrowRight,
    CheckCircle2, ImagePlus,
} from 'lucide-react';

const gamingCards = [
    { text: 'Create stunning cyberpunk-style avatars from photos for a futuristic look.', icon: <Sparkles style={{ width: '1.25rem', height: '1.25rem' }} /> },
    { text: 'Craft any photo into a fun, cartoon-style game character portraits.', icon: <Gamepad2 style={{ width: '1.25rem', height: '1.25rem' }} /> },
    { text: 'Create stunning cyberpunk-style avatars from photos for a futuristic look.', icon: <Palette style={{ width: '1.25rem', height: '1.25rem' }} /> },
    { text: 'Craft any photo into a fun, cartoon-style game character portraits.', icon: <ImagePlus style={{ width: '1.25rem', height: '1.25rem' }} /> },
];

const customCreateSteps = [
    'You provide 20-50 source images and brand guidelines',
    'We carefully review and caption the images',
    'We run sophisticated training on our GPU cloud',
    'You generate new on-brand images via InstantStudio\'s online dashboard',
    'You Wow! your customers',
    'We provide ongoing training and expert guidance',
];

const seasonalCards = [
    'Generate beautiful seasonal Headshots for every occassion.',
    'Generate beautiful seasonal Headshots for every occassion.',
    'Generate beautiful seasonal Headshots for every occassion.',
];

const businessFeatures = [
    {
        icon: <BrainCircuit style={{ width: '1.5rem', height: '1.5rem' }} />,
        title: 'Generative AI Mastery',
        subtitle: 'Navigate the complexities of AIGC and gain a competitive edge.',
        text: 'Let your business take advantage from Generative AI Solutions.',
    },
    {
        icon: <Cpu style={{ width: '1.5rem', height: '1.5rem' }} />,
        title: 'State-of-the-Art: Stable Diffusion',
        subtitle: 'Adopt the leading open-source image generator for unparalleled results.',
        text: 'Leverage state-of-the-art AI for your business right now.',
    },
    {
        icon: <Handshake style={{ width: '1.5rem', height: '1.5rem' }} />,
        title: 'Expert Partnership',
        subtitle: 'With 15+ years of experiences, we provide holistic solutions.',
        text: 'We are not just a cloud API, we deliver great value.',
    },
];

const brandFeatures = [
    { icon: <Layout style={{ width: '1.25rem', height: '1.25rem' }} />, title: 'Branding Flexibility', text: 'Customize the app with your domain, logo, colors and branding.' },
    { icon: <PenTool style={{ width: '1.25rem', height: '1.25rem' }} />, title: 'Customizable Interface', text: 'Design the interface to reflect your brand\'s unique style.' },
    { icon: <Users style={{ width: '1.25rem', height: '1.25rem' }} />, title: 'Personalized Content', text: 'Modify content to connect with your audience.' },
    { icon: <Blocks style={{ width: '1.25rem', height: '1.25rem' }} />, title: 'Scalable Integration', text: 'Easily integrate with your existing services.' },
];

const pricingTiers = [
    {
        name: 'Toolkit',
        features: [
            'Monthly cost based on support level',
            'Usage charged via credit system',
            'Customization and integration possible',
        ],
    },
    {
        name: 'Campaigns',
        features: [
            'Platform fee',
            'Implementation quoted based on brief',
            'Usage charged via credit system',
        ],
    },
    {
        name: 'APIs',
        features: [
            'Platform fee',
            'Customized APIs available',
            'Usage charged via credit system',
        ],
    },
];

export default function ToolkitPage() {
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
                            IS TOOLKIT
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
                        Innovate with{' '}
                        <span style={{ color: 'var(--accent-orange)' }}>Generative AI</span> Tools
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            maxWidth: '36rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Transform customer experiences with our advanced AI-Driven Visual Solutions.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <a href={TOOLKIT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Get Started <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                        </a>
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

            {/* ─── Creative Personas ─── */}
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
                            Creative Personas
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.75rem' }}
                        >
                            Generate unique characters and personas to enhance personalization.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}
                        >
                            With a wide selection of design styles and themes to choose from, you can create the perfect personas that you need for your brands, products, and projects.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── Gaming & Entertainment ─── */}
            <section style={{ padding: '2rem 0 5rem' }}>
                <div className="page-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            textAlign: 'center',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Transform Gaming and Entertainment
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
                            maxWidth: '40rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Leverage AI to generate unique avatars and characters for your applications or social profiles.
                    </motion.p>

                    <div className="toolkit-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                        {gamingCards.map((card, i) => (
                            <motion.div
                                key={i}
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
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '1rem',
                                }}
                            >
                                <div style={{
                                    width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                    background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                                }}>
                                    {card.icon}
                                </div>
                                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── How Custom Create Works ─── */}
            <section style={{ padding: '5rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
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
                        How Custom Create Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{
                            textAlign: 'center',
                            fontSize: '1rem',
                            color: 'var(--text-muted)',
                            marginBottom: '3rem',
                        }}
                    >
                        From the source art assets … to the sample outputs.
                    </motion.p>

                    <div style={{ maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {customCreateSteps.map((step, i) => (
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
            </section>

            {/* ─── Seasonal & Event Imagery ─── */}
            <section style={{ padding: '5rem 0' }}>
                <div className="page-container">
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
                        Seasonal and Event Imagery
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
                            maxWidth: '40rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Elevate your events and seasonal celebrations with AI-generated images that capture the perfect moment, every time.
                    </motion.p>

                    <div className="toolkit-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {seasonalCards.map((text, i) => (
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
                                    textAlign: 'center',
                                }}
                            >
                                <div style={{
                                    width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                    background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#fff', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.25rem',
                                }}>
                                    <CalendarHeart style={{ width: '1.25rem', height: '1.25rem' }} />
                                </div>
                                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                    {text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Brand Influencers ─── */}
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
                            Build Brand Influencers
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.75rem' }}
                        >
                            Use text prompts to create professional photo quality influencer content.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}
                        >
                            Run Campaigns with purpose-built, fully digital personas at a fraction of the cost.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── Corporate Events ─── */}
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
                            Elevate your Corporate Events with AI Magic
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            Turn your next corporate event into a memorable experience with AI-generated custom portraits. Spark conversations, foster company pride, and create lasting memories with personalized headshots.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── Revolutionize Your Business ─── */}
            <section style={{ padding: '5rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            textAlign: 'center',
                            marginBottom: '1rem',
                        }}
                    >
                        Revolutionize your Business with AI tools
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
                            maxWidth: '40rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '3rem',
                        }}
                    >
                        Achieve more with our cutting-edge generative AI imaging software
                    </motion.p>

                    <div className="toolkit-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {businessFeatures.map((feat, i) => (
                            <motion.div
                                key={feat.title}
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
                                    width: '3rem', height: '3rem', borderRadius: '0.75rem',
                                    background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#fff', marginBottom: '1.25rem',
                                }}>
                                    {feat.icon}
                                </div>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                    {feat.title}
                                </h3>
                                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                                    {feat.subtitle}
                                </p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                    {feat.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{
                            textAlign: 'center',
                            fontSize: '1rem',
                            color: 'var(--text-muted)',
                            marginTop: '2.5rem',
                            fontStyle: 'italic',
                        }}
                    >
                        Crafting Solutions worldwide since 2008. For over 15 years, we&apos;ve specialized in creating innovative software that solves complex problems for clients globally.
                    </motion.p>
                </div>
            </section>

            {/* ─── Launch & Excel ─── */}
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
                            Launch and Excel with Gen AI Solutions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.75rem' }}
                        >
                            Leverage your enterprise solutions with our tailored Generative AI, designed to enhance efficiency and foster innovation. Stay competitive and thrive in today&apos;s dynamic market.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}
                        >
                            Experience the future of business with Gen AI. Partner with us to explore endless possibilities and reach new heights.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <a href={TOOLKIT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Request a demo today <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Innovate Your Brand ─── */}
            <section style={{ padding: '5rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
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
                        Innovate Your Brand with our AI Solutions
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
                            maxWidth: '42rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '3rem',
                        }}
                    >
                        Maximize your business potential with our versatile Gen AI app. Embed our technology into your services and dive into the latest AI photo trends. Work with us to bring your ideas to life.
                    </motion.p>

                    <div className="toolkit-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                        {brandFeatures.map((feat, i) => (
                            <motion.div
                                key={feat.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    padding: '1.75rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                }}
                            >
                                <div style={{
                                    width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem',
                                    background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#fff', marginBottom: '1rem',
                                }}>
                                    {feat.icon}
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                    {feat.title}
                                </h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                    {feat.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── We Engineer Success ─── */}
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
                            We Engineer Success and Partner with Creatives
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            Our expertise transforms ideas into reality, creating innovative solutions alongside our creative partners.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── Pricing ─── */}
            <section id="pricing" style={{ padding: '5rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            textAlign: 'center',
                            marginBottom: '3rem',
                        }}
                    >
                        Potential of Generative AI
                    </motion.h2>

                    <div className="toolkit-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                        {pricingTiers.map((tier, i) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    padding: '2.5rem 2rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    marginBottom: '2rem',
                                    color: 'var(--text-primary)',
                                    background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    {tier.name}
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {tier.features.map((feat, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                            <CheckCircle2 style={{ width: '1.125rem', height: '1.125rem', color: 'var(--primary-teal)', flexShrink: 0, marginTop: '0.125rem' }} />
                                            <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                                {feat}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <a href={TOOLKIT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Request a Quote <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) {
                    .toolkit-grid-4 { grid-template-columns: 1fr 1fr !important; }
                    .toolkit-grid-3 { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 640px) {
                    .toolkit-grid-4 { grid-template-columns: 1fr !important; }
                    .toolkit-grid-3 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
}
