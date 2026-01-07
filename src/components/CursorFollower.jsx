import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable elements
            const target = e.target;
            const computedStyle = window.getComputedStyle(target);
            setIsPointer(
                computedStyle.cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button')
            );
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => window.removeEventListener('mousemove', updateCursorPosition);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main Cursor Dot */}
            <div
                className={`absolute w-3 h-3 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out will-change-transform ${isPointer ? 'scale-150' : 'scale-100'}`}
                style={{ left: position.x, top: position.y }}
            />

            {/* Outer Glow / Trail */}
            <div
                className={`absolute w-8 h-8 border border-red-500/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out will-change-transform ${isPointer ? 'scale-150 bg-red-500/10' : 'scale-100'}`}
                style={{ left: position.x, top: position.y }}
            />
        </div>
    );
};

export default CursorFollower;
