import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import translateText from "../utils/translator";
import { useTranslation } from "react-i18next";

const events = [
  {
    title: "Desarrollador Frontend",
    subtitle: "CBI Multiassets",
    date: "2023 - 2024",
    description:
      "Formé parte de un equipo multidisciplinario para desarrollar plataformas financieras modernas. Implementé soluciones interactivas con React y Tailwind CSS, mejorando significativamente la experiencia de usuario y reduciendo tiempos de carga en un 20%.",
  },
  {
    title: "Prácticas Profesionales: Inteligencia Artificial y Desarrollo Web",
    subtitle: "Instituto Tecnológico de Oaxaca",
    date: "2023",
    description:
      "Trabajé en colaboración con un colega en el diseño e implementación de una aplicación web que incorporó inteligencia artificial para optimizar procesos académicos y administrativos. La solución automatizó tareas clave y fue presentada exitosamente ante un panel directivo, recibiendo reconocimiento por su innovación.",
  },
  {
    title: "Entrenamiento Avanzado en Inglés",
    subtitle: "Harmon Hall, Oaxaca",
    date: "2023 - 2024",
    description:
      "He alcanzado el nivel B2 (intermedio avanzado) después de más de un año de estudio intensivo. Desarrollé habilidades sólidas para comunicarme en contextos técnicos y profesionales, incluyendo la capacidad de colaborar en equipos internacionales y manejar documentación técnica en inglés.",
  },
  {
    title: "Proyectos Personales y Crecimiento Tecnológico",
    subtitle: "Desarrollador Independiente",
    date: "2024",
    description:
      "Este año lo dediqué a perfeccionar mis habilidades en desarrollo web mediante proyectos independientes. Exploré tecnologías como Next.js, Firebase y Redux, desarrollando aplicaciones funcionales que simulan entornos del mundo real y fortaleciendo mi capacidad para enfrentar desafíos técnicos.",
  },
  {
    title: "Formación Profesional en Ingeniería en Sistemas Computacionales",
    subtitle: "Instituto Tecnológico de Oaxaca",
    date: "2018 - 2023",
    description:
      "Graduado con un proyecto de alto impacto basado en desarrollo web. Durante mi formación, adquirí experiencia práctica en programación, diseño de sistemas y bases de datos, aplicando metodologías ágiles y enfoques modernos de desarrollo.",
  },
  {
    title: "Primeras Experiencias en Tecnología",
    subtitle: "Exploración autodidacta",
    date: "2015 - 2018",
    description:
      "Antes de iniciar mi carrera profesional, dediqué tiempo a aprender las bases de la programación y diseño web por cuenta propia. Esta etapa marcó mi pasión por el desarrollo y la resolución de problemas tecnológicos.",
  },
];

const Timeline = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const [translatedEvents, setTranslatedEvents] = useState(events);

  // Función para traducir eventos
  const translateEvents = async () => {
    const targetLang = i18n.language;
    if (targetLang === "es") {
      setTranslatedEvents(events);
      return;
    }

    const translated = await Promise.all(
      events.map(async (event) => ({
        ...event,
        title: await translateText(event.title, targetLang),
        subtitle: await translateText(event.subtitle, targetLang),
        description: await translateText(event.description, targetLang),
      }))
    );
    setTranslatedEvents(translated);
  };

  useEffect(() => {
    translateEvents();
  }, [i18n.language]);

  return (
    <div className="relative mx-auto max-w-4xl">
      <div
        className={`p-8 ${
          isDarkTheme ? " text-white" : "bg-white/5 text-black"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          {i18n.language === "es"
            ? "Línea de Tiempo Profesional"
            : "Professional Timeline"}
        </h2>
      </div>
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
          isDarkTheme ? "bg-gray-700" : "bg-gray-200"
        }`}
      ></div>
      {translatedEvents.map((event, index) => (
        <div
          key={index}
          className={`relative mb-8 flex items-center ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {/* Punto del timeline */}
          <div
            className={`absolute w-6 h-6 rounded-full shadow-md -translate-x-1/2 ${
              isDarkTheme ? "bg-green-500" : "bg-pink-300"
            } left-1/2`}
          ></div>

          {/* Contenido */}
          <div
            className={`w-[calc(50%-2rem)] p-4 rounded-lg shadow-lg ${
              isDarkTheme
                ? "bg-black/50 text-gray-300" // Negro con 70% de opacidad para el tema oscuro
                : "bg-white/30 text-gray-700 border border-pink-300"
            } ${index % 2 === 0 ? "text-right" : "text-left"}`}
          >
            <h3
              className={`text-xl font-bold ${
                isDarkTheme ? "text-green-400" : "text-pink-400"
              }`}
            >
              {event.title}
            </h3>
            <p
              className={`text-sm font-medium ${
                isDarkTheme ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {event.subtitle}
            </p>
            <span
              className={`block text-xs mt-1 font-semibold ${
                isDarkTheme ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {event.date}
            </span>
            <p className="mt-2">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
