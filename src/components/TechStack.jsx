import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TechStack.css';

const categories = ['All', 'Languages', 'Frontend', 'Backend & DB', 'IoT & Hardware'];

const techItems = [
    // Languages
    {
        name: 'JavaScript',
        category: 'Languages',
        color: '#F7DF1E',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M3 3h18v18H3V3z" fill="#F7DF1E" />
                <path d="M12 18h2.5c.3 0 .5-.2.5-.5V16c0-.5-.5-.5-.5-.5h-1c-.5 0-.5-.5-.5-.5v-1c0-.5.5-.5.5-.5h2.5" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 14h2.5c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5H8v1h2.5c.3 0 .5.2.5.5v.5c0 .3-.2.5-.5.5H8" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        )
    },
    {
        name: 'C++',
        category: 'Languages',
        color: '#00599C',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#00599C" strokeWidth="2">
                <path d="M11 9a3.5 3.5 0 1 0 0 6" strokeLinecap="round" />
                <line x1="15" y1="12" x2="18" y2="12" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16.5" y1="10.5" x2="16.5" y2="13.5" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="19.5" y1="12" x2="22.5" y2="12" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="21" y1="10.5" x2="21" y2="13.5" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="12" r="10" opacity="0.1" fill="#00599C" />
            </svg>
        )
    },
    {
        name: 'Python',
        category: 'Languages',
        color: '#3776AB',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%">
                <path d="M12.12 2.01c-3.13 0-5.87 2.06-5.87 5.16v2.33h5.99v.84H6.25c-3.13 0-4.24 2.21-4.24 5.25s1.94 5.37 5.07 5.37h2.95v-4.14c0-2.85 2.29-5.16 5.16-5.16h4.14v-2.95c0-3.69-2.77-6.7-6.46-6.7zm-2.07 2.07c.57 0 1.03.46 1.03 1.03s-.46 1.03-1.03 1.03-1.03-.46-1.03-1.03.46-1.03 1.03-1.03z" fill="#3776AB" />
                <path d="M11.88 21.99c3.13 0 5.87-2.06 5.87-5.16v-2.33h-5.99v-.84h5.99c3.13 0 4.24-2.21 4.24-5.25s-1.94-5.37-5.07-5.37h-2.95v4.14c0 2.85-2.29 5.16-5.16 5.16H4.67v2.95c0 3.69 2.77 6.7 6.46 6.7zm2.07-2.07c-.57 0-1.03-.46-1.03-1.03s.46-1.03 1.03-1.03 1.03.46 1.03 1.03-.46 1.03-1.03 1.03z" fill="#FFD43B" />
            </svg>
        )
    },
    {
        name: 'Java',
        category: 'Languages',
        color: '#E66A0E',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%">
                <path d="M6 19.5c0 .83 1.68 1.5 3.75 1.5s3.75-.67 3.75-1.5-1.68-1.5-3.75-1.5-3.75.67-3.75 1.5z" opacity="0.3" fill="#E66A0E" />
                <path d="M19 12c-.5-1.5-2.5-3-5.5-3v2c2 0 3.5.5 4 1-.5.5-2 1-4.5 1V15c3.5 0 5.5-1.5 6-3z" fill="#5382A1" />
                <path d="M12.5 4.5c.5.5.5 1.5 0 2s-1.5.5-2 0c-.5-.5-.5-1.5 0-2s1.5-.5 2 0zm-2-2.5c.5.5.5 1.5 0 2s-1.5.5-2 0c-.5-.5-.5-1.5 0-2s1.5-.5 2 0z" fill="#E66A0E" />
                <path d="M4 15.5C4 17.43 7.58 19 12 19s8-1.57 8-3.5c0-1.25-2.08-2.33-5.2-2.9v1.55c2.08.45 3.2 1.05 3.2 1.35c0 .83-2.68 1.5-6 1.5s-6-.67-6-1.5c0-.3 1.12-.9 3.2-1.35v-1.55C5.08 13.17 4 14.25 4 15.5z" fill="#5382A1" />
            </svg>
        )
    },
    {
        name: 'C Language',
        category: 'Languages',
        color: '#659AD2',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#659AD2" strokeWidth="2" strokeLinecap="round">
                <path d="M16 8.5a4.5 4.5 0 1 0 0 7" />
                <circle cx="12" cy="12" r="9" opacity="0.1" fill="#659AD2" />
            </svg>
        )
    },
    {
        name: 'SQL',
        category: 'Languages',
        color: '#00758F',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#00758F" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="7" ry="3" />
                <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
                <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
            </svg>
        )
    },

    // Frontend
    {
        name: 'React',
        category: 'Frontend',
        color: '#61DAFB',
        svg: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" fill="none" stroke="#61DAFB" strokeWidth="1">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <g>
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        )
    },
    {
        name: 'Three.js',
        category: 'Frontend',
        color: '#000000',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round">
                <polygon points="12,2 2,22 22,22" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="22" x2="12" y2="10" />
                <line x1="22" y1="22" x2="12" y2="10" />
            </svg>
        )
    },
    {
        name: 'HTML5',
        category: 'Frontend',
        color: '#E34F26',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#E34F26">
                <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3zm13.3 5.4H8.7l.2 2h7.2l-.5 4.8-3.4 1-3.4-1-.2-2.2h2l.1 1.1 1.5.4 1.5-.4.2-1.8H8.5l-.6-6h9.1l-.2 2.2z" />
            </svg>
        )
    },
    {
        name: 'CSS3',
        category: 'Frontend',
        color: '#1572B6',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#1572B6">
                <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3zm13.3 5.4H8.7l.2 2h7.2l-.5 4.8-3.4 1-3.4-1-.2-2.2h2l.1 1.1 1.5.4 1.5-.4.2-1.8H8.5l-.6-6h9.1l-.2 2.2z" />
            </svg>
        )
    },

    // Backend & DB
    {
        name: 'Node.js',
        category: 'Backend & DB',
        color: '#339933',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#339933" strokeWidth="2">
                <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm0 2.3l6 3.4v6.8l-6 3.4-6-3.4v-6.8l6-3.4z" />
                <path d="M12 6.5L6.5 9.7v4.6L12 17.5V6.5z" fill="#339933" opacity="0.3" />
            </svg>
        )
    },
    {
        name: 'Express.js',
        category: 'Backend & DB',
        color: '#353535',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="3" opacity="0.1" fill="#FFFFFF" />
                <text x="50%" y="60%" fontSize="8" fontWeight="800" fontFamily="system-ui, sans-serif" textAnchor="middle" fill="#FFFFFF" stroke="none">express</text>
            </svg>
        )
    },
    {
        name: 'FastAPI',
        category: 'Backend & DB',
        color: '#009688',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#009688">
                <path d="M12 2L2 12h8v10l10-10h-8V2z" />
            </svg>
        )
    },
    {
        name: 'MongoDB',
        category: 'Backend & DB',
        color: '#47A248',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#47A248">
                <path d="M12 1.5C9 6 8.5 10.5 8.5 13c0 3.5 2 5.5 3.5 6.5s3.5-3 3.5-6.5c0-2.5-.5-7-3.5-11.5z" />
                <path d="M12 1.5V18c1.5-1 2-2.5 2-5 0-2.5-.5-7-2-11.5z" fill="#3FA046" opacity="0.7" />
                <path d="M12 18v4.5c-.3 0-.5-.2-.5-.5V18c.5 0 .5 0 .5 0z" fill="#13AA52" />
            </svg>
        )
    },
    {
        name: 'REST APIs',
        category: 'Backend & DB',
        color: '#29B6F6',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#29B6F6" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <circle cx="5" cy="5" r="2" fill="#29B6F6" />
                <circle cx="19" cy="5" r="2" fill="#29B6F6" />
                <circle cx="5" cy="19" r="2" fill="#29B6F6" />
                <circle cx="19" cy="19" r="2" fill="#29B6F6" />
                <line x1="6.5" y1="6.5" x2="10" y2="10" />
                <line x1="17.5" y1="6.5" x2="14" y2="10" />
                <line x1="6.5" y1="17.5" x2="10" y2="14" />
                <line x1="17.5" y1="17.5" x2="14" y2="14" />
            </svg>
        )
    },

    // IoT & Hardware
    {
        name: 'ESP32',
        category: 'IoT & Hardware',
        color: '#E73C30',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#E73C30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
            </svg>
        )
    },
    {
        name: 'NEO-6M GPS',
        category: 'IoT & Hardware',
        color: '#9C27B0',
        svg: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" fill="#9C27B0" opacity="0.3" />
            </svg>
        )
    }
];

const TechStack = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const filteredTech = activeTab === 'All'
        ? techItems
        : techItems.filter(item => item.category === activeTab || (activeTab === 'Backend & DB' && (item.category === 'Backend & DB' || item.category === 'Databases')));

    return (
        <section id="tech-stack" className="techstack-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="techstack-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Technical <span className="text-accent">Stack</span></h2>
                    <p className="section-subtitle">
                        A visually structured overview of my technology stack, tools, and hardware competencies.
                    </p>
                </motion.div>

                {/* Tab Filter Navigation */}
                <motion.div 
                    className="techstack-tabs"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.span 
                                    className="active-indicator" 
                                    layoutId="activeTabIndicator"
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Tech Grid */}
                <motion.div 
                    className="techstack-grid"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredTech.map((item) => (
                            <motion.div
                                key={item.name}
                                className="tech-card"
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                style={{ '--hover-color': item.color }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="tech-logo">
                                    {item.svg}
                                </div>
                                <span className="tech-name">{item.name}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
