'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const solutionLinks = [
    { href: '/toolkit', label: 'IS Toolkit' },
    { href: '/iconiq', label: 'ICONIQ' },
    { href: '/fast-fashion', label: 'Fast Fashion' },
    { href: '/selfie-cards', label: 'Selfie Cards' },
];

const navLinks = [
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/instantstudio_logo.svg"
                        alt="InstantStudio"
                        width={110}
                        height={38}
                        priority
                    />
                </Link>

                <nav className={styles.nav}>
                    {/* Solutions Dropdown */}
                    <div
                        ref={dropdownRef}
                        className={styles.dropdown}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button
                            className={styles.navLink}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', font: 'inherit' }}
                        >
                            Solutions
                            <svg
                                width="12" height="12" viewBox="0 0 12 12" fill="none"
                                style={{
                                    transition: 'transform 0.2s ease',
                                    transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            >
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownOpen : ''}`}>
                            <div className={styles.dropdownMenuInner}>
                                {solutionLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={styles.dropdownItem}
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <Link href="/contact" className={styles.ctaButton}>
                        Get Started
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`} />
                </button>
            </div>

            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <nav className={styles.mobileNav}>
                    {/* Mobile Solutions Accordion */}
                    <button
                        className={styles.mobileNavLink}
                        onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', gap: '0.375rem', font: 'inherit',
                        }}
                    >
                        Solutions
                        <svg
                            width="14" height="14" viewBox="0 0 12 12" fill="none"
                            style={{
                                transition: 'transform 0.2s ease',
                                transform: isMobileSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        >
                            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div style={{
                        maxHeight: isMobileSolutionsOpen ? '12rem' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.125rem',
                    }}>
                        {solutionLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileNavLink}
                                style={{ fontSize: '1rem', color: 'var(--text-muted)' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={styles.mobileCta}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get Started
                    </Link>
                </nav>
            </div>
        </header>
    );
}
