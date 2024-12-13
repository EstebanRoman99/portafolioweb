import { useTranslation } from "react-i18next";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Timeline from "./components/Timeline";
import SplashScreen from "./components/SplashScreen"; // Importamos el splash screen
import { ThemeProvider, ThemeContext } from "../ThemeContext.jsx";
import { useContext, useState, useEffect } from "react";
import "../i18n.js"; // Configuración de i18n

const AppContent = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div
        className={`fixed z-0 min-h-screen w-full transition-all duration-500 ${
          isDarkTheme
            ? "[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#ff00ff_100%)]"
            : "[background:radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#FFDEE9_70%,#FFC1CC_100%)]"
        }`}
      ></div>

      <main className="relative z-10 flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Control del tiempo del splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Mostrar el splash screen por 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? <SplashScreen /> : <AppContent />}
    </ThemeProvider>
  );
}

export default App;
