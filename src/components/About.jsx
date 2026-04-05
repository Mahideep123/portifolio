const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">About Me</span>
                    <h2 className="section-title">Getting to Know <span className="highlight">Me</span></h2>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <div className="about-card">
                            <h3>Career Objective</h3>
                            <p>
                                A motivated final-year B.Tech student specializing in Artificial Intelligence and Machine Learning, with practical experience in full-stack development, data science, and machine learning. Eager to contribute technical skills and problem-solving ability to a dynamic team and grow as a software professional.
                            </p>
                        </div>
                        <div className="education-timeline">
                            <h3>Education</h3>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4>Rise Krishna Sai Prakasam Group Of Institutions</h4>
                                            <span className="timeline-date">2022 - 2026</span>
                                        </div>
                                        <p className="timeline-subtitle">B.Tech – Computer Science Engineering (AI & ML)</p>
                                        <span className="timeline-cgpa">CGPA: <span className="highlight">7.1/10</span></span>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4>Saraswathi Junior College</h4>
                                            <span className="timeline-date">2020 - 2022</span>
                                        </div>
                                        <p className="timeline-subtitle">Intermediate – MPC Stream</p>
                                        <span className="timeline-cgpa">Percentage: <span className="highlight">66.7%</span></span>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4>Pace The Global High School</h4>
                                            <span className="timeline-date">2019 - 2020</span>
                                        </div>
                                        <p className="timeline-subtitle">SSC</p>
                                        <span className="timeline-cgpa">CGPA: <span className="highlight">9.57/10</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-info">
                        <div className="info-card">
                            <div className="info-item">
                                <span className="info-label">Name</span>
                                <span className="info-value">Allam Mahideep</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Location</span>
                                <span className="info-value">Ongole, Andhra Pradesh, India</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Email</span>
                                <span className="info-value"><a href="mailto:mahideep536@gmail.com" className="contact-link">mahideep536@gmail.com</a></span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Phone</span>
                                <span className="info-value"><a href="tel:+919390113826" className="contact-link">+91-9390113826</a></span>
                            </div>
                            
                            <div className="info-social-links mt-4" style={{display: 'flex', gap: '15px', marginTop: '20px', justifyContent: 'center'}}>
                                <a href="https://linkedin.com/in/mahideep-allam" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                <a href="https://github.com/mahideep123" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
