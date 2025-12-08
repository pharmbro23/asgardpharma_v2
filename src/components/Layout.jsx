import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {
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
                    <a href="#" className="text-2xl font-bold tracking-[0.2em] text-text-main uppercase">
                        Asgard
                    </a>

                    <nav className="hidden md:flex space-x-12">
                        {['Overview', 'Problem', 'Solution', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-xs font-bold uppercase tracking-[0.15em] text-text-main/80 hover:text-accent transition-colors"
                            >
                                {item}
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-text-main mb-6">Company</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">About Us</a></li>
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">Careers</a></li>
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">News</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-text-main mb-6">Services</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">Biologics</a></li>
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">Vaccines</a></li>
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">Licensing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-text-main mb-6">Connect</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">Twitter</a></li>
                                <li><a href="#" className="text-sm text-text-muted hover:text-text-main transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="text-2xl font-bold tracking-[0.2em] text-text-main uppercase block mb-6">
                                Asgard
                            </a>
                            <p className="text-xs text-text-muted leading-relaxed">
                                Fabless Biologics & Vaccine Manufacturing.<br />
                                Edmonton, Alberta, Canada.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5">
                        <p className="text-xs text-text-muted">
                            &copy; {new Date().getFullYear()} Asgard Pharma. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-xs text-text-muted hover:text-text-main transition-colors">Privacy Policy</a>
                            <a href="#" className="text-xs text-text-muted hover:text-text-main transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
