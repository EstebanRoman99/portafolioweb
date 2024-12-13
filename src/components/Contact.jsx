import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { BiCopy } from "react-icons/bi";
import { ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const email = "estebanromanh1999@gmail.com";
  const [copied, setCopied] = useState(false);
  const { isDarkTheme } = useContext(ThemeContext);
  const { t } = useTranslation(); // Inicializa la traducción

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Desaparece el mensaje después de 2 segundos
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen py-20"
    >
      {/* Título principal con animación */}
      <motion.h1
        className={`text-5xl font-bold mb-6 ${
          isDarkTheme
            ? "text-transparent bg-gradient-to-r from-pink-500 via-green-500 to-purple-500 bg-clip-text"
            : "text-transparent bg-gradient-to-r from-purple-500 via-green-400 to-pink-500 bg-clip-text"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("Contáctame")}
      </motion.h1>

      {/* Frase destacada */}
      <motion.p
        className={`text-lg text-center mb-10 italic ${
          isDarkTheme ? "text-gray-300" : "text-gray-700"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {t("¡Colaboremos juntos para hacer realidad tus ideas! 🚀")}
      </motion.p>

      {/* Correo electrónico con botón de copiar */}
      <motion.div
        className={`relative flex items-center gap-2 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 mb-6 ${
          isDarkTheme ? "bg-black/30 p-4" : "bg-gray-100 p-4"
        }`}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <span
          className={`${isDarkTheme ? "text-green-400" : "text-green-500"}`}
        >
          {email}
        </span>
        <motion.button
          onClick={copyToClipboard}
          className={`transition-all duration-300 ${
            isDarkTheme
              ? "text-gray-300 hover:text-green-500"
              : "text-gray-600 hover:text-green-600"
          }`}
          whileHover={{ scale: 1.2 }}
        >
          <BiCopy className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Botón para enviar correo */}
      <motion.a
        href={`mailto:${email}`}
        className={`relative px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 ${
          isDarkTheme
            ? "bg-black text-white"
            : "bg-gradient-to-r from-purple-400 to-green-400 text-white"
        }`}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        {t("Contáctame")}
        <motion.span
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-green-500 opacity-50 blur-xl"
          animate={{ opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.a>

      {/* Confirmación de correo copiado */}
      {copied && (
        <motion.div
          className={`absolute bottom-10 px-4 py-2 rounded-lg shadow-lg text-center font-semibold transition-all duration-500 ${
            isDarkTheme
              ? "bg-gradient-to-r from-green-500 to-pink-500 text-black"
              : "bg-gradient-to-r from-pink-500 to-green-500 text-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {t("¡Correo copiado al portapapeles! 📋")}
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
