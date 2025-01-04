import image from "/public/emagen.jpg";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { t } = useTranslation(); // Usar para traducir textos

  return (
    <div
      id="home"
      className="relative flex flex-col md:flex-row min-h-screen w-full items-center justify-center px-8 py-32 md:py-40"
    >
      {/* Imagen de perfil con animación */}
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative flex items-center justify-center mb-8 md:mb-0 md:mr-8"
      >
        <div
          className={`absolute -inset-2 rounded-full blur-lg ${
            isDarkTheme
              ? "bg-gradient-to-r from-pink-500 via-green-400 to-purple-500"
              : "bg-gradient-to-r from-purple-400 via-green-300 to-pink-400"
          }`}
        ></div>
        <img
          src={image}
          alt="Profile"
          className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] rounded-full shadow-xl transition-all duration-300 hover:-translate-y-3"
        />
      </motion.div>

      {/* Texto del héroe */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.5, staggerChildren: 0.3 },
          },
        }}
        className="flex flex-col items-center text-center max-w-[800px]"
      >
        {/* Nombre */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className={`text-5xl md:text-7xl font-bold bg-clip-text text-transparent leading-tight ${
            isDarkTheme
              ? "bg-gradient-to-r from-pink-500 via-green-400 to-purple-500"
              : "bg-gradient-to-r from-purple-400 via-pink-500 to-green-400"
          }`}
        >
          {t("Daniel Roman")}
        </motion.h1>

        {/* Rol profesional */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.2 }}
          className={`text-4xl md:text-6xl font-semibold mt-2 ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`}
        >
          {t("Desarrollador Web fullstack")}
          {" | "}
          <span
            className={`text-transparent bg-clip-text ${
              isDarkTheme
                ? "bg-gradient-to-r from-red-500 via-white to-green-500"
                : "bg-gradient-to-r from-green-400 via-gray-200 to-red-500"
            }`}
          >
            {t("México")}
          </span>
        </motion.h2>

        {/* Breve descripción */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.4 }}
          className={`text-lg md:text-xl mt-4 ${
            isDarkTheme ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {t("TextInHero")}
        </motion.p>
        <br />

        {/* Botones */}
        <div className="flex gap-4 mt-6">
          {/* Botón de GitHub */}
          <motion.a
            href="https://github.com/EstebanRoman99"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative p-4 rounded-full shadow-lg transition-all duration-300 ${
              isDarkTheme
                ? "bg-black text-white hover:bg-gray-700"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <BsGithub className="text-xl" />
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-green-500 opacity-50 blur-xl"
              animate={{ opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.a>

          {/* Botón de LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/estebanroman-hernandez-1649a716b/"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative p-4 rounded-full shadow-lg transition-all duration-300 ${
              isDarkTheme
                ? "bg-black text-white hover:bg-gray-700"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <BsLinkedin className="text-xl" />
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-green-500 opacity-50 blur-xl"
              animate={{ opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.a>

          {/* Botón para descargar CV */}
          <motion.a
            href="/CV_EstebanDanielRomanHernandez-EN.pdf"
            download="CV_EstebanDanielRomanHernandez-EN.pdf"
            className={`relative px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 ${
              isDarkTheme
                ? "bg-black text-white hover:bg-gray-700"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {t("Descargar CV")}
            <motion.span
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-green-500 opacity-50 blur-xl"
              animate={{ opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
