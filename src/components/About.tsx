import { MapPin, GraduationCap, Calendar, CheckCircle, Code2, BrainCircuit, Terminal, SearchCheck, Boxes } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { motion } from 'framer-motion';

export function About() {
  const quickFacts = [
    { icon: <MapPin className="w-5 h-5" />,        label: "Location",   value: PORTFOLIO_DATA.identity.location },
    { icon: <GraduationCap className="w-5 h-5" />, label: "College",    value: PORTFOLIO_DATA.identity.college },
    { icon: <Calendar className="w-5 h-5" />,      label: "Batch",      value: PORTFOLIO_DATA.identity.duration },
    { icon: <Code2 className="w-5 h-5" />,         label: "Degree",     value: PORTFOLIO_DATA.identity.degree },
    { icon: <CheckCircle className="w-5 h-5" />,   label: "Internship", value: "Available", highlight: true },
  ];

  return (
    <AnimatedSection id="about" className="py-24 bg-secondary-bg/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-10 rounded-3xl border border-border"
        >
          <h3 className="text-2xl font-bold mb-5">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
            {PORTFOLIO_DATA.summary}
          </p>

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Open To</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Software Development Intern', 'Java Development Intern', 'Python Development Intern', 'AI/ML Intern'].map(item => (
                <span key={item} className="px-3 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 text-sm font-medium">{item}</span>
              ))}
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Currently Learning</p>
            <div className="flex flex-wrap gap-2">
              {['Generative AI', 'RAG Systems', 'DSA with Java', 'Machine Learning', 'Full-Stack Development'].map(item => (
                <span key={item} className="px-3 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium">{item}</span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Currently Building</p>
            <div className="bg-card border border-border rounded-2xl p-5">
              <h4 className="font-bold mb-1">NexaRAG — Adaptive AI Knowledge Assistant</h4>
              <p className="text-sm text-muted-foreground">Building a grounded RAG workflow for document knowledge bases using embeddings, ChromaDB, hybrid retrieval, and Gemini.</p>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">What I Bring</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: <BrainCircuit className="w-5 h-5" />, title: 'AI / ML Development', text: 'Hands-on projects across machine learning, NLP, computer vision, GenAI and RAG.' },
                { icon: <Terminal className="w-5 h-5" />, title: 'Software Engineering', text: 'Builds practical applications with Java, Python, React, Flask, Streamlit and SQL.' },
                { icon: <SearchCheck className="w-5 h-5" />, title: 'Problem Solving', text: 'Uses DSA practice and LeetCode to strengthen algorithmic thinking with Java.' },
                { icon: <Boxes className="w-5 h-5" />, title: 'End-to-End Projects', text: 'Works across development, ML pipelines, databases, interfaces and deployment.' },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-2xl p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quickFacts.map((fact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`flex items-start gap-4 p-4 rounded-xl border ${
                  fact.highlight
                    ? 'bg-green-500/5 border-green-500/20'
                    : 'bg-card border-border'
                }`}
              >
                <div className={`p-3 rounded-lg shrink-0 ${fact.highlight ? 'bg-green-500/10 text-green-500' : 'bg-accent/10 text-accent'}`}>
                  {fact.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{fact.label}</p>
                  <p className={`font-semibold text-sm ${fact.highlight ? 'text-green-500' : 'text-foreground'}`}>
                    {fact.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
