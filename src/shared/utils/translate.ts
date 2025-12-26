export async function translateText(text: string, source = "ar", target = "en") {
  try {
    const response = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source,
        target,
      }),
    });

    const data = await response.json();
    return data.translatedText as string;
  } catch (error) {
    console.error("Translation error:", error);
    return "Translation failed";
  }
}
