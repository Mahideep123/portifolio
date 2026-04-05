import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
    const particlesRef = useRef(null);

    useEffect(() => {
        const container = particlesRef.current;
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            container.appendChild(particle);
        }

        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="bg-animation">
            <div className="grid-lines"></div>
            <div className="floating-particles" ref={particlesRef}></div>
        </div>
    );
};

export default BackgroundAnimation;
