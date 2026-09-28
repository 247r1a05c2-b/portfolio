import { ArrowRight, Database, FileText, Layers3, MessageSquareText, Search, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';

const stages = [
  { icon: FileText, title: 'Ingest', text: 'PDF, DOCX and TXT knowledge sources' },
  { icon: Layers3, title: 'Process', text: 'Extract, chunk and prepare document content' },
  { icon: Sparkles, title: 'Embed', text: 'Create semantic representations for retrieval' },
  { icon: Database, title: 'Store', text: 'Index knowledge with ChromaDB' },
  { icon: Search, title: 'Retrieve', text: 'Use hybrid retrieval to find relevant context' },
  { icon: MessageSquareText, title: 'Generate', text: 'Produce grounded answers with Gemini and source traceability' },
];

export function NexaRAGDeepDive() {
  return (
    <AnimatedSection id="nexarag" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">Featured Build</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            NexaRAG <span className="text-gradient">Deep Dive</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            An end-to-end Retrieval-Augmented Generation system designed to turn personal documents into a searchable, grounded knowledge assistant.
          </p>
        </div>

        <div className="glass rounded-3xl border border-border p-6 md:p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" /> GenAI / RAG
              </div>
              <h3 className="text-2xl font-bold mb-4">From documents to grounded answers</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                NexaRAG combines document ingestion, embeddings, vector storage, retrieval and Gemini-based generation into one workflow. The goal is not just to generate an answer, but to ground the response in the user's own knowledge base and preserve source traceability.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'RAG', 'Gemini', 'ChromaDB', 'Embeddings', 'Hybrid Retrieval', 'Streamlit'].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{item}</span>
                ))}
              </div>
            </div>
            <a
              href="https://github.com/247r1a05c2-b/NexaRAG"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-semibold hover:scale-[1.02] transition-transform shrink-0"
            >
              View Source
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="relative bg-card border border-border rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">0{index + 1}</p>
                <h4 className="font-bold mb-1">{stage.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{stage.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
