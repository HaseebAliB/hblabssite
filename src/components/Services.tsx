import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Smartphone, Database, Rocket, TrendingUp, Search } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Web Development",
    description: "High-performance, responsive web applications built with modern frameworks and scalable architecture.",
    benefit: "Seamless user experiences and robust functionality.",
    useCase: "E-commerce platforms, custom dashboards, and enterprise portals.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications designed for performance and intuitive user engagement.",
    benefit: "Reach your audience on any device with a polished experience.",
    useCase: "Consumer apps, internal business tools, and on-the-go services.",
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: "SaaS Products",
    description: "End-to-end SaaS engineering, from multi-tenant architecture to automated scaling and security.",
    benefit: "Scalable revenue models with enterprise-grade reliability.",
    useCase: "Software-as-a-Service platforms and cloud-based tools.",
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "MVP Development",
    description: "Rapid prototyping and development of your core features to validate your product in the market quickly.",
    benefit: "Launch in weeks and gather real user feedback faster.",
    useCase: "Startups looking for product-market fit and rapid validation.",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: "SEO Services",
    description: "Comprehensive search engine optimization strategies to improve visibility and drive organic growth.",
    benefit: "Higher rankings and increased high-quality traffic.",
    useCase: "Products needing visibility and brands scaling their reach.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "Product Scaling",
    description: "Optimizing existing software for performance, security, and high-traffic scalability.",
    benefit: "Future-proofed infrastructure and improved reliability.",
    useCase: "Growing products needing infrastructure upgrades.",
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Full-stack engineering for <br className="hidden md:block" />
              modern digital products.
            </h2>
          </div>
          <p className="text-slate-600 max-w-sm">
            We don't just write code. We build business assets that are 
            engineered to last and designed to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 rounded-3xl overflow-hidden group">
                <CardHeader className="pt-8 px-8">
                  <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4 pt-6 border-t border-slate-50">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">Business Benefit</span>
                      <p className="text-sm text-slate-800 font-medium">{service.benefit}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Ideal For</span>
                      <p className="text-sm text-slate-500">{service.useCase}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
