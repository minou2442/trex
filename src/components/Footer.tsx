import { Heart, Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import TrexByteLogo from "../assets/trexbyte-logo.png"; // ✅ Import the logo

export default function Footer() {
  const { t } = useTranslation();
  
  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#", color: "hover:text-blue-500" },
    { icon: <Instagram size={20} />, url: "#", color: "hover:text-pink-500" },
    { icon: <Linkedin size={20} />, url: "#", color: "hover:text-blue-600" }
  ];

  const quickLinks = [
    { name: t("footer.links.home"), href: "#home" },
    { name: t("footer.links.about"), href: "#about" },
    { name: t("footer.links.services"), href: "#services" },
    { name: t("footer.links.projects"), href: "#projects" },
    { name: t("footer.links.contact"), href: "#contact" },
  ];

  const services = [
    t("footer.services.web"),
    t("footer.services.mobile"), 
    t("footer.services.erp"), 
    t("footer.services.ai"), 
    t("footer.services.ui"), 
    t("footer.services.consulting")
  ];

  return (
    <footer className="relative bg-darkBlue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
  src={TrexByteLogo}
  alt="TrexByte Logo"
  className="w-16 h-16 object-contain rounded-xl"
/>
              <span className="font-bold text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                TrexByte
              </span>
            </div>

            <p className="text-slate-300 max-w-md mb-6 leading-relaxed">
              {t("footer.description")}
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`w-10 h-10 rounded-xl bg-darkBlue-800 hover:bg-darkBlue-700 flex items-center justify-center transition-all duration-300 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t("footer.servicesTitle")}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-darkBlue-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span>&copy; {new Date().getFullYear()} TrexByte. {t("footer.copyright")}</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>{t("footer.location")}</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {}
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {}
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
