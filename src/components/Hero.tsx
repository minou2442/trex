import { ArrowRight, Code, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background code effect - hada dark programming background li tlabti */}
      <div className="absolute inset-0 opacity-10">
        <div className="code-background overflow-hidden h-full w-full">
          <pre className="text-xs md:text-sm opacity-70 text-cyan-500 dark:text-cyan-400 whitespace-pre-wrap">
            {`


/* ====== TrexByte Code Background ====== */
// Hadi hiya background ta3 code bach ndiro ambiance ta3 programming
// C'est un effet visuel pour montrer qu'on est une entreprise tech
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'developer';
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    const session = supabase.auth.getSession();
    
    setUser(session ? session.user : null);
    setLoading(false);
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );
    
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  async function signIn({ email, password }: { 
    email: string; 
    password: string 
  }) {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error signing in:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  return {
    user,
    loading,
    signIn,
    signOut,
  };
}

// Initialize our application
const App = () => {
  const { user, loading, signIn, signOut } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="app">
      {user ? (
        <Dashboard user={user} onSignOut={signOut} />
      ) : (
        <LoginForm onSubmit={signIn} />
      )}
    </div>
  );
};

export default App;
            `}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-500" />
              <span className="text-cyan-500 font-semibold">{}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {t("hero.title1")}
              </span>
              <br />
              <span className="text-slate-800 dark:text-white">
                {t("hero.title2")}
              </span>
            </h1>

            <p className="text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl flex items-center gap-3 shadow-2xl shadow-cyan-500/25 hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Code className="w-5 h-5" />
                {t("hero.cta1")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                {t("hero.cta2")}
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  
                </div>
                <div className="text-sm opacity-70"></div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm opacity-70">{t("hero.stats.satisfaction")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm opacity-70">{t("hero.stats.support")}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://img.freepik.com/premium-photo/various-computer-equipment-with-programming-code-screens-table-dark-room-cyber-security-concept-copy-space_236854-23136.jpg"
                  alt="Programming on a dark background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20" />
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 p-4 bg-white dark:bg-darkBlue-800 rounded-2xl shadow-xl border border-slate-200 dark:border-darkBlue-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium"></span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 p-4 bg-white dark:bg-darkBlue-800 rounded-2xl shadow-xl border border-slate-200 dark:border-darkBlue-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">{}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
