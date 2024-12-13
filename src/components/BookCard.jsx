import React, { useState, useEffect } from "react";
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
      className={`p-6 rounded-lg shadow-lg flex flex-col items-center ${
        isDarkTheme ? "bg-black/80 text-gray-300" : "bg-white/30 text-gray-700"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-[300px] overflow-hidden flex items-center justify-center mb-4">
        <img
          src={book.image}
          alt={translatedBook.title}
          className="h-full w-auto object-contain rounded-lg"
        />
      </div>

      <p
        className={`text-xl font-semibold ${
          isDarkTheme ? "text-green-400" : "text-green-600"
        }`}
      >
        {translatedBook.title}
      </p>

      <p
        className={`text-sm mb-4 ${
          isDarkTheme ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {translatedBook.description}
      </p>

      <p
        className={`text-sm italic mb-4 ${
          isDarkTheme ? "text-gray-400" : "text-gray-500"
        }`}
      >
        <span
          className={`font-semibold ${
            isDarkTheme ? "text-green-400" : "text-green-600"
          }`}
        >
          {t("What I Learned")}{" "}
        </span>
        {translatedBook.understanding}
      </p>

      <p
        className={`text-xs ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}
      >
        <span
          className={`font-semibold ${
            isDarkTheme ? "text-green-400" : "text-green-600"
          }`}
        >
          Autor:
        </span>{" "}
        {book.author} <br />
        <span
          className={`font-semibold ${
            isDarkTheme ? "text-green-400" : "text-green-600"
          }`}
        >
          Edición:
        </span>{" "}
        {book.edition}
      </p>
    </motion.div>
  );
};

export default BookCard;
