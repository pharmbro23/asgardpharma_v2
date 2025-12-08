import React, { useState } from 'react';

const InteractiveBackground = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            className="relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Enhanced Spotlight Effect */}
            {isHovering && (
                <div
                    className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 160, 154, 0.4), transparent 60%)`,
                    }}
                />
            )}

            {children}
        </div>
    );
};

export default InteractiveBackground;
