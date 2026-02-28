import React from "react";
import { Chip } from "@mui/material";
import { GitHub, LinkedIn, Instagram, Email } from "@mui/icons-material";
import "./home.scss";

const PUB = process.env.PUBLIC_URL;

const COMPETENCIES = [
    { label: 'Full-stack Development', pct: 95, desc: 'Web apps, REST APIs, databases & cloud services' },
    { label: 'Architecture & Design',  pct: 88, desc: 'Distributed systems, microservices, design patterns' },
    { label: 'AI Engineering',         pct: 76, desc: 'Prompt engineering, AI-powered apps' },
] as const;

/* ── Data ──────────────────────────────────────────────── */

const PROJECTS = [
    {
        name: 'Criptomonedas.es', date: 'August 2023 – Present',
        desc: 'Crypto news, stats, analysis, and resources for the Spanish-speaking community.',
        link: 'https://dev.altobloque.es',
        chips: [{ l: 'Angular', bg: '#dd0031' }, { l: 'Node.js', bg: '#68a063' }, { l: 'MySQL', bg: '#00758f' }, { l: 'Firebase', bg: '#ffca28', c: '#333' }, { l: 'PHP', bg: '#777bb4' }, { l: 'NestJs', bg: '#ea2845' }, { l: 'MayaJs', bg: '#7c3aed' }],
    },
    {
        name: 'Panther Ecommerce', date: 'October 2022 – Present',
        desc: 'A comprehensive ecommerce platform for modern businesses.',
        isPrivate: true,
        chips: [{ l: 'Angular', bg: '#dd0031' }, { l: 'C#', bg: '#68217a' }, { l: 'SQL Server', bg: '#00758f' }, { l: 'Entity Framework', bg: '#5c2d91' }, { l: 'AWS', bg: '#ff9900' }, { l: 'Redis', bg: '#DC382D' }],
    },
    {
        name: 'Rapido', date: 'September 2018 – September 2022',
        desc: 'A framework for fastest building interfaces with Angular.',
        isPrivate: true,
        chips: [{ l: 'Angular', bg: '#dd0031' }, { l: 'C#', bg: '#68217a' }, { l: 'SQL Server', bg: '#00758f' }],
    },
    {
        name: 'CryptoManager', date: 'August 2023 – Present',
        desc: 'A platform for tracking cryptocurrencies with multi-tenant support.',
        isPrivate: true,
        chips: [{ l: 'Angular', bg: '#dd0031' }, { l: 'Firebase', bg: '#ffca28', c: '#333' }, { l: 'MySQL', bg: '#00758f' }, { l: 'NestJs', bg: '#ea2845' }, { l: 'MayaJs', bg: '#7c3aed' }],
    },
] as const;

const EXPERIENCE = [
    {
        period: 'December 2025 – Present',
        role: 'Full-stack Developer at Atom',
        desc: 'Engineering a high-scale conversational platform integrating Multimodal AI Agents (Voice & Text) for automated customer engagement. Implementing real-time communication infrastructure and seamless data synchronization with enterprise CRMs. Technologies: Angular, Node.js, Firebase',
    },
    {
        period: 'January 2023 – November 2025',
        role: 'Full-stack Developer at Mobeats',
        desc: 'Architected and deployed enterprise-grade web applications using Angular and .NET. Led the development of mission-critical systems including E-commerce engines, inventory management, and automated billing solutions. Specialized in complex third-party API orchestration.',
    },
    {
        period: 'March 2020 – November 2025',
        role: 'Full-stack Developer — Freelancer',
        desc: 'Designing bespoke digital solutions including high-performance crypto-tracking systems (CoinGecko API) and custom WordPress architecture. Expert in full-stack development with Angular/Node.js and PHP, focusing on secure payment gateway integrations and CRM automation.',
    },
    {
        period: 'September 2018 – September 2022',
        role: 'Full-stack Developer at MARCODEV & Corpoweb',
        desc: 'Developed diverse software ecosystems using Angular, Vue.js, PHP, and C#. Delivered robust logistics systems for package tracking, client management portals, and scalable E-commerce platforms. Modernized legacy workflows with custom PHP/jQuery plugins.',
    },
    {
        period: 'August 2016 – September 2018',
        role: 'Front-End Developer',
        desc: 'Crafted responsive, high-traffic informational websites with a focus on optimized UI/UX. Developed an end-to-end office rental management system and specialized in seamless RESTful API consumption and data visualization.',
    },
    {
        period: 'September 2013 – September 2018',
        role: 'Systems Engineering — UNEFA',
        desc: "Bachelor's degree in Systems Engineering. Comprehensive academic focus on software architecture, algorithms, and project management.",
    },
];

/* ── SVG icon helpers (fixed 16×16) ─────────────────── */
const Svg: React.FC<{ children: React.ReactNode; viewBox?: string }> = ({ children, viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} width="16" height="16" style={{ display: 'block', flexShrink: 0 }}>{children}</svg>
);

/* ── Component ─────────────────────────────────────────── */
const Home: React.FC = () => {

    return (
        <div className="portfolio">

            {/* ──── HERO ──────────────────────────────── */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-text">
                        <div className="hero-badge">Available for work</div>
                        <h1 className="hero-name">Hello, I'm Henry!</h1>
                        <div className="hero-role">Full-stack Developer</div>
                        <p className="hero-bio">
                            I started in the world of programming at the age of fifteen and later studied systems engineering.
                            I currently have eight years of professional experience in web application development.
                            Passionate about technology and innovation — always learning, always building.
                        </p>
                        <div className="hero-actions">
                            <div className="hero-social">
                                <a href="https://github.com/henryromero-dev/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a>
                                <a href="https://www.linkedin.com/in/henryromero-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
                                <a href="https://www.instagram.com/henry.alexr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
                                <a href="mailto:official.henryromero@gmail.com" aria-label="Email"><Email /></a>
                            </div>
                            <a href={`${PUB}/assets/cv.pdf`} className="btn-cv" target="_blank" rel="noopener noreferrer">Download CV</a>
                        </div>
                    </div>
                    <div className="hero-photo">
                        <img src={`${PUB}/assets/img/profile.jpg`} alt="Henry Romero" width={156} height={156} />
                    </div>
                </div>
            </section>

            {/* ──── 01 EXPERIENCE ─────────────────────── */}
            <section className="section">
                <div className="section-head">
                    <span className="sec-num">03</span>
                    <span className="sec-label">Experience</span>
                    <span className="sec-line" />
                </div>
                <div className="exp-timeline">
                    {EXPERIENCE.map((e) => (
                        <div className="exp-entry" key={e.period}>
                            <span className="exp-date">{e.period}</span>
                            <span className="exp-role">{e.role}</span>
                            <p className="exp-desc">{e.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ──── 02 TECHNOLOGIES ───────────────────── */}
            <section className="section">
                <div className="section-head">
                    <span className="sec-num">01</span>
                    <span className="sec-label">Technologies</span>
                    <span className="sec-line" />
                </div>
                <div className="skills-row">
                    <div className="skill-tag">
                        <Svg viewBox="-8 0 272 272"><path d="M0.1,45.5 L125.9,0.7 L255.1,44.7 L234.2,211.2 L125.9,271.1 L19.3,212 L0.1,45.5Z" fill="#E23237"/><path d="M255.1,44.7 L125.9,0.7 L125.9,271.1 L234.2,211.3 L255.1,44.7Z" fill="#B52E31"/><path d="M126.1,32.3 L47.7,206.7 L77,206.2 L92.7,166.8 L163.1,166.8 L180.3,206.7 L208.3,207.2 L126.1,32.3ZM126.3,88.2 L152.8,143.5 L103,143.5 L126.3,88.2Z" fill="#FFF"/></Svg>
                        <span>Angular</span>
                    </div>
                    <div className="skill-tag">
                        <Svg><path fill="rgb(97,218,251)" d="M14.23 12a2.24 2.24 0 1 1-4.47 0 2.24 2.24 0 0 1 4.47 0zm2.65-10.69c-1.35 0-3.11.96-4.89 2.62-1.78-1.65-3.54-2.6-4.89-2.6-.41 0-.78.09-1.1.28-1.38.79-1.68 3.26-.97 6.36C1.98 8.92 0 10.42 0 12c0 1.59 1.99 3.1 5.04 4.03-.7 3.11-.39 5.59.99 6.38.32.19.69.28 1.1.28 1.35 0 3.11-.96 4.89-2.62 1.78 1.65 3.54 2.6 4.89 2.6.41 0 .78-.09 1.1-.28 1.37-.79 1.68-3.26.97-6.36C22.02 15.1 24 13.59 24 12c0-1.59-1.99-3.1-5.04-4.03.7-3.11.39-5.59-.99-6.38a2.18 2.18 0 0 0-1.09-.28z"/></Svg>
                        <span>React</span>
                    </div>
                    <div className="skill-tag">
                        <Svg><path fill="rgb(49,120,198)" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111v2.458a3.95 3.95 0 0 0-.643-.361 5.45 5.45 0 0 0-2.143-.46c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></Svg>
                        <span>TypeScript</span>
                    </div>
                    <div className="skill-tag">
                        <Svg><path fill="rgb(247,223,30)" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.755-1.125 1.755-1.125-.27-.42-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></Svg>
                        <span>JavaScript</span>
                    </div>
                    <div className="skill-tag">
                        <Svg><path fill="rgb(112,168,0)" d="M12 0a12 12 0 1 0 0 24A12 12 0 0 0 12 0zm-.002 2.4c.321 0 .641.084.922.247l2.936 1.737c.082.045.197.045.272 0l8.795-5.076A10.3 10.3 0 0 1 22.064 4.8l-9.94 5.737L2.184 4.8a10.3 10.3 0 0 1 1.141-1.492l8.795 5.076c.082.047.197.047.272 0L11.998 2.4zm-9.664 4.07l9.664 5.578 9.664-5.578v9.315L12 21.36l-9.666-5.575V6.47z"/></Svg>
                        <span>Node.js</span>
                    </div>
                    <div className="skill-tag">
                        <Svg viewBox="0 0 32 32"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/><path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/><path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/></Svg>
                        <span>HTML</span>
                    </div>
                    <div className="skill-tag">
                        <Svg viewBox="0 0 32 32"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/><path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/><path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/></Svg>
                        <span>CSS</span>
                    </div>
                    <div className="skill-tag">
                        <Svg viewBox="0 0 48 48"><path fill="#37474f" d="M22.9 3.3c.68-.38 1.52-.38 2.19 0l16.8 9.43c.68.38 1.1 1.08 1.1 1.84v18.87c0 .76-.42 1.47-1.1 1.85l-16.8 9.43c-.68.38-1.52.38-2.19 0L6.1 35.29C5.42 34.9 5 34.2 5 33.43V14.57c0-.77.42-1.47 1.1-1.85L22.9 3.3z"/><path fill="#fff" d="M24 10c7.73 0 14 6.27 14 14s-6.27 14-14 14-14-6.27-14-14 6.27-14 14-14zm0 7c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/><path fill="#fff" d="M34 20H35V28H34zM37 20H38V28H37zM32 25H40V26H32zM32 22H40V23H32z"/></Svg>
                        <span>C#</span>
                    </div>
                    <div className="skill-tag">
                        <Svg><path fill="rgb(119,123,180)" d="M12 5.69C5.37 5.69 0 8.51 0 12s5.37 6.31 12 6.31S24 15.49 24 12c0-3.49-5.37-6.31-12-6.31zM7.01 10.21h-.94l-.52 2.65h.84c.56 0 .97-.1 1.24-.31.27-.21.46-.56.55-1.05.09-.47.05-.8-.12-1-.18-.19-.52-.29-1.05-.29zm5.25 2.44l.54-2.8c.06-.32.04-.54-.07-.65-.11-.12-.34-.17-.69-.17H11.46l-.7 3.62H9.39l1.23-6.33h1.37l-.33 1.68h1.22c.77 0 1.3.13 1.59.4.29.27.38.7.26 1.3l-.57 2.94h-1.39zm7.6-2.27c-.14.26-.33.49-.56.7-.26.25-.58.44-.92.55-.34.11-.77.16-1.29.16h-1.18l-.33 1.68H14.2l1.23-6.33h2.65c.8 0 1.38.21 1.74.63.37.42.48 1 .33 1.75a2.78 2.78 0 0 1-.29.86zM17.77 10.21h-.94l-.52 2.65h.84c.56 0 .97-.1 1.24-.31.27-.21.46-.56.55-1.05.09-.47.05-.8-.13-.99-.17-.19-.52-.3-1.04-.3z"/></Svg>
                        <span>PHP</span>
                    </div>
                    <div className="skill-tag">
                        <Svg viewBox="0 0 32 32"><path fill="#ea2845" d="M18.5 2a1.8 1.8 0 0 0-.56.1c1.6 1.06-.3 2.6.6 3.9a2.24 2.24 0 0 1 1.07-2.24c.28-.24.47-.32.41-.71C19.9 2.41 19.05 2 18.5 2zm2.3.41c-.22 1.12-.5 1.16-1.32 1.89a1.82 1.82 0 0 0-.53 2.19c-3.4-1.32-7.76-2.12-10.95.17-1.15.82-1.85 2-3.27 2.48-.92.31-1.82.22-2.39 1.13A1.41 1.41 0 0 0 2.38 12.1c.17.18.5.29.64.47.08.1.08.2.15.33a2.6 2.6 0 0 0 .56.83c.15.12.65.24.74.37.11.16-.17.8.06.9.16.07.62-.74.67-.82-.09.64-.21 1.78.51.83.34-.45.36-.6.94-.7.38-.07.75-.1 1.12-.12a8.36 8.36 0 0 1 8.62 7.62c-.11-.5-.76-1.3-1.37-1.11-.26.08-.36.53-.53.79a3.77 3.77 0 0 1-.78.87 4.69 4.69 0 0 0-.07-1.45c-.18.75-.55 1.99-1.47 1.79a1.65 1.65 0 0 1-1.33-1.14c-.12-.76.68-1.65-.61-1.71-2.59-.13-1.99 3.68-.46 4.68a3.27 3.27 0 0 0-1.02.28 6.89 6.89 0 0 0 10.28-4.92 7.06 7.06 0 0 1-.02 3.09 7.21 7.21 0 0 1-1.85 3.37c-.31.31-.89.62-1.09.94a13.41 13.41 0 0 0 3.52-.97A11.64 11.64 0 0 1 15.1 30a11.59 11.59 0 0 0 9.3-5.91 11.66 11.66 0 0 1-1.94 4.67 11.53 11.53 0 0 0 4.97-7.78 11.62 11.62 0 0 1 .21 3.5A12.42 12.42 0 0 0 29.53 13.9a15.75 15.75 0 0 0-1.69-3.96 14.84 14.84 0 0 0-.94-1.39c-.13-.17-.84-.81-.84-1 0 3.25-3.5 5.33-6.43 4.46a5 5 0 0 0 4.52-4.16A5 5 0 0 0 20.79 2.41z"/></Svg>
                        <span>NestJs</span>
                    </div>
                    <div className="skill-tag">
                        <Svg><path fill="#FFCA28" d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.818-3.482a.542.542 0 00-.96 0L3.53 17.984z"/></Svg>
                        <span>Firebase</span>
                    </div>
                    <div className="skill-tag">
                        <Svg><path fill="rgb(68,121,161)" d="M16.4 5.5c-.12 0-.19.01-.27.03v.01h.01c.05.1.15.18.21.27.05.11.1.21.15.32l.01-.01c.1-.07.14-.17.14-.33-.04-.05-.05-.09-.08-.14-.04-.07-.13-.1-.18-.15zM5.77 18.7H4.84a50.85 50.85 0 0 0-.27-4.41h-.01l-1.41 4.41H2.45l-1.4-4.41h-.01A72.89 72.89 0 0 0 .85 18.7H0c.06-1.97.19-3.81.41-5.53h1.15l1.34 4.06h.01l1.35-4.06h1.09c.24 2.01.38 3.86.43 5.53zm4.02-4.08c-.38 2.05-.88 3.53-1.49 4.46-.48.72-1.01 1.07-1.58 1.07-.15 0-.34-.05-.57-.14v-.49c.11.02.24.03.39.03.27 0 .48-.08.65-.22.2-.18.3-.38.3-.6 0-.16-.08-.47-.23-.95L6.23 14.61h.91l.73 2.36c.16.54.23.91.2 1.12.4-1.06.68-2.23.84-3.48zm12.32 4.08H19.5v-5.53h.89v4.85h1.74zm-3.32.14-1.02-.5c.09-.08.18-.16.26-.25.43-.51.65-1.26.65-2.25 0-1.83-.72-2.75-2.16-2.75-.7 0-1.25.23-1.65.7-.43.51-.65 1.26-.65 2.24 0 .97.19 1.69.57 2.14.35.41.88.62 1.58.62.26 0 .51-.03.73-.1l1.32.77.36-.62zm-2.16-.84c-.23-.36-.34-.94-.34-1.74 0-1.39.42-2.09 1.27-2.09.44 0 .77.17.98.5.22.36.34.94.34 1.72 0 1.4-.42 2.11-1.27 2.11-.45 0-.77-.17-.98-.5zm-1.66-.42c0 .47-.17.86-.52 1.16-.34.3-.8.45-1.38.45-.54 0-1.06-.17-1.57-.52l.24-.48c.44.22.83.33 1.19.33.33 0 .59-.07.78-.22a.75.75 0 0 0 .3-.62c0-.33-.23-.61-.65-.84-.39-.21-1.16-.66-1.16-.66-.42-.31-.63-.64-.63-1.18 0-.45.16-.81.47-1.08.32-.28.72-.42 1.22-.42.51 0 .98.14 1.4.41l-.21.48a2.73 2.73 0 0 0-1.06-.23c-.28 0-.5.07-.65.21a.69.69 0 0 0-.25.52c0 .33.23.61.67.85.39.21 1.19.67 1.19.67.43.3.65.63.65 1.17z"/></Svg>
                        <span>MySQL</span>
                    </div>
                    <div className="skill-tag">
                        <Svg viewBox="0 0 24 24"><path fill="rgb(185,185,200)" d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h12v2H3v-2zm0 4h18v2H3v-2zm0 4h12v2H3v-2z"/></Svg>
                        <span>SQL Server</span>
                    </div>
                    <div className="skill-tag">
                        <Svg><path fill="rgb(255,45,32)" d="M23.54 10.93L13.07.45a1.55 1.55 0 0 0-2.19 0L8.71 2.63l2.76 2.76c.64-.21 1.38-.07 1.89.44.52.52.66 1.26.44 1.9l2.66 2.66c.64-.22 1.39-.08 1.9.44.72.72.72 1.88 0 2.6-.72.72-1.88.72-2.6 0-.54-.54-.67-1.34-.4-2l-2.49-2.49v6.52c.18.09.34.2.49.35.72.72.72 1.88 0 2.6-.72.72-1.89.72-2.61 0-.72-.72-.72-1.88 0-2.6.18-.18.39-.32.61-.41V8.84c-.22-.09-.42-.22-.6-.4-.55-.55-.68-1.34-.4-2.01L7.64 3.7.45 10.88a1.55 1.55 0 0 0 0 2.19l10.48 10.48c.6.6 1.58.6 2.19 0l10.43-10.43c.6-.6.6-1.58 0-2.19z"/></Svg>
                        <span>Git</span>
                    </div>
                    <div className="skill-tag">
                        <Svg><path fill="rgb(255,45,32)" d="M23.64 5.43a.36.36 0 0 1 .01.1v5.15c0 .13-.07.26-.19.33l-4.32 2.49v4.93c0 .13-.07.26-.19.33L9.93 23.95a.35.35 0 0 1-.35 0L.53 18.75a.38.38 0 0 1-.19-.33V2.97c0-.03 0-.07.01-.1a.37.37 0 0 1 .06-.09l.03-.04c.01-.01.03-.02.04-.03L5.04.05a.38.38 0 0 1 .38 0L9.93 2.65h.002l.08.06.04.03.02.04c.01.02.02.04.02.06l.01.03c.01.03.01.06.01.1v9.65l3.76-2.16V5.53c0-.03 0-.07.01-.1a.49.49 0 0 1 .02-.06l.02-.03.03-.04a.37.37 0 0 1 .04-.03h.001l4.51-2.6a.38.38 0 0 1 .38 0l4.51 2.6c.02.01.03.02.04.03l.04.04.02.03c.01.02.02.04.02.06zm-.74 5.03V6.18l-1.58.91-2.18 1.26v4.28zm-4.51 7.75v-4.29l-2.15 1.23-6.13 3.5v4.32zM1.09 3.62v14.59l8.27 4.76v-4.32l-4.32-2.45H4.04a.38.38 0 0 1-.07-.06l-.04-.03-.03-.04a.49.49 0 0 1-.02-.05.49.49 0 0 1-.01-.06V5.79L1.09 3.62zM5.23.81L1.47 2.97l3.76 2.16 3.76-2.16zm1.96 13.5l2.18-1.26V3.62l-1.58.91-2.18 1.26v9.43zm11.58-10.95l-3.76 2.16 3.76 2.16 3.76-2.16zm-.38 4.98L16.21 7.09l-1.58-.91v4.28l2.18 1.26 1.58.91zm-8.65 9.65l5.51-3.15 2.76-1.57-3.76-2.16-4.32 2.49-3.94 2.27z"/></Svg>
                        <span>Laravel</span>
                    </div>
                </div>
            </section>

            {/* ──── 03 PROJECTS ───────────────────────── */}
            <section className="section">
                <div className="section-head">
                    <span className="sec-num">02</span>
                    <span className="sec-label">Projects</span>
                    <span className="sec-line" />
                </div>
                <div className="projects-grid">
                    {PROJECTS.map((p) => (
                        <div className="project-card" key={p.name}>
                            <div className="project-top">
                                <span className="project-name">{p.name}</span>
                                {'link' in p && p.link
                                    ? <a href={p.link} className="project-ext" target="_blank" rel="noopener noreferrer">↗</a>
                                    : <span className="project-private">Private</span>
                                }
                            </div>
                            <p className="project-desc">{p.desc}</p>
                            <span className="project-date">{p.date}</span>
                            <div className="chip-row">
                                {p.chips.map((ch) => (
                                    <Chip key={ch.l} size="small" label={ch.l} style={{ background: ch.bg, color: 'c' in ch ? (ch as any).c : '#fff', fontSize: '0.65rem', height: 20 }} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ──── 04 CORE COMPETENCIES ──────────────── */}
            <section className="section">
                <div className="section-head">
                    <span className="sec-num">04</span>
                    <span className="sec-label">Core Competencies</span>
                    <span className="sec-line" />
                </div>
                <div className="competencies-card">
                    <p className="comp-subtitle">Technical proficiency in key development domains.</p>
                    <div className="comp-items">
                        {COMPETENCIES.map((c) => (
                            <div key={c.label}>
                                <div className="comp-header">
                                    <span className="comp-label">{c.label}</span>
                                    <span className="comp-pct">{c.pct}%</span>
                                </div>
                                <div className="comp-track">
                                    <div className="comp-fill" style={{ '--pct': `${c.pct}%` } as React.CSSProperties} />
                                </div>
                                <p className="comp-desc">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
