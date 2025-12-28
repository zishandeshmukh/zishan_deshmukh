'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import HackathonCard from '@/components/HackathonCard';
import CertificationCard from '@/components/CertificationCard';

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

const skills = [
  { category: 'Programming', icon: '⚡', items: ['C', 'C++', 'Python', 'Embedded C'] },
  { category: 'CAD & Design', icon: '✏️', items: ['AutoCAD', 'SolidWorks', 'CATIA', 'Fritzing'] },
  { category: 'Engineering Software', icon: '📊', items: ['MATLAB', 'Simulink', 'PID Tuning'] },
  { category: 'Drone Systems', icon: '🚁', items: ['Mission Planner', 'FlySky', 'Betaflight'] },
  { category: 'Flight Controllers', icon: '🎮', items: ['KK2.1.5', 'APM 2.5', 'Pixhawk', 'F4/F7'] },
  { category: 'Embedded Systems', icon: '🔌', items: ['Arduino', 'ESP32', 'STM32', 'Raspberry Pi'] },
];

const hackathons = [
  { title: '1st Place Winner', event: 'Hackathon Nagpur 2024', date: 'October 2024', description: 'Led backend development for an innovative IoT-based automation solution. Demonstrated exceptional problem-solving and technical leadership.', type: 'won' as const, youtubeId: 'YOUR_VIDEO_ID_1', certificateLink: 'https://drive.google.com/your-cert-1', githubLink: 'https://github.com/zishandeshmukh/hackathon-project-1' },
  { title: '1st Place Winner', event: 'Tech Innovation Challenge', date: 'August 2024', description: 'Developed a smart drone monitoring system with real-time telemetry and autonomous flight capabilities.', type: 'won' as const, youtubeId: 'YOUR_VIDEO_ID_2', certificateLink: 'https://drive.google.com/your-cert-2', githubLink: 'https://github.com/zishandeshmukh/hackathon-project-2' },
  { title: '1st Place Winner', event: 'Engineering Hackathon', date: 'March 2024', description: 'Created an innovative robotics solution combining mechanical design with intelligent control systems.', type: 'won' as const, youtubeId: 'YOUR_VIDEO_ID_3', certificateLink: 'https://drive.google.com/your-cert-3', githubLink: 'https://github.com/zishandeshmukh/hackathon-project-3' },
  { title: 'Top 10 Finalist', event: 'National Robotics Competition', date: 'January 2024', description: 'Participated in national-level robotics competition with autonomous navigation system.', type: 'participated' as const, certificateLink: 'https://drive.google.com/your-cert-4', githubLink: 'https://github.com/zishandeshmukh' },
  { title: 'Participant', event: 'Smart India Hackathon', date: 'December 2023', description: 'Worked on IoT-based environmental monitoring solution for smart cities.', type: 'participated' as const, certificateLink: 'https://drive.google.com/your-cert-5' },
];

const certifications = [
  { title: 'MATLAB & Simulink Fundamentals', issuer: 'MathWorks', date: '2024', icon: '🔧', skills: ['Control Systems', 'Simulation', 'Data Analysis'], certificateLink: 'https://drive.google.com/your-matlab-cert' },
  { title: 'AutoCAD Professional', issuer: 'Autodesk', date: '2024', icon: '✏️', skills: ['2D Drafting', '3D Modeling', 'Technical Drawing'], certificateLink: 'https://drive.google.com/your-autocad-cert' },
  { title: 'SolidWorks CSWA', issuer: 'Dassault Systèmes', date: '2024', icon: '🎯', skills: ['3D CAD', 'Assembly', 'Drawings'], certificateLink: 'https://drive.google.com/your-solidworks-cert' },
  { title: 'Python for Engineering', issuer: 'Coursera', date: '2023', icon: '🐍', skills: ['NumPy', 'Pandas', 'Automation'], certificateLink: 'https://drive.google.com/your-python-cert' },
  { title: 'UAV Systems & Drone Technology', issuer: 'Zen Technologies', date: '2024', icon: '🚁', skills: ['Assembly', 'Configuration', 'Flight Control'], certificateLink: 'https://drive.google.com/your-uav-cert' },
  { title: 'Embedded Systems with Arduino', issuer: 'Udemy', date: '2023', icon: '⚡', skills: ['Arduino', 'Sensors', 'IoT'], certificateLink: 'https://drive.google.com/your-arduino-cert' },
  { title: 'PID Control & Tuning', issuer: 'LinkedIn Learning', date: '2024', icon: '📊', skills: ['PID', 'Control Theory', 'Optimization'], certificateLink: 'https://drive.google.com/your-pid-cert' },
  { title: 'C/C++ Programming', issuer: 'NPTEL', date: '2023', icon: '💻', skills: ['C', 'C++', 'Data Structures'], certificateLink: 'https://drive.google.com/your-cpp-cert' },
];

const projects = [
  { title: 'Quadcopter with KK2.1.5', description: 'Built and configured a stable quadcopter using KK2.1.5 flight controller with manual PID tuning for optimal flight characteristics.', tech: ['KK2.1.5', 'FlySky', 'LiPo', 'BLDC Motors'], github: 'https://github.com/zishandeshmukh' },
  { title: 'APM 2.5 Autonomous Drone', description: 'GPS-enabled drone with autonomous waypoint navigation using Mission Planner for flight planning and real-time telemetry.', tech: ['APM 2.5', 'GPS', 'Mission Planner', 'Telemetry'], github: 'https://github.com/zishandeshmukh' },
  { title: 'Car Robot with Obstacle Detection', description: 'Remote-controlled robot with ultrasonic sensors and ESP32 for autonomous navigation and obstacle avoidance.', tech: ['ESP32', 'L298N', 'Ultrasonic', 'C++'], github: 'https://github.com/zishandeshmukh' },
  { title: 'Farming Automation Robot', description: 'Multi-functional agricultural robot for seeding, fertilizing, and watering with Bluetooth control.', tech: ['Arduino', 'Bluetooth', 'Motors', 'Sensors'], github: 'https://github.com/zishandeshmukh' },
  { title: 'Heat Island Mapping System', description: 'IoT-based environmental monitoring with real-time temperature mapping and analysis.', tech: ['IoT', 'Python', 'Sensors', 'Web'], github: 'https://github.com/zishandeshmukh' },
  { title: 'YOLOv8 Vehicle Detection', description: 'Real-time vehicle and number plate detection using computer vision for smart parking.', tech: ['Python', 'YOLOv8', 'OpenCV', 'TensorFlow'], github: 'https://github.com/zishandeshmukh' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene3D />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">ZD</a>
          <div className="hidden md:flex gap-8">
            {['About', 'Skills', 'Drones', 'Hackathons', 'Certifications', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">{item}</a>
            ))}
          </div>
          <a href="https://github.com/zishandeshmukh" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to Opportunities
            </div>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Hi, I&apos;m{' '}<span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Zishan Deshmukh</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-slate-400 mb-8 font-medium">
            Mechanical Engineering | Drone Systems Expert | Robotics Enthusiast
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {['UAV Development', 'Flight Controllers', 'PID Tuning', 'Embedded Systems', 'MATLAB', 'CAD Design'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300">{tag}</span>
            ))}
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:-translate-y-1">
              View My Projects
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-cyan-500/50 rounded-xl text-cyan-400 font-bold text-lg hover:bg-cyan-500/10 transition-all hover:-translate-y-1">
              Get In Touch
            </a>
          </motion.div>
          
          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '3+', label: 'Hackathons Won' },
              { value: '10+', label: 'Projects Built' },
              { value: '5+', label: 'Drones Configured' },
              { value: 'AIR 7', label: 'FKDC Rank' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800/50">
                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-4">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-col md:grid md:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="md:col-span-5 w-full flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                {/* Animated ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-70 blur-md group-hover:opacity-100 transition-opacity" />
                {/* Image container */}
                <div className="absolute inset-[3px] bg-slate-950 rounded-full overflow-hidden border-2 border-slate-800 z-10">
                  <img 
                    src="https://i.ibb.co/2Y6dn8V3/Zishan-Deshmukh.png" 
                    alt="Zishan Deshmukh" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-7 space-y-6 text-center md:text-left"
            >
              <div className="space-y-4">
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  I&apos;m a <span className="text-cyan-400 font-semibold">Mechanical Engineering undergraduate</span> at Government College of Engineering, Nagpur, with a deep passion for <span className="text-purple-400 font-semibold">drone technology and robotics</span>.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  With hands-on experience in <span className="text-cyan-400 font-semibold">flight controller programming</span> (KK2.1.5, APM 2.5), PID tuning, and UAV assembly, I&apos;ve built and configured multiple quadcopters for various applications including camera systems and VR navigation.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  As <span className="text-purple-400 font-semibold">Vice President of MESA</span> and Innovation Coordinator at IIC GCOEN, I lead technical initiatives. I&apos;m also running <span className="text-cyan-400 font-semibold">Sciobotics (Konoho Sales)</span> - my IoT startup.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
                <a 
                  href="https://github.com/zishandeshmukh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl text-white font-medium transition-all flex items-center gap-2 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub Profile
                </a>
                <a 
                  href="https://linkedin.com/in/zishandeshmukh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-blue-600/90 hover:bg-blue-600 rounded-xl text-white font-medium transition-all flex items-center gap-2 hover:-translate-y-1 shadow-lg shadow-blue-500/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-center mb-16">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div key={skill.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all group">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-300 font-mono">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Drone Expertise Section */}
      <section id="drones" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-center mb-6">
            Drone <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Extensive hands-on experience with various flight controllers, ground control stations, and RC systems
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎮', title: 'KK2.1.5', desc: 'Multi-rotor configuration and LCD-based PID tuning' },
              { icon: '🛰️', title: 'APM 2.5', desc: 'ArduPilot with GPS waypoints and autonomous modes' },
              { icon: '📡', title: 'Mission Planner', desc: 'Flight planning, monitoring, and data logging' },
              { icon: '📻', title: 'FlySky', desc: 'TX/RX binding, failsafe, and channel mapping' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/20 text-center hover:border-purple-400/50 transition-all group">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-24 px-6 bg-gradient-to-b from-slate-950/50 to-orange-950/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-center mb-6">
            🏆 Hackathon <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Won 3 hackathons and participated in multiple national-level competitions
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hack) => (
              <HackathonCard key={hack.title + hack.event} {...hack} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-center mb-16">
            📜 <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-center mb-16">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-400">{t}</span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <div className="space-y-8">
            {[
              { title: 'Drone Intern', company: 'Zen Technologies Ltd., Hyderabad', date: 'May 2025 – June 2025', desc: 'Built quadcopters with camera and VR navigation. Extended operational range of delivery drones.' },
              { title: 'Vice President', company: 'MESA - Mechanical Engineering Students Association', date: '2024 - Present', desc: 'Leading technical initiatives, organizing workshops, and coordinating competitions.' },
              { title: 'Innovation Coordinator', company: 'IIC GCOEN', date: '2024 - Present', desc: 'Coordinating innovation activities and startup initiatives. Mentoring students.' },
            ].map((exp, i) => (
              <motion.div key={exp.title} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l-2 border-cyan-500/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-slate-950 border-2 border-cyan-500 rounded-full" />
                <div className="p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50">
                  <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                  <p className="text-white font-medium">{exp.company}</p>
                  <p className="text-orange-400 text-sm mb-2">{exp.date}</p>
                  <p className="text-slate-400">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-center mb-16">
            🏅 Awards & <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏎️', title: 'AIR 7 - FKDC', desc: 'Formula Kart Design Challenge Season 8 - Chassis Designer' },
              { icon: '💻', title: '3x Hackathon Winner', desc: 'Won 3 hackathons as Backend & Project Strategy Lead' },
              { icon: '🚀', title: 'Startup Founder', desc: 'Running Sciobotics - Konoho Sales for robotics solutions' },
              { icon: '🧠', title: 'Quiz Champion', desc: 'Multiple college quiz champion across tech domains' },
            ].map((award, i) => (
              <motion.div key={award.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-orange-500/20 text-center hover:border-orange-400/50 transition-all">
                <div className="text-5xl mb-4">{award.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                <p className="text-sm text-slate-400">{award.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black mb-6">
            Let&apos;s <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-slate-400 mb-12 text-lg">
            Open to internship opportunities, collaborations, and interesting projects
          </motion.p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '📧', label: 'Email', value: 'deshmukhzishan06@gmail.com', href: 'mailto:deshmukhzishan06@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+91 8623886205', href: 'tel:+918623886205' },
              { icon: '📍', label: 'Location', value: 'Nagpur, India', href: '#' },
              { icon: '💻', label: 'GitHub', value: 'zishandeshmukh', href: 'https://github.com/zishandeshmukh' },
            ].map((contact) => (
              <motion.a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all group">
                <div className="text-3xl mb-3">{contact.icon}</div>
                <p className="text-slate-500 text-sm mb-1">{contact.label}</p>
                <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{contact.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/50 text-center">
        <p className="text-slate-500">© 2024 Zishan Deshmukh. Built with passion for engineering.</p>
      </footer>
    </main>
  );
}
