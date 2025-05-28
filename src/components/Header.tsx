import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import TrexByteLogo from "../assets/trexbyte-logo.png"; // ✅ Import the logo

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguageMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? `backdrop-blur-md ${
              darkMode ? "bg-darkBlue-900/80 border-darkBlue-700" : "bg-white/80 border-slate-200"
            } border-b shadow-lg`
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
         <img
  src={TrexByteLogo}
  alt="TrexByte Logo"
  className="w-16 h-16 object-contain rounded-xl"
/>

          <span className="font-bold text-2xl bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            TrexByte
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-medium hover:text-cyan-500 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="p-2 rounded-full hover:bg-slate-200/20 transition-colors flex items-center gap-2"
            >
              <Languages size={20} />
              <span className="text-sm">{i18n.language.toUpperCase()}</span>
            </button>

            {languageMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white dark:bg-darkBlue-800 shadow-lg rounded-lg py-2 min-w-32 border border-slate-200 dark:border-darkBlue-700">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-darkBlue-700 transition-colors ${
                      i18n.language === lang.code ? "text-cyan-500 font-medium" : ""
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full ${
              darkMode
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                : "bg-gradient-to-r from-darkBlue-700 to-darkBlue-900 text-white"
            } shadow-lg`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="p-2 rounded-full hover:bg-slate-200/20 transition-colors"
            >
              <Languages size={20} />
            </button>

            {languageMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white dark:bg-darkBlue-800 shadow-lg rounded-lg py-2 min-w-32 border border-slate-200 dark:border-darkBlue-700">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-darkBlue-700 transition-colors ${
                      i18n.language === lang.code ? "text-cyan-500 font-medium" : ""
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? "bg-yellow-400 text-slate-900" : "bg-slate-700 text-white"}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden backdrop-blur-md ${
            darkMode ? "bg-darkBlue-900/90" : "bg-white/90"
          } border-t ${darkMode ? "border-darkBlue-700" : "border-slate-200"}`}
        >
          <div className="container mx-auto px-4 py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block py-2 hover:text-cyan-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
