'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '../src/components/figma/ImageWithFallback';
import EasterEggSpidey from '../src/components/EasterEggSpidey';
import OriginBadge from '../src/components/OriginBadge';
import { Button } from '../src/components/ui/button';
import { Card } from '../src/components/ui/card';
import { Progress } from '../src/components/ui/progress';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Award, 
  Calendar,
  MapPin,
  ArrowRight,
  Code
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);


  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalXP = Math.floor(scrollProgress * 5); // Simple XP based on scroll progress

  const projectImages = [
    "/images/projects/gatorex.png", // GatorEx - UF marketplace
    "/images/projects/rydify.png", // Rydify - campus ride-sharing
    "/images/projects/vybr.png", // Vybr - student community platform
    "/images/projects/formease.png", // FormEase - AI form builder
    "/images/projects/qrbee.png", // QRBee - QR code generator
    "/images/projects/hackhire.png" // HackHire - coding challenges
  ];

  const studentProjects = [
    {
      title: "GatorEx",
      description: "UF-exclusive marketplace for students to buy, sell, and trade furniture, textbooks, electronics, and sublets",
      tech: ["React", "Node.js", "MongoDB"],
      image: projectImages[0],
      link: "https://www.gatorex.shop/"
    },
    {
      title: "Rydify",
      description: "Campus ride-sharing app that's 50% cheaper than Uber with verified students and secure tracking",
      tech: ["React Native", "Firebase", "Google Maps API"],
      image: projectImages[1],
      link: "https://www.rydify.co/"
    },
    {
      title: "Vybr",
      description: "College-exclusive LLM-powered roommate matching app with integrated social features",
      tech: ["Vue.js", "Express.js", "PostgreSQL"],
      image: projectImages[2],
      link: "https://www.vybr.club/"
    }
  ];

  const startupProjects = [
    {
      title: "FormEase",
      description: "Simple, intuitive, and powerful form builder to streamline data collection with AI assistance",
      impact: "500+ forms created",
      tech: ["Next.js", "OpenAI API", "Supabase"],
      image: projectImages[3],
      link: "https://www.formease.xyz/"
    },
    {
      title: "QRBee",
      description: "Free QR code alternative with advanced analytics and custom branding for businesses",
      impact: "10K+ QR codes generated",
      tech: ["React", "Node.js", "MongoDB"],
      image: projectImages[4],
      link: "https://qrbee.xyz/"
    },
    {
      title: "HackHire",
      description: "Stop hiring from resumes. Start hiring from code with coding challenges and data-driven decisions",
      impact: "10K+ challenges, 500+ companies, 99% accuracy",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      image: projectImages[5],
      link: "https://www.hackhire.dev/"
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "🕷️ Radioactive Bite: First Hackathon",
      company: "India • Superpower: Innovation Drive",
      description: "The origin moment! Got bit by the coding spider at my first hackathon, discovering my passion for rapid innovation in fintech, AI, and web3. Unlocked the superpower of transforming ideas into working code under pressure.",
      badge: "radioactive"
    },
    {
      year: "2021-2023",
      title: "🏆 Champion Era: Hackathon Domination",
      company: "India • Superpower: Competitive Excellence",
      description: "Mastered the art of hackathon victory with 15+ competitions, winning Chainlink Runner-up, StarkNet CC India, and Lightspeed Hackathon. Developed the superpower of building winning solutions in 48 hours.",
      badge: "trophy"
    },
    {
      year: "2023-2025",
      title: "🎓 Knowledge Expansion: MS Computer Science",
      company: "University of Florida • Superpower: Technical Depth",
      description: "Leveled up with advanced studies in Distributed Systems, ML, and Software Engineering. From Gator games to Marston Library coding sessions - gained the superpower of academic rigor combined with real-world application.",
      badge: "brain"
    },
    {
      year: "2024-2025",
      title: "🌐 Web of Solutions: Campus Impact",
      company: "University of Florida • Superpower: Problem Solving",
      description: "Spun a web of campus solutions: GatorEx marketplace, Rydify ride-sharing, and Vybr roommate matching. Unlocked the superpower of identifying and solving real user problems at scale.",
      badge: "web"
    },
    {
      year: "May 2025 - Current",
      title: "🏙️ Startup Skyline: Architecture Mastery",
      company: "Entrepreneur • Superpower: Scalable Systems",
      description: "Now protecting the startup universe with FormEase, QRBee, and HackHire. Developed the ultimate superpower: architecting complex scalable applications with robust technical infrastructure, optimized performance, and seamless user experiences.",
      badge: "skyline"
    }
  ];

  const achievements = [
    {
      title: "Organizer @ NASA Space Apps (2019)",
      year: "2019",
      description: "Led 300+ participants, streamlined e-certificates with automation, and drove event marketing.",
      icon: "🚀"
    },
    {
      title: "Speaker @ MLH 305 Hackathon (2025)",
      year: "2025",
      description: "Shared insights on rapid prototyping and AI-powered MVP building to 200+ students.",
      icon: "🎤"
    },
    {
      title: "Judge @ ShellHacks (2025)",
      year: "2025",
      description: "Evaluated projects across AI, blockchain, and SaaS; mentored student founders on execution & strategy.",
      icon: "⚖️"
    },
    {
      title: "Mentor @ Hackathons (ongoing)",
      year: "Ongoing",
      description: "Guided student + early-stage startup teams in problem-solving, product validation, and technical architecture.",
      icon: "🧭"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* XP Bar */}
      <div className="xp-bar">
        <div className="flex items-center space-x-2 md:space-x-3 mb-2">
          <Code className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
          <span className="comic-font text-primary text-sm md:text-base">LEVEL {Math.floor(totalXP / 200) + 1}</span>
          <span className="comic-text text-xs md:text-sm text-secondary">{totalXP} XP</span>
        </div>
        <div className="w-32 md:w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="xp-progress h-full transition-all duration-500"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="comic-text text-xs text-muted">Progress</span>
          <span className="comic-text text-xs text-muted">{Math.round(scrollProgress)}%</span>
        </div>
      </div>


      {/* Hero Section */}
      <section className="hero-nyc-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* NYC Background Image */}
        <div className="nyc-background"></div>
        
        {/* Dark Miles Palette Overlay */}
        <div className="miles-overlay"></div>
        
        {/* Parallax Elements */}
        <div className="parallax-layer parallax-slow"></div>
        <div className="parallax-layer parallax-medium"></div>
        <div className="parallax-layer parallax-fast"></div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center gap-6">
              <div className="speech-bubble inline-block max-w-lg mx-auto">
                <p className="comic-text">
                  "With great power comes great responsibility... to write clean code!"
                </p>
              </div>

              <div className="name-easter relative inline-block group" role="heading" aria-level={1}>
                <h1 
                  className="hero-title mb-0 comic-zoom" 
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900 }}
                  data-text="SHASHANK JAGANNATHAM"
                >
                  SHASHANK JAGANNATHAM
                </h1>
                {/* Hidden Spider-Man swing easter egg */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-10 pointer-events-none select-none">
                  {/* Hover (desktop) */}
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-150 motion-reduce:transition-none">
                    <div className="origin-top animate-swing motion-reduce:animate-none">
                      <EasterEggSpidey width={40} height={52} />
                    </div>
                  </div>
                  {/* Tap-to-reveal (mobile) */}
                  <div className="md:hidden opacity-0 group-active:opacity-100 transition-opacity duration-150 motion-reduce:transition-none">
                    <div className="origin-top animate-swing motion-reduce:animate-none">
                      <EasterEggSpidey width={40} height={52} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glitch neon-red mb-8" data-text="WEB-SLINGER DEVELOPER" style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', fontWeight: 700 }}>
              WEB-SLINGER DEVELOPER
            </div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="comic-panel max-w-3xl mx-auto mb-8 p-8"
            >
              <p className="comic-text text-white font-semibold px-4 md:px-0" style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', lineHeight: '1.6', textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(255,255,255,0.4)' }}>
                My journey began in 2021 when I got bit by the coding spider at my first hackathon! From hackathon champion to campus problem solver, 
                I swing through the multiverse of modern web development, crafting digital experiences that would impress even the Avengers!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-6 justify-center flex-wrap"
            >
              <a href="https://github.com/shashanka2a" target="_blank" rel="noopener noreferrer" className="comic-button hover-glow">
                LET'S BUILD TOGETHER 🚀
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </a>
              <a href="/resume.pdf" download="Shashank_Jagannatham_Resume.pdf" className="comic-button comic-button-outline hover-glow">
                DOWNLOAD RESUME 📄
              </a>
            </motion.div>
          </motion.div>
        </div>
        
      </section>

      {/* Executive Summary Section - For Recruiters/CTO Audience */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="spider-web-bg"></div>
        
        <div className="container mx-auto">
          {/* Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
          >
            <div className="metric-badge hover-glow">
              <span className="metric-number">6+</span>
              <span className="metric-label">Products Shipped</span>
            </div>
            <div className="metric-badge hover-glow">
              <span className="metric-number">15+</span>
              <span className="metric-label">Hackathon Wins</span>
            </div>
            <div className="metric-badge hover-glow">
              <span className="metric-number">20K+</span>
              <span className="metric-label">Users Impacted</span>
            </div>
            <div className="metric-badge hover-glow">
              <span className="metric-number">100%</span>
              <span className="metric-label">Team Leadership</span>
            </div>
          </motion.div>

          {/* Executive Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="executive-summary-panel hover-glow">
              <h2 className="comic-font text-emphasis mb-6" style={{ fontSize: '2rem', letterSpacing: '3px' }}>
                EXECUTIVE SUMMARY
              </h2>
              <p className="text-readable text-lg leading-relaxed">
                <strong className="text-accent">Full-stack builder & community leader</strong> with proven track record of scaling from student innovation to startup ecosystems. 
                Experienced in <strong className="text-highlight">leading development teams</strong>, shipping products at velocity, and winning competitive hackathons. 
                Ready to architect scalable solutions and drive technical strategy as a <strong className="neon-blue">CTO-ready leader</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <span className="skill-tag">React/Next.js</span>
                <span className="skill-tag">Node.js/Python</span>
                <span className="skill-tag">AI/ML Integration</span>
                <span className="skill-tag">Team Leadership</span>
                <span className="skill-tag">Product Strategy</span>
                <span className="skill-tag">DevOps/AWS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Student Projects */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-blue-900/10 relative">
        <div className="spider-web-bg"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="comic-word-balloon">
              SUPERPOWERS UNLOCKED: STUDENT ERA!
            </div>
            <p className="comic-text text-emphasis max-w-2xl mx-auto" style={{ fontSize: '1.4rem' }}>
              During my MS journey, I developed my <strong className="text-accent">campus problem-solving superpowers</strong> - turning hackathon skills into real-world impact that students actually use!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(255, 0, 150, 0.3)"
                }}
                className="project-card comic-zoom"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="bg-transparent border-none h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 hover:scale-110 hover:hue-rotate-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="comic-font text-strong mb-3" style={{ fontSize: '1.3rem' }}>
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="text-readable comic-text mb-4" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                      {project.description}
                    </p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="comic-font text-blue-400 hover:text-blue-300 p-0 text-lg inline-flex items-center hover:underline"
                    >
                      ENTER PROJECT <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Startup Projects */}
      <section className="py-20 px-6 bg-gradient-to-b from-red-900/10 to-purple-900/10 relative">
        <div className="spider-web-bg"></div>
        <div className="web-pattern"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="speech-bubble mb-8 inline-block max-w-2xl">
              <p className="comic-text" style={{ fontSize: '1.2rem' }}>
                "From campus problem-solving to money-saving startup solutions!"
              </p>
            </div>
            <div className="comic-word-balloon" style={{ borderColor: 'var(--miles-blue)', color: 'var(--miles-blue)' }}>
              SUPERPOWERS EVOLVED: STARTUP BUILDER!
            </div>
            <p className="comic-text text-emphasis max-w-2xl mx-auto mt-4" style={{ fontSize: '1.2rem' }}>
              Now wielding <strong className="text-highlight">entrepreneurial superpowers</strong> - building scalable solutions that save time, money, and create real business value!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startupProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(255, 0, 150, 0.3)"
                }}
                className="project-card comic-zoom"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="bg-transparent border-none h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 hover:scale-110 hover:hue-rotate-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="comic-font text-strong mb-3" style={{ fontSize: '1.3rem' }}>
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="text-readable comic-text mb-4" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                      {project.description}
                    </p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="comic-font text-blue-400 hover:text-blue-300 p-0 text-lg inline-flex items-center hover:underline"
                    >
                      ENTER PROJECT <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-blue-900/10 relative">
        <div className="spider-web-bg"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="comic-word-balloon" style={{ borderColor: 'var(--miles-purple)', color: 'var(--miles-purple)' }}>
              ORIGIN TO SCALABLE SOLUTIONS: THE SUPERPOWER JOURNEY!
            </div>
            <p className="comic-text text-white font-bold max-w-2xl mx-auto px-4" style={{ fontSize: '1.2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,255,255,0.3)' }}>
              From getting bit by the coding spider in 2021 to <strong className="text-accent">architecting complex scalable applications</strong> - here's how each phase unlocked new technical superpowers!
            </p>
          </motion.div>
          
          <div className="relative max-w-5xl mx-auto px-4 md:px-0">
            {/* Spider-Verse Portal Timeline */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-2 md:w-3 h-full">
              <div className="w-full h-full bg-gradient-to-b from-red-500 via-blue-500 to-red-500 rounded-full opacity-80"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-500 via-red-500 to-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-red-500 via-blue-500 to-red-500 rounded-full opacity-40 animate-ping"></div>
            </div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -150 : 150,
                  rotateY: index % 2 === 0 ? -45 : 45
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 md:mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-8 md:ml-0`}>
                  <motion.div 
                    className="superpower-panel p-4 md:p-8 comic-zoom"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: index % 2 === 0 ? 5 : -5,
                      boxShadow: "0 20px 40px rgba(255, 0, 64, 0.4)"
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flex items-center mb-3 md:mb-4">
                      <Calendar className="h-5 w-5 md:h-6 md:w-6 text-accent mr-2 md:mr-3" />
                      <span className="comic-font text-emphasis" style={{ fontSize: '1.2rem' }}>{item.year}</span>
                    </div>
                    <h3 className="comic-font text-strong mb-2 md:mb-3" style={{ fontSize: '1.3rem' }}>
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="comic-text text-highlight mb-2 md:mb-3" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                      {item.company}
                    </p>
                    <p className="text-white font-medium comic-text" style={{ fontSize: '0.9rem', lineHeight: '1.5', textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(255,255,255,0.3)' }}>
                      {item.description}
                    </p>
                    
                  </motion.div>
                </div>
                
                {/* Spidey-Themed Timeline Badge */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-10"
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`timeline-badge ${item.badge}`}>
                    {item.badge === 'radioactive' && '🕷️'}
                    {item.badge === 'trophy' && '🏆'}
                    {item.badge === 'brain' && '🧠'}
                    {item.badge === 'web' && '🕸️'}
                    {item.badge === 'skyline' && '🏙️'}
                  </div>
                  {/* Portal strands */}
                  <div className="absolute inset-0 w-20 h-20 -translate-x-5 -translate-y-5">
                    <div className="absolute inset-0 border-2 border-red-400/40 rounded-full animate-ping"></div>
                    <div className="absolute inset-2 border border-blue-400/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-bounce"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Achievements */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-red-900/10 relative">
        <div className="halftone-bg"></div>
        <div className="web-pattern"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateX: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="speech-bubble mb-8 inline-block max-w-2xl">
              <p className="comic-text" style={{ fontSize: '1.3rem' }}>
                "Every spider needs its web of accomplishments!"
              </p>
            </div>
            <div className="comic-word-balloon" style={{ borderColor: 'var(--miles-red)', color: 'var(--miles-red)' }}>
              🏆 TROPHY ROOM!
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  rotateX: -30,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.4
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(255, 0, 64, 0.4)"
                }}
                className="trading-card p-8 comic-zoom"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="text-4xl filter drop-shadow-lg">{achievement.icon}</div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="comic-font text-strong mb-3" style={{ fontSize: '1.5rem' }}>
                      {achievement.title.toUpperCase()}
                    </h3>
                    <p className="comic-font text-emphasis mb-4" style={{ fontSize: '1.2rem' }}>
                      {achievement.year}
                    </p>
                    <p className="text-white font-medium comic-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(255,255,255,0.3)' }}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                
                {/* Trophy shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent -skew-x-12 animate-pulse"></div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Contact */}
      <section className="py-20 px-6 bg-gradient-to-t from-black via-purple-900/20 to-red-900/10 relative min-h-screen flex items-center">
        <div className="halftone-bg"></div>
        <div className="web-pattern"></div>
        
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="speech-bubble mb-8 md:mb-12 inline-block max-w-3xl mx-4">
              <p className="comic-text px-4" style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)' }}>
                "Your friendly neighborhood developer is just a message away! Let's team up and save the digital world together!"
              </p>
            </div>
            
            <div className="avengers-callout mb-8 md:mb-12">
              <span className="callout-badge">TEAM UP</span>
              <h2 className="callout-text">WEB‑TEAM, ASSEMBLE</h2>
              <p className="callout-sub">Your friendly neighborhood developer is ready.</p>
            </div>
            
            <motion.p 
              className="text-blue-400 comic-text mb-14 md:mb-16 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', lineHeight: '1.6' }}
            >
              Ready to swing into action? Whether you need a hero for your next project or just want to chat about the multiverse of possibilities, I'm here to help!
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-16 md:mb-12 px-6"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="mailto:jagannathamshashank@gmail.com" className="neon-social-icon text-base md:text-base">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 inline align-[-2px]" />
                <span className="hidden sm:inline">jagannathamshashank@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateY: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://github.com/shashanka2a" target="_blank" rel="noopener noreferrer" className="neon-social-icon github text-base md:text-base">
                <Github className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 inline align-[-2px]" />
                <span className="hidden sm:inline">github.com/shashanka2a</span>
                <span className="sm:hidden">GitHub</span>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://linkedin.com/in/shashank-jagannatham" target="_blank" rel="noopener noreferrer" className="neon-social-icon text-base md:text-base">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 inline align-[-2px]" />
                <span className="hidden sm:inline">linkedin.com/in/shashank-jagannatham</span>
                <span className="sm:hidden">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="comic-panel inline-block p-6 mt-10 sm:mt-12"
          >
            <div className="flex items-center justify-center text-primary">
              <MapPin className="h-6 w-6 mr-3 text-accent" />
              <span className="comic-text text-strong" style={{ fontSize: '1.2rem' }}>
                Gainesville, FL - Earth-616
              </span>
            </div>
          </motion.div>
          
        </div>
        
        {/* Final web decoration */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

    </div>
  );
}