import {
  BiLogoApple,
  BiLogoDjango,
  BiLogoDocker,
  BiLogoFirebase,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoXing,
  BiLogoRedux,
  BiLogoFigma,
  BiLogoPython,
  BiLogoJava,
} from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import BookCard from "./BookCard";
import image1 from "../../public/books/cleanCode.jpg";
import image2 from "../../public/books/pragmaticProgrammer.jpg";
import image3 from "../../public/books/ingenieria_software.jpg";
import image4 from "../../public/books/cleanArchitecture.jpg";

const AboutMe = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { t } = useTranslation(); // Inicializa t para traducir

  const technologies = [
    // Principales tecnologías frontend
    {
      name: "JavaScript",
      icon: BiLogoJavascript,
      lightColor: "text-yellow-300",
      darkColor: "text-yellow-400",
      level: "75%", // Intermedio alto
    },
    {
      name: "TypeScript",
      icon: BiLogoTypescript,
      lightColor: "text-sky-400",
      darkColor: "text-sky-500",
      level: "60%", // Intermedio
    },
    {
      name: "React",
      icon: BiLogoReact,
      lightColor: "text-cyan-300",
      darkColor: "text-cyan-400",
      level: "75%", // Intermedio alto
    },
    {
      name: "TailwindCSS",
      icon: BiLogoTailwindCss,
      lightColor: "text-teal-300",
      darkColor: "text-teal-400",
      level: "75%", // Intermedio alto
    },
    {
      name: "Figma",
      icon: BiLogoFigma,
      lightColor: "text-pink-500", // Representa el color de Figma
      darkColor: "text-pink-600",
      level: "60%", // Intermedio
    },
    {
      name: "Python",
      icon: BiLogoPython,
      lightColor: "text-blue-400", // Azul claro para tema claro
      darkColor: "text-yellow-400", // Amarillo para tema oscuro
      level: "60%", // Intermedio
    },

    {
      name: "Axios",
      icon: SiAxios,
      lightColor: "text-blue-400",
      darkColor: "text-blue-500",
      level: "60%", // Intermedio
    },
    {
      name: "Java",
      icon: BiLogoJava,
      lightColor: "text-red-400",
      darkColor: "text-red-400",
      level: "60%", // Básico
    },
    {
      name: "Spring Boot",
      icon: BiLogoSpringBoot,
      lightColor: "text-green-300",
      darkColor: "text-green-400",
      level: "60%", // Básico
    },
    {
      name: "Redux",
      icon: BiLogoRedux,
      lightColor: "text-purple-300",
      darkColor: "text-purple-400",
      level: "50%", // Principiante alto
    },

    // Backend y herramientas
    {
      name: "Node.js",
      icon: BiLogoNodejs,
      lightColor: "text-green-400",
      darkColor: "text-green-500",
      level: "50%", // Principiante alto
    },
    {
      name: "Firebase",
      icon: BiLogoFirebase,
      lightColor: "text-yellow-400",
      darkColor: "text-yellow-500",
      level: "50%", // Principiante alto
    },
    {
      name: "PostgreSQL",
      icon: BiLogoPostgresql,
      lightColor: "text-blue-700",
      darkColor: "text-blue-800",
      level: "45%", // Principiante
    },
    {
      name: "MongoDB",
      icon: BiLogoMongodb,
      lightColor: "text-green-300",
      darkColor: "text-green-400",
      level: "40%", // Principiante
    },
    {
      name: "Laravel",
      icon: FaLaravel,
      lightColor: "text-orange-400",
      darkColor: "text-orange-500",
      level: "40%", // Principiante alto
    },

    // Herramientas complementarias
    {
      name: "Docker",
      icon: BiLogoDocker,
      lightColor: "text-blue-500",
      darkColor: "text-blue-600",
      level: "40%", // Principiante
    },

    // Menor relevancia para frontend
    {
      name: "Express.js",
      icon: BiLogoXing,
      lightColor: "text-green-400",
      darkColor: "text-green-500",
      level: "30%", // Básico
    },
    {
      name: "iOS",
      icon: BiLogoApple,
      lightColor: "text-gray-400",
      darkColor: "text-gray-500",
      level: "25%", // Muy básico
    },
    {
      name: "Django",
      icon: BiLogoDjango,
      lightColor: "text-green-300",
      darkColor: "text-green-400",
      level: "25%", // Muy básico
    },
    {
      name: "Three.js",
      icon: TbBrandThreejs,
      lightColor: "text-green-400",
      darkColor: "text-green-500",
      level: "25%", // Muy básico
    },
  ];

  const books = [
    {
      title: "Codigo Limpio",
      image: image1,
      description:
        "Escrito por Robert C. Martin, este libro es esencial para escribir código legible y mantenible.",
      progress: "100%",
      understanding:
        "Aprendí la importancia de escribir código limpio que no solo funciona, sino que también es fácil de entender y mantener. Ahora cada función y variable tiene un propósito claro.",
      author: "Robert C. Martin",
      edition: "Primera Edición",
    },
    {
      title: "El Programador Pragmático",
      image: image2,
      description:
        "Una guía práctica para desarrollar hábitos y técnicas efectivas en el desarrollo de software.",
      progress: "95%",
      understanding:
        "Este libro me enseñó a pensar como un solucionador de problemas, no solo como un programador. Aplicar principios como DRY y aprender a trabajar con prototipos me ha ayudado a crear soluciones más rápidas y efectivas.",
      author: "Andrew Hunt y David Thomas",
      edition: "20° Aniversario",
    },
    {
      title: "Ingeniería de Software: Un Enfoque Práctico",
      image: image3,
      description:
        "Escrito por Roger S. Pressman, este libro es una guía completa sobre los principios y prácticas de la ingeniería de software, desde el diseño hasta el mantenimiento.",
      progress: "70%",
      understanding:
        "Este libro me ha ayudado a entender la importancia de seguir procesos estructurados en el desarrollo de software y cómo aplicar metodologías como Agile para mejorar la eficiencia en proyectos complejos.",
      author: "Roger S. Pressman",
      edition: "Séptima Edición",
    },
    {
      title: "Arquitectura Limpia",
      image: image4,
      description:
        "También de Robert C. Martin, este libro explora principios de diseño arquitectónico para aplicaciones escalables y sostenibles.",
      progress: "10%",
      understanding:
        "Aunque recién estoy comenzando, este libro me está ayudando a entender cómo estructurar proyectos de manera que sean flexibles y fáciles de escalar.",
      author: "Robert C. Martin",
      edition: "Primera Edición",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <div
      id="about"
      className={`py-20 px-8 ${isDarkTheme ? "text-white" : "text-black"}`}
    >
      {/* Título */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        id="about-title"
      >
        {t("Acerca de mí")}
      </motion.h1>

      {/* Descripción */}
      <motion.div
        className="text-center text-lg md:text-xl max-w-[800px] mx-auto mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p
          className={`mb-6 ${isDarkTheme ? "text-gray-300" : "text-gray-700"}`}
        >
          {t("Acerca de mí Descripción")}
        </p>

        <p
          className={`mb-4 font-semibold ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          {t("Here are some of the technologies I have worked with:")}
        </p>
      </motion.div>

      {/* Contenedor de tecnologías */}
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center max-w-[150px]"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
          >
            <tech.icon
              className={`text-[80px] ${
                isDarkTheme ? tech.darkColor : tech.lightColor
              }`}
            />
            <p className="mt-2 font-medium">{tech.name}</p>
            <div className="mt-2">
              <p
                className={`text-sm font-semibold ${
                  parseInt(tech.level) >= 80
                    ? isDarkTheme
                      ? "text-blue-400"
                      : "text-blue-600"
                    : parseInt(tech.level) >= 60
                    ? isDarkTheme
                      ? "text-green-400"
                      : "text-green-600"
                    : isDarkTheme
                    ? "text-yellow-400"
                    : "text-yellow-600"
                }`}
              >
                {parseInt(tech.level) >= 80
                  ? t("Advanced")
                  : parseInt(tech.level) >= 60
                  ? t("Intermediate")
                  : t("Beginner")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Habilidades destacadas */}
      <div className="mt-16">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`}
        >
          {t("Habilidades destacadas")}
        </h2>
        <div className="space-y-6 max-w-[800px] mx-auto">
          {/* Inglés */}
          <div
            className={`p-4 rounded-lg shadow-lg flex items-center gap-4 ${
              isDarkTheme ? "bg-black/70" : "bg-white/30 text-gray-700"
            }`}
          >
            <span className="text-green-500 text-3xl">🌍</span>
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">
                {t("Inglés - Nivel B2")}
              </p>
              <p className="text-sm">
                {t(
                  "Estudiando intensamente en Harmon Hall para expandir mis oportunidades internacionales."
                )}
              </p>
            </div>
          </div>

          {/* UX/UI Design */}
          <div
            className={`p-4 rounded-lg shadow-lg flex items-center gap-4 ${
              isDarkTheme ? "bg-black/80" : "bg-white text-gray-700"
            }`}
          >
            <span className="text-pink-500 text-3xl">🎨</span>
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">
                {t("UXUIDesign")}
              </p>
              <p className="text-sm">{t("UXUIDescription")}</p>
            </div>
          </div>

          {/* Documentación técnica */}
          <div
            className={`p-4 rounded-lg shadow-lg flex items-center gap-4 ${
              isDarkTheme ? "bg-black/80" : "bg-white text-gray-700"
            }`}
          >
            {/* Íconos */}
            <div className="flex gap-4">
              <span className="text-green-400 text-3xl">📘</span>
            </div>
            {/* Contenido */}
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">
                {t("Documentación técnica")}
              </p>
              <p className="text-sm">
                {t(
                  "Experiencia en crear documentación clara para proyectos de software, incluyendo:"
                )}
              </p>
              <ul
                className={`list-disc list-inside mt-2 ${
                  isDarkTheme ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <li>{t("Diagramas UML y mapas conceptuales")}</li>
                <li>{t("Historias de usuario y casos de uso")}</li>
                <li>{t("Guías de instalación y configuración")}</li>
                <li>{t("Documentación de endpoints y APIs REST")}</li>
              </ul>
            </div>
          </div>

          {/* Aprendizaje autodidacta */}
          <div
            className={`p-4 rounded-lg shadow-lg flex items-center gap-4 ${
              isDarkTheme ? "bg-black/80" : "bg-white text-gray-700"
            }`}
          >
            <span className="text-purple-500 text-3xl">📚</span>
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">
                {t("Aprendizaje autodidacta")}
              </p>
              <p className="text-sm">
                {t(
                  "Habilidad para aprender nuevas tecnologías y herramientas de forma autónoma, manteniéndome actualizado con las tendencias del sector."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Libros de programación */}
      <div className="mt-16">
        <h2
          className={`text-4xl font-bold text-center mb-10 ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          {t("Programming Books")}
        </h2>
        {/* Descripción de la sección de libros */}
        <motion.div
          className="text-center text-lg md:text-xl max-w-[800px] mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <blockquote
            className={`italic mb-4 ${
              isDarkTheme ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {t("Hacia las estrellas a través de las dificultades.")}
          </blockquote>

          <p
            className={`text-center font-semibold mb-2 ${
              isDarkTheme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("Ad astra per aspera")}
          </p>

          <p
            className={`text-right font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            — {t("Séneca")}
          </p>

          <p
            className={`mt-6 ${
              isDarkTheme ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {t("textInBooksDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          {books.map((book, index) => (
            <BookCard key={index} book={book} isDarkTheme={isDarkTheme} t={t} />
          ))}

          {/* Espacio para el próximo libro */}
          <div
            className={`p-6 rounded-lg shadow-lg flex items-center justify-center col-span-full ${
              isDarkTheme
                ? "bg-black/70 text-gray-300"
                : "bg-white/30 text-gray-700"
            }`}
          >
            <div className="text-center">
              <h3
                className={`text-xl font-bold ${
                  isDarkTheme ? "text-green-400" : "text-green-600"
                }`}
              >
                {t("Next Book")}
              </h3>
              <p
                className={`mt-2 ${
                  isDarkTheme ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {t(
                  "Looking for the next book to improve my skills. More learnings to come!"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
