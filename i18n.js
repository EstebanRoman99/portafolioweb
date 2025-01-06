import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navegación
        Inicio: "Home",
        "Acerca de mí": "About Me",
        Proyectos: "Projects",
        Contacto: "Contact",

        // Hero
        "Daniel Roman": "Daniel Roman",
        "Desarrollador Web fullstack": "Web Fullstack Developer ",
        México: "Computer Systems Engineer",
        TextInHero:
          "Computer Systems Engineer specializing in high-quality web development with a focus on clean design, seamless user experiences, and scalable architecture. Ready to collaborate on innovative projects that push technological boundaries. 🚀",

        "Descargar CV": "Download CV",

        // Acerca de mí
        "Acerca de mí Descripción":
          "I am a Fullstack Web Developer and Computer Systems Engineer from Mexico, passionate about creating high-quality digital solutions with a focus on clean design, seamless user experiences, and scalable architectures. I am improving my English to collaborate on international projects and tackle new technological challenges. Together, we can take technology further! 🚀",

        "Here are some of the technologies I have worked with:":
          "Here are some of the technologies I have worked with:",

        Advanced: "Advanced",
        Intermediate: "Intermediate",
        Beginner: "Beginner",
        Progress: "Progress",
        Author: "Author",
        UXUIDesign: "UX/UI Design",
        UXUIDescription:
          "Experience in designing intuitive and visually appealing interfaces, using Figma for prototyping and user-centered design.",

        "What I Learned": "What I Learned",

        "Habilidades destacadas": "Highlighted Skills",
        "Inglés - Nivel B2": "English - Level B2",
        "Estudiando intensamente en Harmon Hall para expandir mis oportunidades internacionales.":
          "Studying intensively at Harmon Hall to expand my international opportunities.",
        "Diseño gráfico": "Graphic Design",
        "Capacidad para crear diseños visuales atractivos y funcionales.":
          "Ability to create visually appealing and functional designs.",
        "Documentación técnica": "Technical Documentation",
        "Experiencia en crear documentación clara para proyectos de software, incluyendo:":
          "Experience in creating clear documentation for software projects, including:",
        "Diagramas UML y mapas conceptuales":
          "UML diagrams and conceptual maps",
        "Historias de usuario y casos de uso": "User stories and use cases",
        "Guías de instalación y configuración":
          "Installation and configuration guides",
        "Documentación de endpoints y APIs REST":
          "Documentation of endpoints and REST APIs",
        "Aprendizaje autodidacta": "Self-Learning",
        "Habilidad para aprender nuevas tecnologías y herramientas de forma autónoma, manteniéndome actualizado con las tendencias del sector.":
          "Ability to learn new technologies and tools autonomously, staying updated with industry trends.",

        "Programming Books": "Programming Books",

        "Next Book": "Next Book",
        "Looking for the next book to improve my skills. More learnings to come!":
          "Looking for the next book to improve my skills. More learnings to come!",

        // contacto

        Contáctame: "Contact Me",
        "¡Colaboremos juntos para hacer realidad tus ideas! 🚀":
          "Let's collaborate to bring your ideas to life! 🚀",
        "¡Correo copiado al portapapeles! 📋": "Email copied to clipboard! 📋",

        // proyectos

        my_projects: "My Projects",
        web: "Web Development",
        mobile: "Mobile Development",
        others: "Other Projects",
      },
    },
    es: {
      translation: {
        // Navegación
        Inicio: "Inicio",
        "Acerca de mí": "Acerca de mí",
        Proyectos: "Proyectos",
        Contacto: "Contacto",

        // Hero
        "Daniel Roman": "Daniel Roman",
        "Desarrollador Web fullstack": "Desarrollador Web fullstack",
        México: "Ing en Sistemas Computacionales",
        TextInHero:
          "Ingeniero en Sistemas Computacionales especializado en desarrollo web de alta calidad, con enfoque en diseño limpio, experiencias fluidas y arquitectura escalable. Listo para colaborar en proyectos innovadores que desafíen los límites tecnológicos. 🚀",

        "Descargar CV": "Descargar CV",

        // Acerca de mí
        "Acerca de mí Descripción":
          "Soy un desarrollador web Fullstack y un ingeniero en sistemas computacionales de México, apasionado por crear soluciones digitales de alta calidad con un enfoque en diseño limpio, experiencias de usuario fluidas y arquitecturas escalables. Estoy mejorando mi inglés para colaborar en proyectos internacionales y enfrentar nuevos retos tecnológicos. ¡Juntos podemos llevar la tecnología más lejos! 🚀",

        "Here are some of the technologies I have worked with:":
          "Estas son algunas de las tecnologías con las que he trabajado:",

        Advanced: "Avanzado",
        Intermediate: "Intermedio",
        Beginner: "Principiante",
        Progress: "Progreso",
        Author: "Autor",

        UXUIDesign: "Diseño de Interfaces (UX/UI)",
        UXUIDescription:
          "Experiencia en diseño de interfaces intuitivas y atractivas, utilizando Figma para prototipado y diseño centrado en el usuario.",

        "What I Learned": "¿Qué aprendí?",

        "Habilidades destacadas": "Habilidades destacadas",
        "Inglés - Nivel B2": "Inglés - Nivel B2",
        "Estudiando intensamente en Harmon Hall para expandir mis oportunidades internacionales.":
          "Estudiando intensamente en Harmon Hall para expandir mis oportunidades internacionales.",
        "Diseño gráfico": "Diseño gráfico",
        "Capacidad para crear diseños visuales atractivos y funcionales.":
          "Capacidad para crear diseños visuales atractivos y funcionales.",
        "Documentación técnica": "Documentación técnica",
        "Experiencia en crear documentación clara para proyectos de software, incluyendo:":
          "Experiencia en crear documentación clara para proyectos de software, incluyendo:",
        "Diagramas UML y mapas conceptuales":
          "Diagramas UML y mapas conceptuales",
        "Historias de usuario y casos de uso":
          "Historias de usuario y casos de uso",
        "Guías de instalación y configuración":
          "Guías de instalación y configuración",
        "Documentación de endpoints y APIs REST":
          "Documentación de endpoints y APIs REST",
        "Aprendizaje autodidacta": "Aprendizaje autodidacta",
        "Habilidad para aprender nuevas tecnologías y herramientas de forma autónoma, manteniéndome actualizado con las tendencias del sector.":
          "Habilidad para aprender nuevas tecnologías y herramientas de forma autónoma, manteniéndome actualizado con las tendencias del sector.",
        "Programming Books": "Libros de programación",

        "Next Book": "¿Próximo libro?",
        "Looking for the next book to improve my skills. More learnings to come!":
          "Estoy buscando el siguiente libro para mejorar mis habilidades. ¡Se vienen más aprendizajes!",

        // Contacto

        Contáctame: "Contáctame",
        "¡Colaboremos juntos para hacer realidad tus ideas! 🚀":
          "¡Colaboremos juntos para hacer realidad tus ideas! 🚀",
        "¡Correo copiado al portapapeles! 📋":
          "¡Correo copiado al portapapeles! 📋",

        // proyectos

        my_projects: "Mis Proyectos",
        web: "Desarrollo Web",
        mobile: "Desarrollo Móvil",
        others: "Otros Proyectos",
      },
    },
  },
  lng: "en", // Idioma inicial
  fallbackLng: "es", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // React ya maneja la protección contra XSS
  },
});

export default i18n;
