import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ArrowRight, Rocket, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
// @ts-ignore
const heroPhoto = '/hero-photo.jpeg';

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-accent font-medium mb-2">Hey, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              {PORTFOLIO_DATA.identity.name}
            </h1>
            
            <div className="text-xl md:text-3xl text-muted-foreground font-medium mb-6 h-[40px]">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'AI & ML Enthusiast',
                  2000,
                  'CSE Undergraduate',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-foreground"
              />
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
              CSE undergraduate building AI/ML and software solutions with Python and Java. Seeking Software Development and AI/ML internship opportunities.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <a href={PORTFOLIO_DATA.identity.github} target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={PORTFOLIO_DATA.identity.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${PORTFOLIO_DATA.identity.email}`} className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="https://raw.githubusercontent.com/247r1a05c2-b/portfolio/main/resume1.docx" download className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform">
                <Download className="w-5 h-5" />
                Resume
              </a>
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-secondary text-foreground border border-border rounded-full font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                Contact Me
                <Mail className="w-5 h-5" />
              </a>
              <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end z-10 w-full max-w-md md:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-highlight rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-background/50 overflow-hidden shadow-2xl">
              <img 
                src={heroPhoto} 
                alt="Shaik Irfan Hussain" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Shaik+Irfan+Hussain&size=512&background=0D8ABC&color=fff";
                }}
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <Rocket className="w-5 h-5 text-accent" />
              <span className="font-bold text-sm">{PORTFOLIO_DATA.majorProjects.length + PORTFOLIO_DATA.otherProjects.length} Projects</span>
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <GraduationCap className="w-5 h-5 text-highlight" />
              <span className="font-bold text-sm">CGPA {PORTFOLIO_DATA.identity.cgpa.split('/')[0]}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-current flex justify-center p-2">
            <div className="w-1 h-3 bg-current rounded-full" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
