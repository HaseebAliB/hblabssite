import { motion } from "motion/react";
import { Code2, Database, Layout, Smartphone, Globe, Cpu } from "lucide-react";

const techs = [
  { name: "React", icon: <Layout className="w-6 h-6" /> },
  { name: "Next.js", icon: <Globe className="w-6 h-6" /> },
  { name: "TypeScript", icon: <Code2 className="w-6 h-6" /> },
  { name: "Node.js", icon: <Cpu className="w-6 h-6" /> },
  { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
  { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs">Our Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Modern tools for modern products.</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 group cursor-default"
            >
              <div className="text-white group-hover:text-indigo-500 transition-colors">{tech.icon}</div>
              <span className="text-lg font-bold text-slate-400 group-hover:text-white transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
