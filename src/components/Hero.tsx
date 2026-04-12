import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-purple-500/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-[30%] h-[30%] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
              Startup Agility × Enterprise Engineering
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[1.05]">
              We Build Scalable <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 animate-gradient-x">
                Digital Products
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              From MVP to scale, we partner with ambitious founders to engineer 
              high-performance digital products that drive real business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-10 py-8 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] group">
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-8 text-lg font-bold border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-700 transition-all duration-300">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[11px] font-black uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-slate-300 transition-colors">Startup-friendly delivery</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-slate-300 transition-colors">MVP in weeks, not months</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-slate-300 transition-colors">End-to-end development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
