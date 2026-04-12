import { motion } from "motion/react";
import { Search, Lightbulb, Palette, Code, Layers, CheckCircle2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    phase: "Phase 01",
    title: "Discovery & Strategy",
    goal: "Define product vision and technical roadmap.",
    description: "We dive deep into your business goals, target audience, and market landscape. We define the problem we're solving and create a high-level technical strategy.",
    items: ["Stakeholder interviews", "Market analysis", "Feature prioritization", "Technical feasibility study"],
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    phase: "Phase 02",
    title: "Design & Architecture",
    goal: "Create intuitive UX and scalable system design.",
    description: "Our designers craft high-fidelity prototypes while our engineers architect the system for performance and scalability. We focus on user journey and data flow.",
    items: ["UI/UX Design", "Interactive Prototypes", "System Architecture", "Database Schema Design"],
    icon: <Palette className="w-6 h-6" />,
    color: "bg-indigo-500",
  },
  {
    phase: "Phase 03",
    title: "Agile Development",
    goal: "Build the product in iterative, functional sprints.",
    description: "We build your product using modern tech stacks. You get regular updates and can see the progress in real-time. We prioritize clean, maintainable code.",
    items: ["Frontend & Backend Dev", "API Integrations", "Weekly Sprint Demos", "Continuous Integration"],
    icon: <Code className="w-6 h-6" />,
    color: "bg-cyan-500",
  },
  {
    phase: "Phase 04",
    title: "QA & Deployment",
    goal: "Ensure zero-defect delivery and smooth launch.",
    description: "Rigorous testing across devices and scenarios. Once perfected, we handle the deployment to production-ready cloud infrastructure.",
    items: ["Automated Testing", "Performance Optimization", "Cloud Infrastructure Setup", "Production Launch"],
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
  {
    phase: "Phase 05",
    title: "Scale & Support",
    goal: "Monitor performance and iterate based on data.",
    description: "Post-launch, we monitor the system, fix any issues, and help you scale as your user base grows. We become your long-term technical partner.",
    items: ["24/7 Monitoring", "Feature Iteration", "Infrastructure Scaling", "Ongoing Maintenance"],
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-purple-500",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">The Journey from Idea to Scale</h2>
          <p className="text-slate-400 text-lg">
            A transparent, engineering-led process designed to minimize risk and maximize product quality.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2 px-0 lg:px-12">
                  <div className={`p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-all duration-500 group ${
                    index % 2 === 0 ? "text-left" : "text-left lg:text-right"
                  }`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.color} text-white mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform`}>
                      {step.icon}
                    </div>
                    <span className="block text-indigo-400 font-bold text-sm mb-2">{step.phase}</span>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-indigo-200/80 font-medium mb-4 text-sm italic">Goal: {step.goal}</p>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${
                      index % 2 === 0 ? "" : "lg:justify-items-end"
                    }`}>
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Point */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-900 shadow-xl hidden lg:flex">
                  <div className={`w-3 h-3 rounded-full ${step.color}`} />
                </div>

                {/* Empty Side for Desktop */}
                <div className="w-full lg:w-1/2 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
