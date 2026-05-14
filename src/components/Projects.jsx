import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projectsList = [
    {
        title: 'Trustbus',
        subtitle: 'Privacy-First AI Transport Solutions',
        description: 'An innovative AI system designed to ensure completely reliable transport solutions while prioritizing user privacy. Secured 3rd place in Ideas 4.0 2026.',
        tech: ['React', 'Python', 'AI/ML', 'Node.js'],
        links: { github: 'https://github.com/WaylenBarreto' }
    },
    {
        title: 'Inflow',
        subtitle: 'Unified Freelance Payment Dashboard',
        description: 'A comprehensive platform for freelancers to streamline client payments. Features automated payment links sent via SMS and email, ensuring smooth transactions for both parties.',
        tech: ['Flutter', 'Firebase', 'TypeScript', 'Node.js', 'Express'],
        links: { github: 'https://github.com/WaylenBarreto' }
    },
    {
        title: 'Meeting Architect',
        subtitle: 'AI Meeting Intelligence & Summarization',
        description: 'A workflow automation tool that processes meeting videos, links, and audio transcripts. Delivers concise AI-generated summaries and actionable insights directly via WhatsApp and Email.',
        tech: ['TypeScript', 'Python', 'Streamlit', 'AI APIs'],
        links: { github: 'https://github.com/WaylenBarreto' }
    }
];

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="projects" className="projects-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Engineering <span className="text-accent">Excellence</span></h2>
                    <p className="section-subtitle">A showcase of full-stack systems and high-impact applications.</p>
                </motion.div>

                <div className="projects-grid">
                    {projectsList.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <div className="project-content">
                                <div className="project-header-top">
                                    <span className="project-number">0{idx + 1}</span>
                                    <div className="project-links">
                                        <a href={project.links.github} className="project-link" aria-label="GitHub Repository">
                                            <Github size={20} />
                                        </a>
                                        <a href="#" className="project-link" aria-label="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="project-title">{project.title}</h3>
                                <h4 className="project-subtitle">{project.subtitle}</h4>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
