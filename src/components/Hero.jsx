import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-bg-main">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-white/10 z-10"></div> {/* Reduced opacity overlay (10%) */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 grayscale scale-110" // Added scale-110 to crop watermark
                    poster="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2011&auto=format&fit=crop"
                >
                    {/* Local video file */}
                    <source src="/assets/video/background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex items-end pb-32 px-8">
                <div className="container mx-auto">
                    <div className="max-w-4xl">
                        <h1 className="text-7xl md:text-9xl font-bold text-text-main tracking-tighter mb-6 leading-[0.9]">
                            FABLESS <br />
                            BIOLOGICS
                        </h1>
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12">
                            <p className="text-xl text-text-main/80 max-w-xl leading-relaxed font-light tracking-wide">
                                Producing affordable pharmaceuticals through global innovation and Canadian infrastructure.
                            </p>
                            <a
                                href="#contact"
                                className="group flex items-center gap-4 text-text-main uppercase tracking-[0.2em] text-sm font-bold hover:text-accent transition-colors"
                            >
                                Get in Touch
                                <span className="block w-12 h-[1px] bg-text-main group-hover:bg-accent transition-colors"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
