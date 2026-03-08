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
        title: 'RideShield',
        subtitle: 'AI Traffic Violation Detection',
        description: 'A MERN stack application featuring real-time camera detection for helmet and phone usage violations, complete with an analytics dashboard and user query portal.',
        tech: ['MERN Stack', 'Computer Vision', 'Tailwind'],
        links: { github: 'https://github.com/WaylenBarreto' }
    },
    {
        title: 'Resolve360',
        subtitle: 'Unified Customer Complaint Dashboard',
        description: 'Comprehensive communication platform leveraging AI for complaint storm detection, root cause clustering, and copilot-assisted complaint resolution.',
        tech: ['MongoDB', 'Express', 'React', 'Node.js', 'AI API'],
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
