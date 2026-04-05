const Achievements = () => {
    const certifications = [
        { title: 'Java Programming', org: 'ExcelR EdTech / APSCHE', date: 'July 2024' },
        { title: 'Data Analytics with Tableau', org: 'SmartBridge / APSCHE', date: 'July 2025' },
        { title: 'Data Science Master Internship', org: 'EduSkills / Altair (AICTE)', date: 'March 2025' }
    ];

    const achievements = [
        {
            title: 'Full-Stack Property App Developer',
            description: 'Independently built and deployed a full-stack property management app– handled architecture, APIs, and cloud deployment end to end.'
        },
        {
            title: 'AICTE-Recognized Virtual Internships',
            description: 'Completed two AICTE-recognized virtual internships in Data Science and Gen AI during B.Tech, gaining hands-on experience in ML and cloud AI tools.'
        },
        {
            title: 'Phishing URL Detection System',
            description: 'Contributed to the phishing URL detection final year group project– worked on frontend development and model integration using SVM and LightGBM.'
        }
    ];

    return (
        <section className="achievements section" id="achievements">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Recognition</span>
                    <h2 className="section-title">Certifications & <span className="highlight">Achievements</span></h2>
                </div>
                <div className="achievements-grid">
                    <div className="achievement-column">
                        <h3 className="column-title">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="8" r="7" />
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                            Certifications
                        </h3>
                        <div className="achievement-cards">
                            {certifications.map((cert, index) => (
                                <div className="achievement-card" key={index}>
                                    <div className="achievement-icon cert-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                            <polyline points="10 9 9 9 8 9" />
                                        </svg>
                                    </div>
                                    <div className="achievement-info" style={{width: '100%'}}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                                            <h4 style={{marginBottom: '0.2rem'}}>{cert.title}</h4>
                                        </div>
                                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <span className="achievement-org">{cert.org}</span>
                                            <span style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>{cert.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="achievement-column">
                        <h3 className="column-title">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            Achievements
                        </h3>
                        <div className="achievement-cards">
                            {achievements.map((achievement, index) => (
                                <div className="achievement-card highlight-card" key={index}>
                                    <div className="achievement-icon achievement-icon-star">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                    <div className="achievement-info">
                                        <h4 style={{marginBottom: '0.5rem'}}>{achievement.title}</h4>
                                        <p style={{fontSize: '0.95rem', lineHeight: '1.5'}}>{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
