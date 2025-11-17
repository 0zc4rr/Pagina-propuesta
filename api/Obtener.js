const SECRET_URL_1 = process.env.URL_SECRETA;
const SECRET_URL_2 = process.env.URL_SECRETA1;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).send("Método no permitido");
  }

  const { id = "1" } = req.query;

  let SECRET_URL;
  if (id === "1") {
    SECRET_URL = SECRET_URL_1;
  } else if (id === "2") {
    SECRET_URL = SECRET_URL_2;
  } else {
    return res.status(400).json({ error: "ID inválido. Use 1 o 2" });
  }

  if (!SECRET_URL) {
    return res.status(500).json({ error: `URL_SECRETA_${id} no configurada` });
  }

  try {
    // Usar AbortController para timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(SECRET_URL, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return res.status(response.status).send(`Error: ${response.statusText}`);
    }

    const htmlContent = await response.text();

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    return res.status(200).send(htmlContent);
  } catch (error) {
    console.error("Error en proxy:", error.message);

    if (error.name === "AbortError") {
      return res
        .status(504)
        .json({ error: "Timeout: La URL tardó demasiado en responder" });
    }

    return res.status(500).json({ error: error.message });
  }
}
