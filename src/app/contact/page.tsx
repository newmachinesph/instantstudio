'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, Users, Palette, Sparkles, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        q: 'What will you do with my photos?',
        a: 'We will use your photos to train a custom AI model for you, and use this model to generate your portraits. We will keep the data securely on our server for 7 days so that we can help you with any support requests, and then everything be deleted from our servers. See the Privacy Policy for more.',
    },
    {
        q: 'Can I upload photos of anyone?',
        a: "No. According to our terms and conditions, you may only use InstantStudio.app for photos of yourself or other adults who have given you permission to do it for them. Please be respectful and make sure you have the clear consent of anyone's images you upload. Our models are not designed for children, we do not recommend using it for children as the results are unpredictable. Any usage outside of these terms is a violation and may result in termination of your account.",
    },
    {
        q: 'Who owns the generated photos?',
        a: "You have full ownership and a commercial license to all of your photos. You can use them anywhere you want as long as you use them lawfully in your jurisdiction. Respect for privacy and the right to your own likeness is paramount to our core values. Only generate photos of yourself or others who have asked you for help. Never generate images of someone you don't know. For more please see our terms and conditions.",
    },
    {
        q: 'How to ensure the photos look like me?',
        a: "Submit at least 8 recent photos of yourself. They should clearly show your face and be taken from slightly different angles. No need for heavy makeup. They can be simple phone selfies you take right now. Don't submit artificially generated photos or those created with digital filters. Submit photos that vary in facial expressions, outfits, light angles, and background. Do not submit nude photos.",
    },
    {
        q: 'Where is my data stored?',
        a: 'We retain your images for 7 days on our secure cloud servers to facilitate customer support. After this duration, all images are permanently deleted from our systems, ensuring your privacy and the security of your data. Please make sure you download any images you wish to keep.',
    },
    {
        q: 'What types of payment are accepted?',
        a: "After uploading your photos and confirming your email, you will complete your order on a checkout screen where you enter your payment information. You can be confident as the checkout is handled by Stripe \u2013 it is one of the largest payment processors on the web, and works with basically all cards, Apple Pay, Google Pay, and Alipay. We don't hold any customer payment information at all. Please see our Privacy Policy to learn more about how we use your data.",
    },
];

export default function ContactPage() {
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
                                GET IN TOUCH
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
                            Empowering Your Creativity{' '}
                            <span style={{ color: 'var(--accent-orange)' }}>with AI</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7,
                                maxWidth: '40rem',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                        >
                            At InstantStudio, we're empowering businesses, graphic artists, and creatives
                            with our cutting-edge AI image generation software. Whether you're designing,
                            marketing, or exploring bold new ideas, our tools can help you bring your vision
                            to life. Got questions or want to see how we can support your creativity with AI?
                            Reach out — we'd love to hear from you!
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

            {/* Form + Info */}
            <section style={{ padding: '4rem 0 6rem' }}>
                <div className="page-container">
                    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2.5rem',
                                borderRadius: '1.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                            }}
                        >
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                Send us a message
                            </h2>
                            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                We'll get back to you as soon as possible.
                            </p>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                    <div>
                                        <label style={labelStyle}>Name</label>
                                        <input type="text" placeholder="Your name" style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Email</label>
                                        <input type="email" placeholder="you@example.com" style={inputStyle} />
                                    </div>
                                </div>

                                <div>
                                    <label style={labelStyle}>Subject</label>
                                    <select style={inputStyle} defaultValue="">
                                        <option value="" disabled>Select a topic</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="feature">Feature Request</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={labelStyle}>Message</label>
                                    <textarea
                                        placeholder="Tell us how we can help..."
                                        rows={5}
                                        style={{ ...inputStyle, resize: 'vertical' }}
                                    />
                                </div>

                                <button type="submit" className="btn-primary" style={{
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                    gap: '0.5rem', fontSize: '1rem', padding: '0.875rem 2rem', width: '100%',
                                }}>
                                    Send Message
                                    <Send style={{ width: '1rem', height: '1rem' }} />
                                </button>
                            </form>
                        </motion.div>

                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            {/* Community Card */}
                            <div style={{
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                            }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                    Join Our Community
                                </h3>
                                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                    Join our growing community of innovators and collaborators! We're also inviting
                                    strategic partners, agencies, and artists to connect with us. Share your best
                                    creations, and you might get featured in our gallery to inspire others. Let's
                                    work together to shape the future of design and creativity!
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div style={{
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                            }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                                    Contact Info
                                </h3>
                                {[
                                    { icon: Mail, label: 'hello@instantstudio.ai', href: 'mailto:hello@instantstudio.ai' },
                                    { icon: MapPin, label: 'Singapore', href: null },
                                    { icon: Clock, label: 'Mon — Fri, 9am — 6pm SGT', href: null },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{
                                            width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
                                            background: 'rgba(14, 76, 73, 0.1)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        }}>
                                            <item.icon style={{ width: '1.125rem', height: '1.125rem', color: 'var(--primary-teal)' }} />
                                        </div>
                                        {item.href ? (
                                            <a href={item.href} style={{ fontSize: '0.9375rem', color: 'var(--primary-teal)', fontWeight: 600, textDecoration: 'none' }}>
                                                {item.label}
                                            </a>
                                        ) : (
                                            <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{item.label}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Why Reach Out */}
                            <div style={{
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                            }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                                    We Can Help With
                                </h3>
                                {[
                                    { icon: Sparkles, text: 'AI-powered campaign solutions' },
                                    { icon: Users, text: 'Strategic partnerships & collaborations' },
                                    { icon: Palette, text: 'Custom creative projects' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <item.icon style={{ width: '1.125rem', height: '1.125rem', color: 'var(--accent-orange)', flexShrink: 0 }} />
                                        <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '4rem 0 6rem', background: 'var(--bg-darker)' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '3rem' }}
                        >
                            <p style={{
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.05em',
                                marginBottom: '0.75rem',
                            }}>
                                AI-PHOTO SERVICES
                            </p>
                            <h2 style={{
                                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                            }}>
                                Frequently Asked Questions
                            </h2>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {faqs.map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                }
                @media (max-width: 640px) {
                    .form-row { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
}

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            viewport={{ once: true }}
            style={{
                borderRadius: '1rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                overflow: 'hidden',
            }}
        >
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                }}
            >
                <span style={{ fontSize: '1rem', fontWeight: 600 }}>{question}</span>
                <ChevronDown style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    color: 'var(--text-muted)',
                    flexShrink: 0,
                    transition: 'transform 0.2s ease',
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }} />
            </button>
            <div style={{
                maxHeight: open ? '20rem' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
            }}>
                <p style={{
                    padding: '0 1.5rem 1.25rem',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                }}>
                    {answer}
                </p>
            </div>
        </motion.div>
    );
}

const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid var(--glass-border)',
    background: 'var(--bg-darker)',
    color: 'var(--text-primary)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
};
