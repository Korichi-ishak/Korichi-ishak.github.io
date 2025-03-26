import { FaLinkedin, FaGithub, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import FloatingIcons from '../components/FloatingIcons';
import PageTransition from '../components/PageTransition';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const wpProjects = [
    { title: "EAG Video Editor", description: "Elegant video editing website powered by WordPress.", technologies: ["WordPress", "UI/UX Design"], link: "https://eagvideoeditor.com" },
    { title: "Diego De La Fuintes", description: "Professional portfolio website.", technologies: ["WordPress"], link: "https://diegodelafuintes.fr" },
    { title: "Qorrolli Renovation", description: "Renovation services website.", technologies: ["WordPress"], link: "https://qorrollirenovation.fr" },
    { title: "Maison Chevalier", description: "Luxury real-estate showcase.", technologies: ["WordPress"], link: "https://maison-chevalier.fr" },
    { title: "Between Us", description: "Modern creative site.", technologies: ["WordPress"], link: "https://between-us.fr" },
    { title: "Drip Drop DZ", description: "Innovative design platform.", technologies: ["WordPress"], link: "https://dripdropdz.com" },
    { title: "Belfort Dzair", description: "Corporate website with modern design.", technologies: ["WordPress"], link: "https://belfortdzair.com" },
    { title: "Breizh Agency", description: "Agency portfolio website.", technologies: ["WordPress"], link: "https://breizh-agency.fr" },
    { title: "Nerolia Propreté", description: "Clean and professional cleaning services site.", technologies: ["WordPress"], link: "https://nerolia-proprete.fr" },
    { title: "Plombi", description: "Innovative plumbing services website.", technologies: ["WordPress"], link: "https://plombi.live-website.com" },
    { title: "EF Énergie Solutions", description: "Energy solutions website.", technologies: ["WordPress"], link: "https://efenergiesolutions.fr" },
    { title: "AD EauPro", description: "Water solutions platform.", technologies: ["WordPress"], link: "https://ad-eaupro.fr" },
  ];

  const mobileProjects = [
    { title: "Wassalni", description: "Carpooling mobile app.", technologies: ["React Native", "Flutter"], link: "https://example.com/wassalni" },
    { title: "Clinical", description: "Medical mobile application.", technologies: ["React Native"], link: "https://example.com/clinical" },
    { title: "Astrolabs", description: "Mental health & personal assistance app.", technologies: ["Flutter"], link: "https://example.com/astrolabs" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
        <FloatingIcons />
        
        {/* Modern navbar */}
        <nav className="fixed top-0 left-0 w-full glass z-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Ishak Korichi
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section id="about" className="section min-h-[80vh] flex items-center justify-center">
            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-6">
                <span className="text-lg md:text-xl text-blue-500 dark:text-blue-400 font-mono">
                  Hi, my name is
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold mt-2 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Ishak Korichi.
                  </span>
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-700 dark:text-gray-300">
                  <TypeAnimation
                    sequence={[
                      'Backend Developer',
                      1500,
                      'Data Analyst',
                      1500,
                      'Full Stack Engineer',
                      1500,
                      'WordPress Expert',
                      1500
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h2>
              </div>
              <p className="text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in building high-performance, scalable backend solutions and 
                data pipelines. Currently pursuing my Master's in Big Data Management while 
                developing cutting-edge web and mobile applications.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#contact" 
                  className="btn flex items-center justify-center space-x-2 px-8 py-3"
                >
                  <span>Get In Touch</span>
                  <FaArrowRight />
                </a>
                <a 
                  href="#projects" 
                  className="btn bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-3"
                >
                  View My Work
                </a>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-700 dark:text-gray-300">
                WordPress Websites
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wpProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-700 dark:text-gray-300">
                Mobile Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mobileProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="section bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
            <h2 className="section-title">What People Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard
                quote="Ishak delivered our WordPress site ahead of schedule with exceptional attention to detail. His technical expertise is matched only by his professionalism."
                author="Jean Dupont"
                role="CEO, Maison Chevalier"
              />
              <TestimonialCard
                quote="The backend architecture Ishak implemented reduced our API response times by 60%. He's a true expert in Node.js and database optimization."
                author="Sarah Johnson"
                role="CTO, Aurafolio"
              />
              <TestimonialCard
                quote="Working with Ishak on our mobile app was a pleasure. He translated complex requirements into elegant solutions with React Native."
                author="Mohamed Ali"
                role="Product Manager, Wassalni"
              />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section">
            <h2 className="section-title">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Technical Skills</h3>
                <SkillBar name="Node.js" level={90} />
                <SkillBar name="React" level={85} />
                <SkillBar name="MongoDB" level={88} />
                <SkillBar name="Python" level={80} />
                <SkillBar name="Data Analysis" level={85} />
              </div>
              
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Professional Skills</h3>
                <SkillBar name="Problem Solving" level={92} />
                <SkillBar name="Team Collaboration" level={88} />
                <SkillBar name="Project Management" level={85} />
                <SkillBar name="Communication" level={90} />
                <SkillBar name="UI/UX Design" level={75} />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <SkillCategory 
                title="Languages" 
                skills={["JavaScript", "Python", "Go", "R"]} 
                icon="💻"
              />
              <SkillCategory 
                title="Frameworks" 
                skills={["Node.js", "React", "React Native", "Flutter"]} 
                icon="🛠️"
              />
              <SkillCategory 
                title="Databases" 
                skills={["MongoDB", "PostgreSQL", "Firebase"]} 
                icon="🗄️"
              />
              <SkillCategory 
                title="Other" 
                skills={["WordPress", "UI/UX Design", "REST APIs", "JWT Auth"]} 
                icon="✨"
              />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section">
            <h2 className="section-title">Experience</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <ExperienceCard
                role="Backend Developer & Data Analyst"
                company="Aurafolio"
                period="Jun 2023 - Present"
                points={[
                  "Designed high-performance APIs with Node.js/Express",
                  "Optimized databases (MongoDB, Firebase, MySQL) improving performance by 40%",
                  "Integrated cloud services & implemented authentication systems",
                  "Deployed scalable architectures"
                ]}
              />
              <ExperienceCard
                role="Freelance Developer"
                company="WordPress & UI/UX"
                period="Mar 2023 - Present"
                points={[
                  "Interactive UI/UX prototyping",
                  "Developed high-performance WordPress websites"
                ]}
              />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <h2 className="section-title">Get In Touch</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">
                  Let's talk about your project
                </h3>
                <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm currently available for freelance work and full-time positions. 
                  Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">ishak@example.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">+213 541 945 025</span>
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-6">
                  <a href="https://linkedin.com/in/ishak-korichi-77a398321" target="_blank" className="text-3xl text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Chrestiondior77" target="_blank" className="text-3xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    <FaGithub />
                  </a>
                  <a href="https://wa.me/213541945025" target="_blank" className="text-3xl text-green-500 hover:text-green-700 dark:hover:text-green-400 transition-colors">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg mb-2">Let's build something amazing together</p>
            <p>© {new Date().getFullYear()} Ishak Korichi. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}

// New SkillCategory component
function SkillCategory({ title, skills, icon }) {
  return (
    <div className="card">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

// New ExperienceCard component
function ExperienceCard({ role, company, period, points }) {
  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold">{role}</h3>
          <p className="text-blue-500">{company}</p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
      </div>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex">
            <span className="text-blue-500 mr-2">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}