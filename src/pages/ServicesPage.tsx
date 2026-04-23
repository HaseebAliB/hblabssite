import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout, Smartphone, Database, Rocket, TrendingUp, Search, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Development",
    icon: <Layout className="w-12 h-12" />,
    description: "We build high-performance, scalable web applications using modern frameworks and robust architecture.",
    features: ["Custom Web Apps", "Responsive Design", "API Integrations", "Intelligent Data Dashboards"],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
    timeline: "4-12 weeks",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    icon: <Smartphone className="w-12 h-12" />,
    description: "Native-quality mobile experiences for iOS and Android designed for performance and user engagement.",
    features: ["Native & Cross-platform", "Push Notifications", "Offline Support", "Smart Features"],
    tech: ["React Native", "Flutter", "Firebase", "Python"],
    timeline: "8-16 weeks",
  },
  {
    id: "saas",
    title: "SaaS Product Engineering",
    icon: <Database className="w-12 h-12" />,
    description: "End-to-end engineering for multi-tenant cloud platforms designed for scalability and security.",
    features: ["Multi-tenant Architecture", "Automated Insights", "Subscription Management", "Predictive Analytics"],
    tech: ["AWS/GCP", "Serverless", "Stripe", "Docker"],
    timeline: "12-24 weeks",
  },
  {
    id: "mvp",
    title: "MVP Development",
    icon: <Rocket className="w-12 h-12" />,
    description: "Fast-track your product to market with a feature-complete MVP designed for rapid validation.",
    features: ["Core Feature Definition", "Rapid Prototyping", "User Feedback Loops", "Scalable Foundation"],
    tech: ["Vite", "Supabase", "Tailwind CSS", "TypeScript"],
    timeline: "4-8 weeks",
  },
  {
    id: "seo",
    title: "SEO Services",
    icon: <Search className="w-12 h-12" />,
    description: "Data-driven search engine optimization strategies to boost your organic visibility and rankings.",
    features: ["Content Optimization", "Keyword Research", "Technical SEO Audits", "Link Building"],
    tech: ["Ahrefs", "SEMrush", "Google Search Console", "Schema.org"],
    timeline: "Ongoing (Monthly)",
  },
  {
    id: "scaling",
    title: "Software Scaling",
    icon: <TrendingUp className="w-12 h-12" />,
    description: "Modernizing and scaling existing applications to handle complex business logic and high traffic.",
    features: ["Performance Optimization", "Automated Infrastructure", "Security Hardening", "System Refactoring"],
    tech: ["Kubernetes", "Redis", "Microservices", "CI/CD"],
    timeline: "Custom",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-8 leading-tight">
            Engineering Excellence <br />
            for Every Stage.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We provide comprehensive software development services designed to 
            take your product from initial concept to global scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 group shadow-sm"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center text-slate-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.tech.map((t) => (
                      <span key={t} className="px-4 py-1.5 bg-white text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 group shadow-lg shadow-indigo-500/20 transition-all duration-300">
                    <Link to="/contact">
                      Start Your {service.title} Project
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-3xl border border-slate-100/50">
                  <div>
                    <h4 className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">Key Features</h4>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4">Typical Timeline</h4>
                      <p className="text-2xl font-bold text-slate-900">{service.timeline}</p>
                    </div>
                    <div className="mt-8 p-6 bg-white border border-indigo-100 rounded-2xl shadow-sm">
                      <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest mb-2">Our Approach</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We use a quality-first engineering approach with automated testing and CI/CD baked in from day one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
