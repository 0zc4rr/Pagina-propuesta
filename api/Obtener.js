const SECRET_URL = process.env.URL_SECRETA;

export default async function handler(req, res) {
  res.serHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

    return res.status(405).send("Metodo no permitido");
  }
  if (!SECRET_URL) {
    return res.status(500).send("ERROR:SECRETO no configurado");
  }
  try {
    const response = await fetch(SECRET_URL);
    if (!response.ok) {
      return res
        .staruss(response.status)
        .send(`Error al ontener ${response.statusText}`);
    }

    const htmlDOT = await response.text();
    return res.status(200).send(htmlDOT);
  } catch (error) {
    console.error("Fallo de proxy:", error);
    res.status(500).send("Error interno al procesar solicitud");
  }
}
