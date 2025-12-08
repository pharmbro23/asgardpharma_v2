import React from 'react';

const Section = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-24 md:py-32 px-6 relative overflow-hidden ${className}`}>
            <div className="container mx-auto relative z-10">
                {title && (
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-white">
                        {title} <span className="text-bright-cyan">.</span>
                    </h2>
                )}
                <div className="text-lg md:text-xl text-muted-gray leading-relaxed max-w-4xl">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
