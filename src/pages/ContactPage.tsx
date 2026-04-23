import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      details: formData.get("details"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errData = await response.json();
        setError(errData.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Get in Touch</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-8 leading-tight">
                Let's Build <br />
                Something Great.
              </h1>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Ready to start your next project? We're here to help you engineer 
                scalable solutions that drive real business value.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-slate-50 p-4 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Email Us</h4>
                    <p className="text-slate-600">hello@hblabs.tech</p>
                    <p className="text-indigo-600 text-sm mt-1 font-medium">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-slate-50 p-4 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Location</h4>
                    <p className="text-slate-600">Karachi, Pakistan</p>
                    <p className="text-slate-500 text-sm mt-1">Remote-first engineering hub</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-indigo-500/5"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="bg-indigo-600/10 p-6 rounded-full mb-8">
                    <CheckCircle2 className="w-16 h-16 text-indigo-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600 mb-8 max-w-xs">
                    Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-4 rounded-2xl text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                      <Input name="name" placeholder="John Doe" required className="bg-white border-slate-200 focus:border-indigo-600 h-14 rounded-2xl text-slate-900 placeholder:text-slate-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                      <Input name="email" type="email" placeholder="john@example.com" required className="bg-white border-slate-200 focus:border-indigo-600 h-14 rounded-2xl text-slate-900 placeholder:text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Service Needed</label>
                    <select name="service" className="w-full bg-white border border-slate-200 focus:border-indigo-600 h-14 rounded-2xl px-4 text-slate-700 outline-none transition-colors">
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>SaaS Product Engineering</option>
                      <option>MVP Development</option>
                      <option>SEO Services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Budget Range</label>
                    <select name="budget" className="w-full bg-white border border-slate-200 focus:border-indigo-600 h-14 rounded-2xl px-4 text-slate-700 outline-none transition-colors">
                      <option>$300 - $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Project Details</label>
                    <Textarea 
                      name="details"
                      placeholder="Tell us about your project goals and requirements..." 
                      className="bg-white border-slate-200 focus:border-indigo-600 min-h-[150px] rounded-2xl text-slate-900 p-4 placeholder:text-slate-400" 
                      required
                    />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-16 rounded-2xl text-lg font-bold transition-all duration-300 group disabled:opacity-50 shadow-lg shadow-indigo-500/20">
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
