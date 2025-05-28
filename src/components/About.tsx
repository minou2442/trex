import { Code, Lightbulb, Shield, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("about.values.security.title"),
      description: t("about.values.security.description"),
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("about.values.collaboration.title"),
      description: t("about.values.collaboration.description"),
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-cyan-500 font-medium">{t("about.badge")}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t("about.title1")}
            </span>
            <br />
            {t("about.title2")}
          </h2>

          <p className="text-xl opacity-80 leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="TrexByte Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-transparent to-purple-500/30"></div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white text-2xl font-bold mb-2">{t("about.overlay.title")}</h3>
                  <p className="text-white/90">{t("about.overlay.description")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              {t("about.values.title")}
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 dark:bg-darkBlue-800/50 backdrop-blur-sm border border-white/10 dark:border-darkBlue-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-xl w-fit bg-gradient-to-r ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="opacity-80 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}