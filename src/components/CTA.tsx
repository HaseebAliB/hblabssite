import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-slate-950/20"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 to-transparent" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to engineer <br />
              your next success?
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed">
              Book a free technical consultation today. We'll discuss your product 
              vision, technical requirements, and provide a clear roadmap for execution.
            </p>
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 py-8 text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl group shadow-lg shadow-indigo-500/20">
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
