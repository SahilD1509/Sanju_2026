import React, { useState, useEffect } from 'react';
import { Network, Server, Shield, Database, Cloud, Award, Mail, Phone, Linkedin, Download, Code, Activity, Cpu, Wifi, Lock, Globe } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      const sections = ['hero', 'about', 'skills', 'experience', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Routing & Switching', level: 95, icon: <Network size={24} />, category: 'core' },
    { name: 'TCP/IP & Network Protocols', level: 98, icon: <Globe size={24} />, category: 'core' },
    { name: 'Firewall Security', level: 92, icon: <Shield size={24} />, category: 'security' },
    { name: 'Load Balancers (F5)', level: 85, icon: <Activity size={24} />, category: 'infrastructure' },
    { name: 'Data Center Networking', level: 90, icon: <Server size={24} />, category: 'infrastructure' },
    { name: 'Cloud Infrastructure', level: 88, icon: <Cloud size={24} />, category: 'cloud' },
    { name: 'Network Monitoring (SolarWinds, Logic Monitor)', level: 93, icon: <Activity size={24} />, category: 'monitoring' },
    { name: 'Wireless Networks (Cisco Meraki)', level: 87, icon: <Wifi size={24} />, category: 'wireless' }
  ];

  const technologies = [
    { name: 'Cisco IOS', category: 'Routing & Switching' },
    { name: 'Juniper Networks', category: 'Routing & Switching' },
    { name: 'Palo Alto', category: 'Security' },
    { name: 'Fortinet', category: 'Security' },
    { name: 'SonicWALL', category: 'Security' },
    { name: 'F5 Load Balancer', category: 'Infrastructure' },
    { name: 'Cisco ISE', category: 'Security' },
    { name: 'Meraki', category: 'Wireless' },
    { name: 'Aruba', category: 'Wireless' },
    { name: 'BGP, OSPF, EIGRP', category: 'Protocols' },
    { name: 'VLAN, VTP, STP', category: 'Protocols' },
    { name: 'Infoblox', category: 'DNS/IPAM' },
    { name: 'SolarWinds', category: 'Monitoring' },
    { name: 'Logic Monitor', category: 'Monitoring' },
    { name: 'ServiceNow', category: 'ITSM' },
    { name: 'Ekahau', category: 'Wireless' }
  ];

  const experience = [
    {
      company: 'Zones LLC',
      role: 'L3 Network Engineer - Shared NOC',
      period: 'Oct 2024 - September 2025',
      location: 'Bangalore, India',
      projects: 'Result-CX, Core, Cariad, SAC Wireless SCMSDC, ULTA Beauty',
      highlights: [
        'Managing and configuring Cisco & Juniper routers (1700, 1800, 2600, 4300, 7200, Nexus, ASR 1002)',
        'Managing & troubleshooting IBX and data center network infrastructure',
        'Network device upgrades and IOS deployment'
      ]
    },
    {
      company: 'Trianz Consulting Pvt Ltd',
      role: 'Senior Technical Lead - Network',
      period: 'July 2017 - Oct 2024',
      location: 'Bangalore, India',
      projects: 'Equinix Inc Project',
      highlights: [
        'Managed corporate network infrastructure using Science Logic EM7, AppNeta, MRTG, SolarWinds, Meraki',
        'Configured and troubleshot Palo Alto PA-5000, PA-3000, PA-500 firewalls',
        'Performed wireless surveys with Ekahau software',
        'Provided global network engineering support for EMEA, AMER, and Asia-Pacific data centers',
        'Upgraded IOS for Cisco/Juniper switches, PAN OS for Palo Alto, Fortinet, SonicWALL, and Meraki devices',
        'Basic F5 Load Balancer administration and code upgrades',
        'Network availability improvement from 80% to 95% target'
      ]
    },
    {
      company: 'Sahasya Global Solutions Pvt Ltd',
      role: 'Network Specialist',
      period: 'Jan 2017 - June 2017',
      location: 'India',
      projects: 'Equinix Inc Project',
      highlights: [
        'Network planning and implementation',
        'Basic BGP configuration and troubleshooting',
        'ISP coordination and link provisioning'
      ]
    },
    {
      company: 'CIT Solutions',
      role: 'Network NOC Lead',
      period: 'March 2015 - Jan 2017',
      location: 'India',
      highlights: [
        'Network monitoring implementation using "Dude"',
        'Email notification system for fiber cuts',
        '3rd level escalation for ILL and Dark Fiber customers',
        'Team management and 24/7 network support'
      ]
    },
    {
      company: 'Belltele Services',
      role: 'Network NOC Lead',
      period: 'Sep 2009 - March 2015',
      location: 'India',
      highlights: [
        'Enterprise architecture & design',
        'Multi-vendor network environments management',
        'Data center network design',
        'Business continuity and disaster recovery planning'
      ]
    }
  ];

  const certifications = [
    { name: 'ITIL Foundation Certified V4', icon: <Award size={20} /> },
    { name: 'CCNA Certified', icon: <Award size={20} /> },
    { name: 'CCNP Certified', icon: <Award size={20} /> },
    { name: 'Python Network Automation', icon: <Code size={20} /> }
  ];

  return (
    <div className="portfolio">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Network size={28} />
            <span>Sanjay Kumar</span>
          </div>
          <div className="nav-links">
            {['About', 'Skills', 'Experience', 'Certifications', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={activeSection === item.toLowerCase() ? 'active' : ''}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-bg">
          <div className="network-grid"></div>
          <div className="floating-icons">
            <Server className="float-icon icon-1" size={40} />
            <Shield className="float-icon icon-2" size={35} />
            <Cloud className="float-icon icon-3" size={45} />
            <Database className="float-icon icon-4" size={38} />
            <Cpu className="float-icon icon-5" size={42} />
            <Lock className="float-icon icon-6" size={36} />
          </div>
        </div>
        <div className="hero-content">
          <div className="profile-image-container">
            <div className="profile-ring"></div>
            <img src="/profile.png" alt="Sanjay Kumar" className="profile-image" />
          </div>
          <h1 className="hero-title">
            <span className="title-line">Sanjay Kumar</span>
            <span className="title-subtitle">Technical Lead - Network Infrastructure</span>
          </h1>
          <p className="hero-description">
            15+ years of expertise in enterprise network architecture, data center infrastructure, 
            and multi-vendor network environments. Specialized in routing & switching, network security, 
            and cloud infrastructure solutions.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <Server size={24} />
              <div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            <div className="stat-item">
              <Network size={24} />
              <div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Networks Managed</div>
              </div>
            </div>
            <div className="stat-item">
              <Award size={24} />
              <div>
                <div className="stat-number">95%</div>
                <div className="stat-label">Network Uptime</div>
              </div>
            </div>
          </div>
          <div className="hero-cta">
            <a href="/Sanjay_CV.pdf" download className="cta-button primary">
              <Download size={20} />
              Download Resume
            </a>
            <a href="#contact" className="cta-button secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon"><Network size={32} /></span>
            About Me
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                A dynamic professional with over 15 years of comprehensive experience in IT infrastructure support, 
                networking, quality control, and technical solutions. I specialize in designing, implementing, and 
                managing enterprise-grade network infrastructures for global organizations.
              </p>
              <div className="expertise-grid">
                <div className="expertise-card">
                  <Server size={32} />
                  <h3>Infrastructure Design</h3>
                  <p>Expert in end-to-end network planning, migration, and implementation with a focus on scalability and reliability.</p>
                </div>
                <div className="expertise-card">
                  <Shield size={32} />
                  <h3>Network Security</h3>
                  <p>Proficient in configuring and managing enterprise firewalls including Palo Alto, Fortinet, and SonicWALL.</p>
                </div>
                <div className="expertise-card">
                  <Cloud size={32} />
                  <h3>Data Center Networks</h3>
                  <p>Extensive experience managing global data center networks across EMEA, AMER, and Asia-Pacific regions.</p>
                </div>
                <div className="expertise-card">
                  <Activity size={32} />
                  <h3>Network Monitoring</h3>
                  <p>Advanced proficiency in network monitoring tools including SolarWinds, Logic Monitor, and Science Logic EM7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon"><Cpu size={32} /></span>
            Skills & Technologies
          </h2>
          <div className="skills-content">
            <div className="skills-main">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h3>{skill.name}</h3>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="technologies-section">
              <h3 className="tech-title">Technologies & Tools</h3>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="tech-tag">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-category">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon"><Database size={32} /></span>
            Professional Experience
          </h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <h4 className="exp-company">{exp.company}</h4>
                      {exp.projects && <p className="exp-projects">Projects: {exp.projects}</p>}
                    </div>
                    <div className="exp-meta">
                      <span className="exp-period">{exp.period}</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="exp-highlights">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon"><Award size={32} /></span>
            Certifications & Education
          </h2>
          <div className="cert-content">
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-icon">{cert.icon}</div>
                  <h3>{cert.name}</h3>
                </div>
              ))}
            </div>
            <div className="education-section">
              <h3 className="edu-title">Education</h3>
              <div className="edu-card">
                <div className="edu-icon"><Award size={28} /></div>
                <div>
                  <h4>Bachelor of Engineering</h4>
                  <p>Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon"><Mail size={32} /></span>
            Get In Touch
          </h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always open to discussing new opportunities, collaborations, or network infrastructure challenges. 
              Feel free to reach out!
            </p>
            <div className="contact-grid">
              <a href="mailto:sanjay10jay@gmail.com" className="contact-card">
                <div className="contact-icon"><Mail size={28} /></div>
                <div className="contact-info">
                  <h3>Email</h3>
                  <p>sanjay10jay@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919036472942" className="contact-card">
                <div className="contact-icon"><Phone size={28} /></div>
                <div className="contact-info">
                  <h3>Phone</h3>
                  <p>+91-9036472942</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sanjay-kumar-42282621/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon"><Linkedin size={28} /></div>
                <div className="contact-info">
                  <h3>LinkedIn</h3>
                  <p>Connect with me</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Sanjay Kumar. All rights reserved.</p>
            <p className="footer-tagline">Building reliable networks, one connection at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;