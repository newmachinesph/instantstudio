'use client';

import { motion } from 'framer-motion';

const sections = [
    {
        title: 'Use of Images',
        text: 'InstantStudio.app exclusively utilizes the images you upload to create personalized AI-generated headshots. These images are not employed for any purposes other than the generation of your headshots.',
    },
    {
        title: 'Data Processing and Third-Party Disclosure',
        text: 'All image processing activities are confined to our internal platforms. No aspect of your images or related data is shared with, or processed by, external third-party entities.',
    },
    {
        title: 'Access by Support Staff',
        text: 'Access to customer-uploaded images is strictly limited to our customer support team. This access is solely for the purpose of providing effective customer support and addressing any issues or inquiries related to our services.',
    },
    {
        title: 'Anonymity and Data Storage',
        text: 'While we require your email address for account management and communication purposes, we do not retain any other personal identifiers, such as your name. This approach is part of our commitment to maintaining your anonymity.',
    },
    {
        title: 'Retention and Deletion of Images',
        text: 'We retain your images for a period of one week to facilitate customer support. Post this duration, all images are permanently deleted from our systems, ensuring your privacy and the security of your data.',
    },
    {
        title: 'Prohibition of Image Sale or Transmission',
        text: 'We firmly uphold the principle of not selling or transmitting your images to any third parties. Your trust is paramount, and we are committed to protecting the privacy and integrity of your personal data.',
    },
];

export default function PrivacyPage() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}>
            {/* Hero */}
            <section style={{ paddingTop: '8rem', paddingBottom: '3rem', background: 'var(--bg-darker)', position: 'relative', overflow: 'hidden' }}>
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
                                marginBottom: '1rem',
                            }}
                        >
                            Privacy Policy
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.5rem' }}
                        >
                            This Privacy Policy outlines our approach to handling the personal data and images you entrust to us. Understanding this policy will help you make informed decisions about using our services.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}
                        >
                            Updated on November 7, 2023
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

            {/* Intro */}
            <section style={{ padding: '3rem 0 0' }}>
                <div className="page-container">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            maxWidth: '48rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            fontSize: '1.0625rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                        }}
                    >
                        At InstantStudio.app, we respect your privacy and are dedicated to protecting it. Our policy is designed to be transparent, ensuring you are fully aware of how your data is used, stored, and protected. By using our services, you agree to the terms outlined in this policy. We encourage you to read this document thoroughly to understand our practices regarding your personal information and how we will treat it.
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section style={{ padding: '2rem 0 6rem' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                viewport={{ once: true }}
                            >
                                <h2 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem',
                                    color: 'var(--text-primary)',
                                }}>
                                    {section.title}
                                </h2>
                                <p style={{
                                    fontSize: '1.0625rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.8,
                                }}>
                                    {section.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
