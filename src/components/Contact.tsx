import { Mail, MapPin, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { motion } from 'framer-motion';

export function Contact() {
  const { identity } = PORTFOLIO_DATA;

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: identity.email,
      href: `mailto:${identity.email}`,
      color: "text-accent",
      bg: "bg-accent/10",
      cta: "Send Email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: identity.phone,
      href: `tel:${identity.phone.replace(/\s/g, '')}`,
      color: "text-green-500",
      bg: "bg-green-500/10",
      cta: "Call",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "shaik-irfan-0a5b0b326",
      href: identity.linkedin,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      cta: "Connect",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: identity.githubUsername,
      href: identity.github,
      color: "text-highlight",
      bg: "bg-highlight/10",
      cta: "View Profile",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: identity.location,
      href: "https://maps.google.com/?q=Hyderabad,Telangana,India",
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      cta: "View on Map",
    },
  ];

  return (
    <AnimatedSection id="contact" className="py-24 bg-secondary-bg/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg">
            Open to internship opportunities and collaborations. Reach out — I'll get back promptly.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex justify-center mb-14">
          <motion.a
            href={`mailto:${identity.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-white rounded-2xl text-lg font-bold shadow-xl shadow-accent/30 hover:bg-accent/90 transition-colors"
          >
            <Mail className="w-6 h-6" />
            Send Me an Email
            <ExternalLink className="w-5 h-5 opacity-70" />
          </motion.a>
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactCards.map((card, idx) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.label !== "Email" && card.label !== "Phone" ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-4 glass p-5 rounded-2xl border border-border hover:border-accent/40 transition-all cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{card.label}</p>
                <p className="font-semibold text-sm truncate">{card.value}</p>
              </div>
              <span className={`text-xs font-medium ${card.color} opacity-0 group-hover:opacity-100 transition-opacity shrink-0`}>
                {card.cta} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
