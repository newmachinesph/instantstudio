'use client';

import { motion } from 'framer-motion';

const sections = [
    {
        title: 'Content Restrictions',
        text: 'You are prohibited from uploading images or content that contain pornography, explicit violence, gore, hate speech, or that promote violence or harm.',
    },
    {
        title: 'Compliance with Law',
        text: 'You must use InstantStudio.app in a lawful manner and ensure that your conduct and any content you generate comply with all applicable local, national, and international laws.',
    },
    {
        title: 'Intellectual Property of the Platform',
        text: 'All content and software associated with InstantStudio.app, except for user-uploaded images and AI-generated content as per user rights, are the exclusive property of InstantStudio.app.',
    },
    {
        title: 'Representation and Permissions',
        text: 'You affirm that you own or have the necessary licenses, rights, consents, and permissions to upload images to InstantStudio.app and allow us to use them to generate AI content. You further represent that all images uploaded are of individuals who are of legal adult age, and they are either photos of yourself or of someone who has given you express permission to use their likeness.',
    },
    {
        title: 'Usage of AI-Generated Images for Commercial Purposes',
        text: 'The AI-generated images obtained from InstantStudio.app are authorized for both personal and commercial use. This includes the use of such images in advertising, marketing, product design, and other commercial activities. However, all commercial uses must adhere to applicable laws and regulations, particularly concerning copyright, privacy, and defamation.',
    },
    {
        title: 'Prohibition of Resale and Service Arbitrage',
        text: "You are expressly prohibited from reselling, repackaging, or incorporating InstantStudio.app's services, including the AI image generation feature, into any arbitrage or service-based business model. This restriction applies to all aspects of the service offered by InstantStudio.app, and violation of this clause may result in immediate termination of your access to our services and potential legal action.",
    },
    {
        title: 'Right of Service Refusal',
        text: 'InstantStudio.app may deny service or terminate your access if you violate these terms or engage in any activity that violates the rights of any person or entity.',
    },
    {
        title: 'Data Handling/Privacy',
        text: 'Your data will be handled in accordance with our Privacy Policy, which details our practices regarding data collection, usage, and protection measures to ensure your privacy and security.',
    },
    {
        title: 'Acknowledgement of AI Inherent Qualities',
        text: 'We do not guarantee the quality or specific characteristics of any AI-generated images. You recognize and accept that generative AI, including the technology used by InstantStudio.app to create images, may possess inherent biases due to its design, training, and the data it was trained on. InstantStudio.app is not responsible for any such biases or for the perception or interpretation of such biases within the generated content.',
    },
    {
        title: 'Indemnification',
        text: 'You agree to indemnify and hold harmless InstantStudio.app and its affiliates from any claim or demand made by any third party due to your use of the service, your violation of these terms, or your violation of any rights of another.',
    },
    {
        title: 'Sales Policy',
        text: 'All sales on InstantStudio.app are final. Given the digital nature of our service, we cannot offer refunds or exchanges.',
    },
    {
        title: 'Amendments',
        text: 'These terms may be amended from time to time at our discretion. Users will be informed of any amendments through updates posted on our website or via email communication.',
    },
    {
        title: 'Account Termination',
        text: 'We reserve the right to terminate your account and restrict access to InstantStudio.app for violations of these terms.',
    },
];

export default function TermsPage() {
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
                            Terms and Conditions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.5rem' }}
                        >
                            By accessing and using InstantStudio.app, you acknowledge and agree to be bound by the following InstantStudio terms and conditions. Your use of the site constitutes acceptance of these terms.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}
                        >
                            Updated on November 17, 2023
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

            {/* Content */}
            <section style={{ padding: '3rem 0 6rem' }}>
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
