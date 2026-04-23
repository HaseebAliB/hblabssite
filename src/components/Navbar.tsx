import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Menu, X, ChevronDown, Rocket, Layout, Smartphone, Database, Search } from "lucide-react";
import { LogoIcon } from "./Logo";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Web Development",
      href: "/services#web",
      icon: <Layout className="w-4 h-4" />,
    },
    {
      title: "Mobile Apps",
      href: "/services#mobile",
      icon: <Smartphone className="w-4 h-4" />,
    },
    {
      title: "SaaS Products",
      href: "/services#saas",
      icon: <Database className="w-4 h-4" />,
    },
    {
      title: "MVP Development",
      href: "/services#mvp",
      icon: <Rocket className="w-4 h-4" />,
    },
    {
      title: "SEO Services",
      href: "/services#seo",
      icon: <Search className="w-4 h-4" />,
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-700 transition-all duration-300 group-hover:scale-110">
            <LogoIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 transition-colors">
            HB<span className="text-indigo-600">Labs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent transition-colors focus:bg-slate-100 data-[state=open]:bg-slate-100 text-slate-600 hover:text-slate-950">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-slate-200 rounded-xl shadow-xl">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="flex items-center gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50"
                          >
                            <div className="flex items-center gap-2 text-sm font-bold leading-none text-indigo-600">
                              {service.icon}
                              {service.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/#process"
            className="text-sm font-medium text-slate-600 transition-colors px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-950"
          >
            Process
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-slate-600 transition-colors px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-950"
          >
            About
          </Link>
          
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 ml-4 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg transition-colors text-slate-900 hover:bg-slate-100" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">Services</p>
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="flex items-center gap-3 p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-indigo-600">{service.icon}</span>
                {service.title}
              </Link>
            ))}
          </div>
          <Link
            to="/#process"
            className="text-lg font-medium text-slate-600 hover:text-slate-900 p-2"
            onClick={() => setIsOpen(false)}
          >
            Process
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium text-slate-600 hover:text-slate-900 p-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-6 text-lg rounded-xl mt-4">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Book a Consultation
            </Link>
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
