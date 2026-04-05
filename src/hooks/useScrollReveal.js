import { useEffect } from 'react';

export const useScrollReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll(
            '.about-card, .timeline-item, .info-card, .skill-category, ' +
            '.project-card, .achievement-card, .contact-card, ' +
            '.section-header, .stat-item'
        );

        revealElements.forEach(el => {
            el.classList.add('reveal');
        });

        const reveal = () => {
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                const revealPoint = 100;

                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', reveal);
        reveal(); // Initial check

        return () => window.removeEventListener('scroll', reveal);
    }, []);
};

export default useScrollReveal;
