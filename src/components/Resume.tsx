import { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import jsPDF from 'jspdf';
import { motion } from 'framer-motion';

export function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const { identity, summary, skills, majorProjects, education, certifications } = PORTFOLIO_DATA;

      const pdf = new jsPDF('p', 'mm', 'a4');
      const W = pdf.internal.pageSize.getWidth();
      const margin = 15;
      const contentW = W - margin * 2;
      let y = 0;

      const addPage = () => { pdf.addPage(); y = margin; };
      const checkY = (needed: number) => { if (y + needed > 280) addPage(); };

      // ── Header ──
      pdf.setFillColor(15, 23, 42);
      pdf.rect(0, 0, W, 42, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(22);
      pdf.text(identity.name, margin, 16);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.text(identity.title, margin, 23);
      pdf.setFontSize(8.5);
      pdf.text(
        `${identity.email}  |  ${identity.phone}  |  ${identity.location}`,
        margin, 30
      );
      pdf.text(
        `github.com/${identity.githubUsername}  |  linkedin.com/in/shaik-irfan-0a5b0b326`,
        margin, 36
      );

      y = 50;
      pdf.setTextColor(0, 0, 0);

      const sectionHeader = (title: string) => {
        checkY(12);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.setTextColor(56, 189, 248); // accent
        pdf.text(title.toUpperCase(), margin, y);
        y += 1;
        pdf.setDrawColor(56, 189, 248);
        pdf.setLineWidth(0.5);
        pdf.line(margin, y, margin + contentW, y);
        y += 5;
        pdf.setTextColor(0, 0, 0);
      };

      // ── Summary ──
      sectionHeader('Professional Summary');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const sumLines = pdf.splitTextToSize(summary, contentW);
      checkY(sumLines.length * 4.5);
      pdf.text(sumLines, margin, y);
      y += sumLines.length * 4.5 + 6;

      // ── Skills ──
      sectionHeader('Technical Skills');
      pdf.setFontSize(9);
      for (const group of skills) {
        checkY(7);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${group.category}:`, margin, y);
        pdf.setFont('helvetica', 'normal');
        const names = group.items.map((i) => i.name).join(', ');
        const lines = pdf.splitTextToSize(names, contentW - 30);
        pdf.text(lines, margin + 30, y);
        y += Math.max(lines.length * 4.5, 5.5);
      }
      y += 3;

      // ── Projects ──
      sectionHeader('Major Projects');
      for (const p of majorProjects) {
        checkY(20);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(9.5);
        pdf.text(p.title, margin, y);
        y += 4.5;
        pdf.setFont('helvetica', 'italic');
        pdf.setFontSize(8.5);
        pdf.setTextColor(80, 80, 80);
        pdf.text(`Tech: ${p.tech.join(', ')}`, margin, y);
        y += 4;
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(8.5);
        const descLines = pdf.splitTextToSize(p.description, contentW);
        checkY(descLines.length * 4);
        pdf.text(descLines, margin, y);
        y += descLines.length * 4;
        if (p.github) {
          pdf.setTextColor(56, 189, 248);
          pdf.text(`GitHub: ${p.github}`, margin, y);
          pdf.setTextColor(0, 0, 0);
          y += 4;
        }
        if (p.demo) {
          pdf.setTextColor(56, 189, 248);
          pdf.text(`Live: ${p.demo}`, margin, y);
          pdf.setTextColor(0, 0, 0);
          y += 4;
        }
        y += 3;
      }

      // ── Education ──
      sectionHeader('Education');
      pdf.setFontSize(9);
      for (const edu of education) {
        checkY(14);
        pdf.setFont('helvetica', 'bold');
        pdf.text(edu.degree, margin, y);
        y += 4.5;
        pdf.setFont('helvetica', 'normal');
        pdf.text(`${edu.institution}  |  ${edu.duration}  |  ${edu.score}`, margin, y);
        y += 6;
      }

      // ── Certifications ──
      sectionHeader('Certifications');
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      for (const cert of certifications) {
        checkY(6);
        pdf.text(`• ${cert.name} — ${cert.issuer} (${cert.year})`, margin, y);
        y += 5;
      }

      pdf.save(`${identity.name.replace(/\s+/g, '_')}_Resume.pdf`);
    } catch (err) {
      console.error('PDF generation failed', err);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AnimatedSection id="resume" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-gradient">Resume</span>
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Download my ATS-friendly resume — includes projects, skills, education, certifications, and internships.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-border rounded-3xl p-12 flex flex-col items-center gap-8"
        >
          {/* Icon */}
          <div className="w-24 h-24 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center">
            <FileText className="w-12 h-12 text-accent" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">{PORTFOLIO_DATA.identity.name}</h3>
            <p className="text-muted-foreground">{PORTFOLIO_DATA.identity.title}</p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3">
            {['AI / ML Projects', 'Java & Python', '3 Internships', 'CGPA 8.46'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-secondary border border-border rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            disabled={isDownloading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-10 py-4 bg-accent text-white rounded-2xl text-lg font-bold shadow-xl shadow-accent/30 hover:bg-accent/90 transition-colors disabled:opacity-60"
          >
            {isDownloading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating PDF…
              </>
            ) : (
              <>
                <Download className="w-6 h-6" />
                Download Resume (PDF)
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
