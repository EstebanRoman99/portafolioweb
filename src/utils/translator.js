const translationCache = {};

const translateText = async (text, targetLang) => {
  const sourceLang = "es"; // Establecemos español como idioma por defecto

  // Si el idioma de origen y destino son iguales, devolvemos el texto original
  if (sourceLang === targetLang) {
    return text;
  }

  const cacheKey = `${text}-${targetLang}`;
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=${sourceLang}|${targetLang}`
    );

    const data = await response.json();

    if (data.responseData.translatedText) {
      const translatedText = data.responseData.translatedText;
      translationCache[cacheKey] = translatedText; // Almacena en la caché
      return translatedText;
    } else {
      console.error("Error en la traducción:", data);
      return text;
    }
  } catch (error) {
    console.error("Error al traducir el texto:", error);
    return text; // Retorna el texto original si falla
  }
};

export default translateText;
