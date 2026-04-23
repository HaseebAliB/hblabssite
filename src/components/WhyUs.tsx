import { motion } from "motion/react";
import { ShieldCheck, Zap, MessageSquare, UserCheck } from "lucide-react";

const reasons = [
  {
    title: "Engineering-First Approach",
    description: "We focus on clean, scalable architecture from day one, ensuring your product can grow with your business.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Rapid Delivery",
    description: "Our agile methodology and internal component library allow us to ship high-quality MVPs in weeks.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Transparent Communication",
    description: "You'll have direct access to the engineers building your product, with weekly demos and clear updates.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: "Long-term Partnership",
    description: "We don't just build and leave. We provide ongoing support and scaling as your user base grows.",
    icon: <UserCheck className="w-6 h-6" />,
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8 leading-tight">
              We're not just an agency. <br />
              We're your technical co-founders.
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We understand the unique challenges of building a startup because we've 
              done it ourselves. We bring the rigor of enterprise engineering to the 
              speed of a startup.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="bg-slate-50 p-3 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">{reason.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-full" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full" />
            <div className="relative bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-indigo-200 transition-all duration-500 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="text-4xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">In-house Team</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-purple-200 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-4xl font-black text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">24/7</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Support</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-cyan-200 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="text-4xl font-black text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">0</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Hidden Costs</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-emerald-200 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="text-4xl font-black text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">∞</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Scalability</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
