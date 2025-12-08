import React from 'react';

const VastSection = ({
    id,
    title,
    subtitle,
    children,
    image,
    video,
    mediaContent,
    align = 'left', // 'left' | 'right' | 'center'
    type = 'split', // 'split' | 'full'
    className = ""
}) => {

    if (type === 'full') {
        return (
            <section id={id} className={`py-32 px-8 relative overflow-hidden ${className}`}>
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl">
                        {title && (
                            <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-text-main leading-[0.9]">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-xl md:text-2xl text-text-main/80 mb-12 max-w-2xl leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                        <div className="text-lg text-text-muted leading-relaxed">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id={id} className={`py-24 md:py-32 px-8 relative overflow-hidden ${className}`}>
            <div className="container mx-auto">
                <div className={`flex flex-col md:flex-row gap-16 items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>

                    {/* Text Content */}
                    <div className="flex-1">
                        {title && (
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-text-main">
                                {title}
                            </h2>
                        )}
                        <div className="text-lg text-text-muted leading-relaxed space-y-6">
                            {children}
                        </div>
                    </div>

                    {/* Media Content */}
                    <div className="flex-1 w-full">
                        {mediaContent ? (
                            mediaContent
                        ) : (
                            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-bg-secondary">
                                {video ? (
                                    <video
                                        src={video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                ) : image ? (
                                    <img
                                        src={image}
                                        alt={title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-text-muted/20">
                                        No Media
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VastSection;
