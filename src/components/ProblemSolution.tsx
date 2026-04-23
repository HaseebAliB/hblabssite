import { motion } from "motion/react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 group hover:border-red-200 transition-all duration-500 shadow-sm hover:shadow-md"
          >
            <h3 className="text-red-500 font-bold tracking-widest uppercase text-[10px] mb-6">The Problem</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Agencies that over-promise and under-engineer.
            </h2>
            <ul className="space-y-4">
              {[
                "Unreliable timelines and missed deadlines",
                "Spaghetti code that's impossible to scale",
                "Lack of transparency and communication",
                "Hidden costs and technical debt",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
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
            className="bg-slate-900 p-10 md:p-12 rounded-[2.5rem] text-white shadow-xl shadow-slate-900/10 group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full -mr-32 -mt-32" />
            <h3 className="text-indigo-400 font-bold tracking-widest uppercase text-[10px] mb-6">Our Solution</h3>
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
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
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
