import { useEffect, useRef } from 'react';
import useTypingEffect from '../hooks/useTypingEffect';

const Hero = () => {
    const roles = ['Software Engineer', 'AI & ML Developer', 'Backend Developer', 'Python Developer', 'Problem Solver'];
    const typedText = useTypingEffect(roles, 100, 50, 2000);
    const statsRef = useRef([]);

    useEffect(() => {
        const animateCounter = (counter) => {
            const target = parseFloat(counter.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const update = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Number.isInteger(target) ? Math.floor(current) : current.toFixed(2);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = Number.isInteger(target) ? target : target.toFixed(2);
                }
            };
            update();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsRef.current.forEach(stat => {
            if (stat) observer.observe(stat);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-fade-in">
                        <span className="badge-dot"></span>
                        <span>Available for Opportunities</span>
                    </div>
                    <h1 className="hero-title animate-slide-up">
                        <span className="greeting">Hello, I'm</span>
                        <span className="name">Allam <span className="highlight">Mahideep</span></span>
                    </h1>
                    <div className="hero-role animate-slide-up-delay">
                        <span className="role-prefix">I'm a</span>
                        <span className="role-text">{typedText}</span>
                        <span className="cursor">|</span>
                    </div>
                    <p className="hero-description animate-fade-in-delay">
                        Motivated B.Tech Computer Science (AI & ML) student with strong skills in Python, Java, and backend development. Passionate about building efficient, scalable software and contributing to dynamic engineering teams.
                    </p>
                    <div className="hero-buttons animate-fade-in-delay-2">
                        <a href="#projects" className="btn btn-primary">
                            <span>View Projects</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <span>Get In Touch</span>
                        </a>
                    </div>
                    <div className="hero-stats animate-fade-in-delay-3">
                        <div className="stat-item">
                            <span className="stat-number" data-count="7.10" ref={el => statsRef.current[0] = el}>0</span>
                            <span className="stat-label">CGPA</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number" data-count="3" ref={el => statsRef.current[1] = el}>0</span>
                            <span className="stat-label">Certifications</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number" data-count="3" ref={el => statsRef.current[2] = el}>0</span>
                            <span className="stat-label">Projects</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image-container animate-scale-in">
                    <div className="image-frame">
                        <div className="image-background"></div>
                        <div className="image-placeholder" id="profile-image">
                            <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                            </svg>
                            <span className="placeholder-text">Profile Photo</span>
                        </div>
                        <div className="image-border"></div>
                        <div className="image-glow"></div>
                    </div>
                    <div className="floating-badges">
                        <div className="float-badge badge-1">
                            <span className="badge-icon">🎓</span>
                            <span>B.Tech AI & ML</span>
                        </div>
                        <div className="float-badge badge-2">
                            <span className="badge-icon">💻</span>
                            <span>Full Stack</span>
                        </div>
                        <div className="float-badge badge-3">
                            <span className="badge-icon">🤖</span>
                            <span>AI Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
