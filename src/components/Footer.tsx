import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { LogoIcon } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <LogoIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                HB<span className="text-indigo-500">Labs</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Engineering scalable digital products with a focus on quality and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services#web" className="hover:text-indigo-400 transition-colors">Web Development</Link></li>
                <li><Link to="/services#mobile" className="hover:text-indigo-400 transition-colors">Mobile Apps</Link></li>
                <li><Link to="/services#saas" className="hover:text-indigo-400 transition-colors">SaaS Solutions</Link></li>
                <li><Link to="/services#seo" className="hover:text-indigo-400 transition-colors">SEO Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                <li><Link to="/#process" className="hover:text-indigo-400 transition-colors">Our Process</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-indigo-500" />
              <a href="mailto:hello@hblabs.co" className="hover:text-white transition-colors">hello@hblabs.co</a>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-indigo-500 mt-1" />
              <div>
                <p className="text-white">Karachi, Pakistan</p>
                <p>Engineering Hub</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 HBLabs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
