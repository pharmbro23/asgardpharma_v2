import React, { useState, useEffect } from 'react';

const Layout = ({ children, navItems = [] }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-bg-main text-text-main font-sans selection:bg-accent selection:text-white">
            {/* Navbar */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-main/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-8 flex items-center justify-between">
                    <a href="#overview" className="text-2xl font-bold tracking-[0.2em] text-text-main uppercase">
                        Asgard
                    </a>

                    <nav className="hidden md:flex space-x-12">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className="text-xs font-bold uppercase tracking-[0.15em] text-text-main/80 hover:text-accent transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        {/* Placeholder */}
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-bg-secondary border-t border-black/5 pt-20 pb-10">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                        {/* Copyright and Company Name - Left Side (Desktop) or Top (Mobile) if changed order, but keeping standard flow */}
                        <div className="mb-12 md:mb-0">
                            <h4 className="text-2xl font-bold tracking-[0.2em] text-text-main uppercase mb-4">
                                Asgard Pharmaceuticals Inc.
                            </h4>
                            <p className="text-xs text-text-muted leading-relaxed">
                                &copy; {new Date().getFullYear()} ASGARD PHARMA. All rights reserved.
                            </p>
                        </div>

                        {/* Connect Column - Right Side */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-text-main mb-6">Connect</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">Twitter</a></li>
                                <li><a href="mailto:info@asgardpharma.ca" className="text-sm text-text-muted hover:text-text-main transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
