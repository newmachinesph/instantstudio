'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        order: "01",
        title: "CELEBRITY COLLABORATION",
        description: "Extensive pre-production defining acceptable AI persona parameters and cultural representation standards for each market.",
        color: "#0e4c49",
        image: "/images/1.jpg"
    },
    {
        order: "02",
        title: "SMART INPUT DESIGN",
        description: "Celebrities providing images and audio optimized for AI fusion, with agreed boundaries during AI video creation and personalized talking elements.",
        color: "#1a6b67",
        image: "/images/2.jpg"
    },
    {
        order: "03",
        title: "AGENT EMPOWERMENT",
        description: "User-friendly platform for 27,547 agents to easily upload selfies and voice recordings for personalization.",
        color: "#f4784d",
        image: "/images/3.jpg"
    },
    {
        order: "04",
        title: "AI FUSION",
        description: "Generative AI dynamically blended celebrity and agent content with strict ethical guidelines ensuring respectful representation.",
        color: "#d55a30",
        image: "/images/4.jpg"
    },
    {
        order: "05",
        title: "INSTANT OUTPUT",
        description: "Localized and personalized greetings delivered in minutes — ready for downloading or sharing across all four markets.",
        color: "#0e4c49",
        image: "/images/5.jpg"
    },
];

const ProcessSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, (progress) => {
        if (!scrollContainerRef.current) return 0;
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const range = totalWidth - viewportWidth;
        return -range * progress;
    });

    return (
        <section
            ref={sectionRef}
            id="process"
            style={{
                position: 'relative',
                height: '500vh',
                background: 'var(--bg-darker)',
                width: '100%',
            }}
        >
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    width: '100%',
                }}
            >
                <motion.div
                    ref={scrollContainerRef}
                    className="process-scroll-container"
                    style={{
                        x,
                        display: 'flex',
                        gap: '2rem',
                        paddingLeft: '3rem',
                        paddingRight: '3rem',
                        willChange: 'transform',
                    }}
                >
                    {/* Intro Card */}
                    <div
                        className="process-card process-intro-card"
                        style={{
                            flexShrink: 0,
                            display: 'flex',
                            height: '75vh',
                            width: '70vw',
                            maxWidth: '900px',
                            padding: '5rem',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '2rem',
                            borderRadius: '1.5rem',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(8rem, 20vw, 16rem)',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            color: 'var(--accent-orange)',
                            opacity: 0.1,
                            position: 'absolute',
                            bottom: '-2.5rem',
                            right: '-1rem',
                            userSelect: 'none',
                            lineHeight: 0.8,
                            pointerEvents: 'none',
                        }}>
                            AI
                        </h2>
                        <div style={{ maxWidth: '40rem', position: 'relative', zIndex: 10 }}>
                            <div style={{
                                display: 'inline-block',
                                padding: '0.375rem 1.25rem',
                                borderRadius: '9999px',
                                border: '1px solid var(--glass-border)',
                                background: 'var(--glass-bg)',
                                marginBottom: '1.5rem',
                            }}>
                                <span style={{
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    letterSpacing: '0.05em',
                                }}>
                                    HOW IT WORKS
                                </span>
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: 800,
                                marginBottom: '2rem',
                                letterSpacing: '-0.03em',
                                lineHeight: 1.1,
                            }}>
                                How AI Solution Brings This to Life
                            </h2>
                            <p style={{
                                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                                color: 'var(--text-secondary)',
                                fontWeight: 300,
                                lineHeight: 1.5,
                            }}>
                                From celebrity collaboration to instant personalized output —
                                five steps that powered the campaign. Scroll to explore.
                            </p>
                        </div>
                        <div style={{ position: 'absolute', top: '2.5rem', right: '2.5rem' }}>
                            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(-90deg)', color: 'var(--text-muted)' }}>
                                    <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>

                    {/* Step Cards */}
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="process-card process-step-card group"
                            style={{
                                flexShrink: 0,
                                display: 'flex',
                                height: '75vh',
                                width: '70vw',
                                maxWidth: '900px',
                                padding: '3rem',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                borderRadius: '1.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                                boxShadow: '0 20px 40px -12px rgba(0,0,0,0.08)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'transform 0.5s ease',
                                cursor: 'pointer',
                            }}
                        >
                            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                                    className="group-hover:scale-105 opacity-30 group-hover:opacity-40 transition-transform duration-1000 ease-out"
                                />
                                <div style={{ position: 'absolute', inset: 0, backgroundColor: step.color, mixBlendMode: 'multiply', opacity: 0.6 }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-card), transparent)' }} />
                            </div>

                            <div
                                className="opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                                style={{ position: 'absolute', inset: 0, backgroundColor: step.color, zIndex: 1 }}
                            />

                            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                                <span style={{
                                    fontSize: 'clamp(4rem, 8vw, 8rem)',
                                    fontWeight: 900,
                                    opacity: 0.8,
                                    position: 'relative',
                                    zIndex: 20,
                                    userSelect: 'none',
                                    color: '#FFFFFF',
                                    lineHeight: 1,
                                }}>
                                    {step.order}
                                </span>

                                <div style={{ marginTop: 'auto' }}>
                                    <h3 style={{
                                        fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                                        fontWeight: 700,
                                        marginBottom: '1rem',
                                        color: 'var(--text-primary)',
                                        lineHeight: 1.1,
                                    }}>
                                        {step.title}
                                    </h3>
                                    <p style={{
                                        fontSize: 'clamp(1rem, 1.5vw, 1.375rem)',
                                        color: 'var(--text-secondary)',
                                        fontWeight: 300,
                                        maxWidth: '32rem',
                                        lineHeight: 1.6,
                                    }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .process-card { width: 80vw !important; }
                    .process-intro-card { padding: 3rem !important; }
                    .process-step-card { padding: 2rem !important; }
                    .process-scroll-container { gap: 1.5rem !important; padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
                }
                @media (max-width: 640px) {
                    .process-card { width: 85vw !important; height: 70vh !important; }
                    .process-intro-card { padding: 2rem !important; }
                    .process-step-card { padding: 1.5rem !important; }
                    .process-scroll-container { gap: 1rem !important; padding-left: 1rem !important; padding-right: 1rem !important; }
                }
            `}</style>
        </section>
    );
};

export default ProcessSection;
