import { useState, useEffect } from "react";
import translateText from "../utils/translator";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BookCard = ({ book, isDarkTheme }) => {
  const [translatedBook, setTranslatedBook] = useState(book);
  const { i18n } = useTranslation(); // Hook para acceder al idioma global
  const [isTranslating, setIsTranslating] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const translateBook = async () => {
      setIsTranslating(true);
      try {
        const targetLang = i18n.language; // Idioma seleccionado en el navbar
        const translatedTitle = await translateText(book.title, targetLang);
        const translatedDescription = await translateText(
          book.description,
          targetLang
        );
        const translatedUnderstanding = await translateText(
          book.understanding,
          targetLang
        );

        setTranslatedBook({
          ...book,
          title: translatedTitle,
          description: translatedDescription,
          understanding: translatedUnderstanding,
        });
      } catch (error) {
        console.error("Error translating book:", error);
      } finally {
        setIsTranslating(false);
      }
    };

    translateBook();
  }, [i18n.language, book]); // Escucha cambios en el idioma del navbar

  return (
    <motion.div
      className={`p-4 rounded-lg shadow-lg flex flex-col items-center ${
        isDarkTheme ? "bg-black/80 text-gray-300" : "bg-white/30 text-gray-700"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Imagen del libro */}
      <div className="w-40 h-60 overflow-hidden flex items-center justify-center mb-4">
        <img
          src={book.image}
          alt={translatedBook.title}
          className="h-full w-auto object-contain rounded-lg"
        />
      </div>

      {/* Título del libro */}
      <p
        className={`text-lg font-semibold text-center ${
          isDarkTheme ? "text-green-400" : "text-green-600"
        }`}
      >
        {translatedBook.title}
      </p>

      {/* Porcentaje completado */}
      <p
        className={`text-sm mt-2 font-medium ${
          isDarkTheme ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {t("Progress")}: {book.progress}
      </p>

      {/* Autor del libro */}
      <p
        className={`text-xs italic mt-1 ${
          isDarkTheme ? "text-gray-500" : "text-gray-400"
        }`}
      >
        {t("Author")}: {book.author}
      </p>
    </motion.div>
  );
};

export default BookCard;
