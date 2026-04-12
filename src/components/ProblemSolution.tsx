import { motion } from "motion/react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-10 md:p-12 rounded-[2.5rem] border border-slate-800 group hover:border-red-500/20 transition-all duration-500"
          >
            <h3 className="text-red-500 font-bold tracking-widest uppercase text-xs mb-6">The Problem</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Agencies that over-promise and under-engineer.
            </h2>
            <ul className="space-y-4">
              {[
                "Unreliable timelines and missed deadlines",
                "Spaghetti code that's impossible to scale",
                "Lack of transparency and communication",
                "Hidden costs and technical debt",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-10 md:p-12 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-500/20 group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32 group-hover:bg-white/10 transition-colors duration-700" />
            <h3 className="text-indigo-200 font-bold tracking-widest uppercase text-xs mb-6">Our Solution</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Engineering-led development with radical transparency.
            </h2>
            <ul className="space-y-4">
              {[
                "Fixed timelines and predictable delivery",
                "Clean, scalable, enterprise-grade code",
                "Direct access to senior engineers",
                "Transparent pricing and no technical debt",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-indigo-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
