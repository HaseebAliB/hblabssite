import { motion } from "motion/react";
import { ShieldCheck, Zap, MessageSquare, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhyUs from "@/components/WhyUs";

const values = [
  {
    title: "Radical Transparency",
    description: "No hidden costs, no technical jargon. We provide clear, honest communication at every step of the development process.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: "Engineering Excellence",
    description: "We don't cut corners. Every line of code is written with performance, security, and scalability in mind.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Speed to Market",
    description: "We use modern agile methodologies and pre-built internal components to ship your product faster without sacrificing quality.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Long-term Partnership",
    description: "We don't just build and leave. We become your technical partners, helping you scale and iterate as your business grows.",
    icon: <UserCheck className="w-6 h-6" />,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-8 leading-tight">
              Engineering the Future <br />
              of Digital Products.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 text-lg leading-relaxed">
              <p>
                HBLabs was founded on a simple principle: high-quality software engineering 
                should be accessible to ambitious startups. We saw too many founders struggling with 
                unreliable agencies or slow development cycles, and we decided to build a different 
                kind of partner.
              </p>
              <p>
                Our team is composed of senior engineers who have built and scaled products for 
                global enterprises and high-growth startups. We bring that same level of 
                rigor and expertise to every project we touch, regardless of size.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-slate-600">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
              >
                <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Us Section */}
        <WhyUs />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-indigo-500/20"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10 leading-tight">
            Ready to build your next <br className="hidden md:block" />
            idea with us?
          </h2>
          <Button asChild className="bg-white text-indigo-600 hover:bg-white/90 rounded-full px-10 py-8 text-xl font-bold relative z-10 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </div>
);
}
