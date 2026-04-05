const Internships = () => {
    const internships = [
        {
            title: 'GEN-AI Virtual Internship',
            company: 'EduSkills / AWS Academy',
            duration: 'Oct 2025 – Dec 2025',
            location: 'Remote',
            grade: 'O (Outstanding)',
            description: 'Completed a 10-week Gen AI program by AWS Academy under AICTE’s National Internship Portal.',
            highlights: [
                'Gained practical knowledge of LLMs, prompt engineering, and cloud AI services.',
                'Focused on content generation and workflow automation.',
                'Scored Outstanding grade (90–100 band) across all modules and assessments.'
            ]
        },
        {
            title: 'Data Science Master Virtual Internship',
            company: 'EduSkills / Altair',
            duration: 'Jan 2025 – Mar 2025',
            location: 'Remote',
            grade: 'O (Outstanding)',
            description: 'Completed a 10-week Data Science internship covering data wrangling, EDA, statistical modeling, and ML pipelines in Python.',
            highlights: [
                'Built predictive models on real datasets.',
                'Applied visualization techniques to extract business insights.',
                'Scored Outstanding grade, ranking in the top performance band across all evaluations.'
            ]
        }
    ];

    return (
        <section className="internships section" id="internships">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Experience</span>
                    <h2 className="section-title">My <span className="highlight">Internships</span></h2>
                </div>
                <div className="internships-list" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                    {internships.map((internship, index) => (
                        <div className="internship-card" key={index} style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '16px',
                            padding: '2rem',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div className="internship-header" style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}>
                                <div>
                                    <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff'}}>{internship.title}</h3>
                                    <p style={{color: 'var(--primary-color)', fontWeight: '600', fontSize: '1.1rem'}}>{internship.company}</p>
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '0.3rem 0.8rem',
                                        background: 'rgba(56, 189, 248, 0.1)',
                                        color: 'var(--primary-color)',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        marginBottom: '0.5rem'
                                    }}>{internship.duration}</span>
                                    <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>{internship.location}</p>
                                </div>
                            </div>
                            
                            <div style={{
                                display: 'inline-block',
                                width: 'fit-content',
                                padding: '0.3rem 0.8rem',
                                background: 'rgba(52, 211, 153, 0.1)',
                                color: '#34d399',
                                borderRadius: '8px',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}>Grade: {internship.grade}</div>

                            <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>{internship.description}</p>
                            
                            <ul style={{
                                listStyleType: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                {internship.highlights.map((highlight, idx) => (
                                    <li key={idx} style={{
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.5rem'
                                    }}>
                                        <svg style={{minWidth: '16px', marginTop: '4px', color: 'var(--primary-color)'}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;
