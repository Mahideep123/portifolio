import { useState, useEffect } from 'react';

const Projects = () => {
    const [githubRepos, setGithubRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const featuredProjects = [
        {
            title: 'Full Stack Property Management App',
            description: 'A web application to manage properties, tenants, and rent records with secure login and cloud deployment.',
            tags: ['FastAPI', 'React.js', 'MongoDB', 'JWT'],
            features: [
                'Built and deployed a full-stack property app using the FARM stack with JWT and OTP-based secure login.',
                'Developed REST APIs with FastAPI and MongoDB for tenant management and rent tracking.',
                'Deployed on Vercel and Render with MongoDB Atlas integration.'
            ],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
            links: {
                github: '#',
                live: '#'
            }
        },
        {
            title: 'Phishing URL Detection',
            description: 'A machine learning system that detects and classifies malicious URLs to help protect users from phishing attacks.',
            tags: ['Python', 'SVM', 'LightGBM', 'Django', 'MySQL'],
            features: [
                'Built a system to detect phishing URLs using SVM and LightGBM models in real-time.',
                'Extracted URL features like length, special characters, and HTTPS usage.',
                'Connected a custom UI to the Django backend for seamless real-time classification.'
            ],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            ),
            links: {
                github: '#',
                live: '#'
            }
        },
        {
            title: 'Personal Portfolio Website',
            description: 'A personal website to present my work, skills, and certifications to recruiters and collaborators.',
            tags: ['React.js', 'Netlify', 'CSS'],
            features: [
                'Designed and deployed a modern, responsive portfolio using React.js and CSS.',
                'Showcases projects, skills, and internships dynamically.',
                'Hosted on Netlify with continuous deployment from GitHub.'
            ],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            links: {
                github: 'https://github.com/mahideep123',
                live: 'https://mahideepchowdary.netlify.app'
            }
        }
    ];

    useEffect(() => {
        const fetchGithubRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/mahideep123/repos?sort=updated&per_page=6');
                if (!response.ok) throw new Error('Failed to fetch repositories');
                const data = await response.json();
                setGithubRepos(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching GitHub repos:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchGithubRepos();
    }, []);

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My Work</span>
                    <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
                </div>
                
                <div className="projects-grid" style={{marginBottom: '4rem'}}>
                    {featuredProjects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.links.github} className="project-link" title="View Code" target="_blank" rel="noopener noreferrer">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                        </a>
                                        <a href={project.links.live} className="project-link" title="Live Demo" target="_blank" rel="noopener noreferrer">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="project-icon" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                    <div style={{width: '60px', height: '60px', color: 'var(--primary-color)'}}>
                                        {project.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className="project-tag" key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <ul className="project-features">
                                    {project.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Repositories Section */}
                <div className="section-header" style={{marginTop: '4rem'}}>
                    <h3 className="section-title" style={{fontSize: '2rem'}}>Latest from <span className="highlight">GitHub</span></h3>
                </div>
                
                {loading ? (
                    <div style={{textAlign: 'center', color: 'var(--text-secondary)'}}>Loading repositories...</div>
                ) : error ? (
                    <div style={{textAlign: 'center', color: 'var(--text-secondary)'}}>Could not fetch GitHub repositories.</div>
                ) : (
                    <div className="github-repos-grid" style={{
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                        gap: '1.5rem'
                    }}>
                        {githubRepos.slice(0, 6).map((repo) => (
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id} style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                color: 'var(--text-color)'
                            }}
                            className="github-repo-card"
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(56, 189, 248, 0.1)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" width="24" height="24">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                    <span style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>{new Date(repo.updated_at).toLocaleDateString()}</span>
                                </div>
                                <h4 style={{fontSize: '1.2rem', margin: 0}}>{repo.name}</h4>
                                <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{repo.description || "No description available"}</p>
                                <div style={{marginTop: 'auto', display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)'}}>
                                    {repo.language && (
                                        <span style={{display: 'flex', alignItems: 'center', gap: '0.3rem'}}>
                                            <span style={{width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary-color)'}}></span>
                                            {repo.language}
                                        </span>
                                    )}
                                    <span style={{display: 'flex', alignItems: 'center', gap: '0.3rem'}}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        {repo.stargazers_count}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
