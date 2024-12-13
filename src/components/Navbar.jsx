import { useState, useContext, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";
import { ThemeContext } from "../../ThemeContext";
import { GiNightSky } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(true); // Nuevo estado para el letrero
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setShowInfo(false), 3000); // Desaparece después de 3 segundos
    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(currentLanguage === "es" ? "en" : "es");
  };

  return (
    <nav
      className={`fixed top-0 z-10 flex w-full items-center justify-between border-b ${
        isDarkTheme
          ? "border-b-gray-700 bg-black/70 text-white"
          : "border-b-gray-300 bg-white/90 text-black"
      } px-4 md:px-16 py-6 backdrop-blur-md`}
    >
      {/* Logo */}
      <a
        href="#home"
        className={`bg-gradient-to-r ${
          isDarkTheme
            ? "from-green-400 via-pink-500 to-purple-400"
            : "from-purple-400 via-pink-500 to-green-400"
        } bg-clip-text text-transparent text-2xl md:text-4xl font-bold transition-all duration-500 hover:opacity-90 hover:scale-105`}
      >
        Daniel Roman
      </a>

      {/* Menú de navegación */}
      <ul className="hidden md:flex gap-6 ml-auto">
        <a
          href="#home"
          className={`cursor-pointer ${
            isDarkTheme
              ? "text-gray-400 hover:text-green-400"
              : "text-gray-700 hover:text-green-600"
          } transition-all duration-300`}
        >
          <li>{i18n.t("Inicio")}</li>
        </a>
        <a
          href="#about"
          className={`cursor-pointer ${
            isDarkTheme
              ? "text-gray-400 hover:text-green-400"
              : "text-gray-700 hover:text-green-600"
          } transition-all duration-300`}
        >
          <li>{i18n.t("Acerca de mí")}</li>
        </a>
        <a
          href="#projects"
          className={`cursor-pointer ${
            isDarkTheme
              ? "text-gray-400 hover:text-green-400"
              : "text-gray-700 hover:text-green-600"
          } transition-all duration-300`}
        >
          <li>{i18n.t("Proyectos")}</li>
        </a>
        <a
          href="#contact"
          className={`cursor-pointer ${
            isDarkTheme
              ? "text-gray-400 hover:text-green-400"
              : "text-gray-700 hover:text-green-600"
          } transition-all duration-300`}
        >
          <li>{i18n.t("Contacto")}</li>
        </a>
      </ul>

      {/* Botones de cambio de idioma y tema */}
      <div className="flex items-center gap-4 ml-4">
        {/* Botón de idioma */}
        <div className="relative">
          <button
            onClick={toggleLanguage}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              isDarkTheme
                ? "bg-green-500 text-black hover:bg-green-600"
                : "bg-pink-300 text-black hover:bg-pink-400"
            }`}
          >
            {i18n.language === "es" ? "ES" : "EN"}
          </button>

          {/* Letrero informativo */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                className={`absolute left-1/2 transform -translate-x-1/2 mt-2 flex flex-col items-center ${
                  isDarkTheme ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ top: "100%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Flecha que apunta hacia arriba */}
                <div
                  className={`w-3 h-3 rotate-45 ${
                    isDarkTheme
                      ? "bg-black border-t border-l border-green-400"
                      : "bg-white border-t border-l border-pink-300"
                  }`}
                ></div>

                {/* Texto animado del letrero */}
                <motion.span
                  className={`text-xs px-4 py-1 rounded-md shadow-md font-medium whitespace-nowrap ${
                    isDarkTheme
                      ? "bg-black/80 border border-green-400"
                      : "bg-white/90 border border-pink-300"
                  }`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        when: "beforeChildren",
                      },
                    },
                  }}
                >
                  {(i18n.language === "en"
                    ? "Switch to Spanish"
                    : "Cambia a inglés"
                  )
                    .split("")
                    .map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Botón de cambio de tema */}
        <button
          onClick={toggleTheme}
          className={`relative w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-500 hover:scale-110 focus:outline-none ${
            isDarkTheme
              ? "bg-black text-yellow-400"
              : "bg-[#E6E6E6] text-blue-500"
          }`}
        >
          {isDarkTheme ? (
            <GiNightSky className="w-8 h-8" />
          ) : (
            <img
              src="/public/day.png"
              alt="Día"
              className="w-8 h-8 object-contain"
            />
          )}
        </button>
      </div>

      {/* Menú hamburguesa */}
      <div className="md:hidden">
        {isOpen ? (
          <BiX
            className={`text-4xl cursor-pointer transition-transform transform ${
              isDarkTheme
                ? "text-pink-400 hover:text-green-400"
                : "text-green-600 hover:text-pink-300"
            }`}
            onClick={menuOpen}
          />
        ) : (
          <BiMenu
            className={`text-4xl cursor-pointer transition-transform transform ${
              isDarkTheme
                ? "text-pink-400 hover:text-green-400"
                : "text-green-600 hover:text-pink-300"
            }`}
            onClick={menuOpen}
          />
        )}
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div
          className={`fixed right-0 top-0 h-screen w-3/4 flex flex-col gap-8 ${
            isDarkTheme
              ? "bg-black/90 text-white shadow-lg"
              : "bg-white/90 text-black shadow-lg"
          } p-8 z-20 transition-all duration-500 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Botón de cerrar */}
          <button
            onClick={menuOpen}
            className={`self-end text-3xl mb-4 ${
              isDarkTheme ? "text-pink-400" : "text-green-600"
            } hover:scale-110 transition-transform`}
          >
            <BiX />
          </button>

          {/* Enlaces */}
          <ul className="space-y-6">
            <a
              href="#home"
              onClick={menuOpen}
              className={`block text-xl font-semibold text-center py-2 rounded-lg transition-all duration-300 ${
                isDarkTheme
                  ? "bg-pink-400 text-black hover:bg-green-400"
                  : "bg-green-600 text-white hover:bg-pink-400"
              }`}
            >
              {i18n.t("Inicio")}
            </a>
            <a
              href="#about"
              onClick={menuOpen}
              className={`block text-xl font-semibold text-center py-2 rounded-lg transition-all duration-300 ${
                isDarkTheme
                  ? "bg-pink-400 text-black hover:bg-green-400"
                  : "bg-green-600 text-white hover:bg-pink-400"
              }`}
            >
              {i18n.t("Acerca de mí")}
            </a>
            <a
              href="#projects"
              onClick={menuOpen}
              className={`block text-xl font-semibold text-center py-2 rounded-lg transition-all duration-300 ${
                isDarkTheme
                  ? "bg-pink-400 text-black hover:bg-green-400"
                  : "bg-green-600 text-white hover:bg-pink-400"
              }`}
            >
              {i18n.t("Proyectos")}
            </a>
            <a
              href="#contact"
              onClick={menuOpen}
              className={`block text-xl font-semibold text-center py-2 rounded-lg transition-all duration-300 ${
                isDarkTheme
                  ? "bg-pink-400 text-black hover:bg-green-400"
                  : "bg-green-600 text-white hover:bg-pink-400"
              }`}
            >
              {i18n.t("Contacto")}
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
