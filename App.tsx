import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Code, 
  Newspaper, 
  Layout, 
  BarChart3, 
  ArrowRight,
  Globe,
  Award,
  Zap
} from 'lucide-react';
import { cn } from './utils/cn';

// --- Constants ---

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Performance Marketing', href: '#performance' },
  { name: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    title: 'Content Creation',
    description: 'Strategic social media posts, reels & stories crafted with intention — designed to engage, inform, and convert.',
    icon: Layout,
    details: 'Strategic posting and analytical reporting to ensure a strong ROI.'
  },
  {
    title: 'Social Media Management',
    description: 'Cultivating your optimal social presence through dedicated efforts, scheduling, and community management.',
    icon: Layout,
    details: 'From scheduling to community management — we\'ve got you covered.'
  },
  {
    title: 'Website Development',
    description: 'Engaging, interactive, and conversion-focused websites crafted with expert development teams.',
    icon: Code,
    details: 'Seamless user experiences that drive results.'
  },
  {
    title: 'Article Posting / Press Release',
    description: 'Get featured in credible publications across India with budget-friendly rates for press releases.',
    icon: Newspaper,
    details: 'Boost your authority in the market.'
  },
  {
    title: 'Performance Marketing',
    description: 'ROI-driven ad campaigns leveraging trending topics and data-driven insights.',
    icon: BarChart3,
    details: 'Instagram & other major platform ad management for local domination.'
  },
  {
    title: 'Analytical Insights',
    description: 'Data-driven reports and strategic recommendations for long-term growth.',
    icon: TrendingUp,
    details: 'Strategic decision-making insights.'
  }
];

const PRICING_PLANS = [
  {
    name: 'Neo Package',
    subtitle: 'Starter',
    price: '₹5,000',
    oldPrice: '₹10,000',
    features: [
      '4 imaginative posts',
      '4 engaging reels',
      '4 engaging stories',
    ],
    cta: 'Choose Neo Package',
    highlight: false
  },
  {
    name: 'Upscale Package',
    subtitle: 'Growth (Most Popular)',
    price: '₹7,000',
    oldPrice: '₹13,000',
    features: [
      '5 imaginative posts',
      '5 engaging reels',
      '7 engaging stories',
      'Detailed analytic PDF stats',
      'Strategic decision-making insights'
    ],
    cta: 'Choose Upscale Package',
    highlight: true
  },
  {
    name: 'Upstand Package',
    subtitle: 'Premium',
    price: '₹13,000',
    oldPrice: '₹18,000',
    features: [
      '13 imaginative posts',
      '7 engaging reels',
      '15 engaging stories',
      'Detailed analytic PDF stats',
      'Strategic decision-making insights'
    ],
    cta: 'Choose Upstand Package',
    highlight: false
  }
];

const FAQS = [
  {
    question: 'What platforms do you manage?',
    answer: 'We manage Instagram and other major social media platforms. We also handle website development and press release distribution across Indian media channels.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'While organic growth takes time, most clients begin seeing noticeable engagement improvements within the first month. Performance marketing campaigns can deliver results from day one.'
  },
  {
    question: 'Can I customize a package?',
    answer: 'Absolutely! Our listed packages are starting points. Contact us to discuss a custom plan tailored to your specific business needs.'
  },
  {
    question: 'Do you require a long-term contract?',
    answer: 'We believe in earning your trust through results, not contracts. Our packages are month-to-month, giving you complete flexibility.'
  },
  {
    question: 'Do you provide analytics and reports?',
    answer: 'Yes! Our Upscale and Upstand packages include detailed analytic PDFs and strategic insights. We believe in full transparency with our clients.'
  }
];

// --- Components ---

const GlassCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ 
      y: -10, 
      rotateX: 2, 
      rotateY: -2,
      transition: { duration: 0.3 } 
    }}
    transition={{ duration: 0.6, delay }}
    className={cn("glass-card p-8 rounded-2xl perspective-1000", className)}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-gradient mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 glass-card rounded-xl text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 text-gray-400 glass-card border-t-0 rounded-b-xl -mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Content Creation',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formData;
    
    const whatsappNumber = "918087473770";
    const text = `*New Inquiry from Obsidian Media website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handlePackageInquiry = (packageName: string) => {
    const whatsappNumber = "918087473770";
    const text = `*Inquiry regarding ${packageName}*%0A%0AHi Obsidian Media, I'm interested in the ${packageName}. Please provide more details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background with parallax glows */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 -z-10 bg-obsidian-950"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_20%_20%,#800000_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_80%_80%,#c00000_0%,transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-obsidian-700 rounded-lg flex items-center justify-center font-bold text-xl border border-obsidian-500">O</div>
            <span className="text-xl font-bold tracking-tight">Obsidian <span className="text-obsidian-400">Media</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{link.name}</a>
            ))}
            <a href="#contact" className="bg-obsidian-700 hover:bg-obsidian-600 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border border-obsidian-500/50">
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {NAV_LINKS.map(link => (
                  <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">{link.name}</a>
                ))}
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-obsidian-700 w-full py-4 rounded-xl font-bold text-center">Get Started</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold uppercase tracking-wider text-obsidian-300 mb-8"
            >
              <Zap size={14} className="fill-obsidian-300" />
              Brand Builders | Content Creators | Growth Partners
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
            >
              We Create <span className="text-gradient">Difference.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              We're not just a marketing agency — we're brand builders. From developing viral content to cultivating long-term consumers, we handle it all.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#contact" className="group relative px-8 py-4 bg-obsidian-700 hover:bg-obsidian-600 rounded-full font-bold text-lg transition-all flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(128,0,0,0.3)]">
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
              <a href="#services" className="px-8 py-4 glass hover:bg-white/10 rounded-full font-bold text-lg transition-all">
                View Our Services
              </a>
            </motion.div>
          </div>

          {/* 3D Decor elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-obsidian-800/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-obsidian-400/10 blur-[120px] rounded-full" />
        </section>

        {/* INTRODUCTION */}
        <section id="about" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-obsidian-400 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                  <div className="w-8 h-1 bg-obsidian-400" />
                  Introduction
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for the digital age with a <span className="text-gradient">people-first</span> approach.</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Obsidian Media began as an offline entity, depending on in-person meetings. Today, we have embraced a more contemporary strategy — combining direct meetings with online interactions to enhance connections with our audience.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {['Instagram', 'YouTube', 'Google', 'Performance Marketing'].map((p) => (
                    <div key={p} className="flex items-center gap-3">
                      <CheckCircle2 className="text-obsidian-400" size={20} />
                      <span className="font-semibold text-gray-200">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="aspect-square flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">2026</div>
                  <div className="text-gray-400 text-sm">Founded Official</div>
                </GlassCard>
                <GlassCard className="aspect-square flex flex-col justify-center items-center text-center mt-8">
                  <div className="text-4xl font-bold text-gradient mb-2">Hybrid</div>
                  <div className="text-gray-400 text-sm">Online + Offline</div>
                </GlassCard>
                <GlassCard className="aspect-square flex flex-col justify-center items-center text-center -mt-8">
                  <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-gray-400 text-sm">ROI Focused</div>
                </GlassCard>
                <GlassCard className="aspect-square flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">Data</div>
                  <div className="text-gray-400 text-sm">Driven Insights</div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="py-20 md:py-32 bg-obsidian-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle title="Our Vision" subtitle="Our vision is to deliver the best return on investment (ROI) for our clients while fostering long-term success." />
            
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-obsidian-300">Vision 01 — Creative & Profitable</h3>
                <p className="text-gray-400 leading-relaxed">
                  Make your business creative and unforgettable while ensuring profitability through strategic marketing strategies tailored specifically for our clients.
                </p>
              </GlassCard>
              <GlassCard className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-obsidian-300">Vision 02 — Captivate & Convert</h3>
                <p className="text-gray-400 leading-relaxed">
                  Captivating the audience with engaging content that leaves a lasting impression on our client's business — turning viewers into loyal customers.
                </p>
              </GlassCard>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center italic text-2xl text-gray-500 font-serif"
            >
              "We create difference."
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle title="Our Services" subtitle="A full spectrum of brand-building solutions tailored to your business needs." />
            
            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <GlassCard key={s.title} delay={i * 0.1} className="group hover:bg-obsidian-800/20">
                  <div className="w-14 h-14 bg-obsidian-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="text-obsidian-300" size={30} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{s.description}</p>
                  <div className="pt-4 border-t border-white/5 text-xs text-obsidian-400 font-semibold uppercase tracking-wider">
                    {s.details}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* PERFORMANCE MARKETING */}
        <section id="performance" className="py-20 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <GlassCard className="bg-obsidian-900/60 p-12 md:p-20 overflow-hidden relative border-obsidian-500/30">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-obsidian-400 to-transparent" />
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Performance <span className="text-gradient">Marketing</span></h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    We leverage trending topics and data-driven insights to craft campaigns that deliver a better ROI than anticipated. This represents a crucial decision point for businesses aiming for sustainable growth.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {[
                      'Trend-based campaign strategy',
                      'Data-driven audience targeting',
                      'Local market domination',
                      'Multi-platform ad management',
                      'Continuous optimization for maximum ROI'
                    ].map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-obsidian-500/20 flex items-center justify-center">
                          <CheckCircle2 size={14} className="text-obsidian-400" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="px-8 py-4 bg-white text-obsidian-950 font-bold rounded-full hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                    Start Your Campaign <ArrowRight size={20} />
                  </a>
                </div>
                <div className="relative">
                  <div className="aspect-square glass rounded-3xl p-8 flex flex-col justify-between border-obsidian-500/20 shadow-[0_0_50px_rgba(128,0,0,0.15)]">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Total Campaign ROI</div>
                        <div className="text-3xl font-bold text-white">+245.8%</div>
                      </div>
                      <div className="p-3 bg-obsidian-500/20 rounded-xl">
                        <TrendingUp className="text-obsidian-400" />
                      </div>
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex-1 bg-obsidian-500 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Decorative blobs */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-obsidian-500/20 blur-3xl rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-obsidian-300/20 blur-3xl rounded-full" />
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 md:py-32 bg-obsidian-900/10">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle 
              title="Our Services Pricing" 
              subtitle="Choose a plan that fits your brand's needs and budget. All packages include creative content tailored to your brand identity." 
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {PRICING_PLANS.map((plan, i) => (
                <GlassCard 
                  key={plan.name} 
                  delay={i * 0.1}
                  className={cn(
                    "relative flex flex-col",
                    plan.highlight ? "border-obsidian-500 shadow-[0_0_40px_rgba(128,0,0,0.2)] scale-105 z-10" : ""
                  )}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-obsidian-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-obsidian-400 text-sm font-semibold">{plan.subtitle}</p>
                  </div>
                  <div className="mb-8">
                    <div className="text-gray-500 line-through text-lg">{plan.oldPrice}</div>
                    <div className="text-5xl font-black">{plan.price}<span className="text-lg font-normal text-gray-500">/-</span></div>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map(feat => (
                      <li key={feat} className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckCircle2 size={18} className="text-obsidian-500 flex-shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handlePackageInquiry(plan.name)}
                    className={cn(
                      "w-full py-4 rounded-xl font-bold transition-all",
                      plan.highlight ? "bg-obsidian-600 hover:bg-obsidian-500" : "bg-white/5 hover:bg-white/10 border border-white/10"
                    )}
                  >
                    {plan.cta}
                  </button>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle title="Why Choose Us?" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: 'Data-Driven Strategy', desc: 'Every decision backed by analytics', icon: BarChart3 },
                { title: 'Creative Excellence', desc: 'Scroll-stopping content that converts', icon: Layout },
                { title: 'Budget-Friendly', desc: 'Premium quality at affordable rates', icon: Globe },
                { title: 'Dedicated Support', desc: 'Your brand is our priority', icon: Phone },
                { title: 'Proven ROI', desc: 'Campaigns designed for measurable growth', icon: TrendingUp },
                { title: 'Quick Turnaround', desc: 'Fast delivery without compromising quality', icon: Zap },
              ].map((item, i) => (
                <GlassCard key={item.title} delay={i * 0.1} className="p-6">
                  <item.icon className="text-obsidian-400 mb-4" size={24} />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32 bg-obsidian-900/20">
          <div className="max-w-3xl mx-auto px-6">
            <SectionTitle title="FAQ" subtitle="Common questions about our services and process." />
            <div className="space-y-4">
                              {FAQS.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Ready to elevate your brand? Let's start the conversation. Let's build something unforgettable together.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-obsidian-400">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200">Phone</h4>
                      <p className="text-gray-400">+91 8087473770</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-obsidian-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200">Email</h4>
                      <p className="text-gray-400">info@obsidianmedia.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-obsidian-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200">Location</h4>
                      <p className="text-gray-400">Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  <a href="https://www.instagram.com/wtfobsidion?igsh=emJiNmxxYnFtZ3Zp" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-obsidian-500 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              <GlassCard className="p-10 border-white/5">
                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-obsidian-500 transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-obsidian-500 transition-colors" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 8087473770" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-obsidian-500 transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Service Interested In</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-obsidian-500 transition-colors appearance-none"
                    >
                      <option className="bg-obsidian-950">Content Creation</option>
                      <option className="bg-obsidian-950">Social Media Management</option>
                      <option className="bg-obsidian-950">Website Development</option>
                      <option className="bg-obsidian-950">Article Posting</option>
                      <option className="bg-obsidian-950">Performance Marketing</option>
                      <option className="bg-obsidian-950">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4} 
                      placeholder="Tell us about your project..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-obsidian-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-obsidian-700 hover:bg-obsidian-600 rounded-xl font-bold text-lg transition-all shadow-lg shadow-obsidian-500/20">
                    Send Message (via WhatsApp)
                  </button>
                </form>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 bg-obsidian-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-obsidian-700 rounded-lg flex items-center justify-center font-bold text-lg border border-obsidian-500">O</div>
                <span className="text-lg font-bold tracking-tight">Obsidian <span className="text-obsidian-400">Media</span></span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We create difference. Brand builders for the digital age, focused on ROI and sustainable growth.
              </p>
              <p className="text-xs text-gray-600">
                © 2026 Obsidian Media. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-xs text-obsidian-400">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-500 hover:text-white transition-colors text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-xs text-obsidian-400">Services</h4>
              <ul className="space-y-4">
                {SERVICES.slice(0, 4).map(s => (
                  <li key={s.title}>
                    <a href="#services" className="text-gray-500 hover:text-white transition-colors text-sm">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-xs text-obsidian-400">Connect</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-white">
                  <Phone size={16} /> <a href="tel:+918087473770">+91 8087473770</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-white">
                  <Instagram size={16} /> <a href="https://www.instagram.com/wtfobsidion?igsh=emJiNmxxYnFtZ3Zp" target="_blank" rel="noopener noreferrer">@wtfobsidian</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
