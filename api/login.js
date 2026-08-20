export default async function handler(req, res) {
  // Solo aceptamos peticiones POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { password } = req.body; // Recuerda que "password" es la respuesta que ella escribe
  
  // Ponemos la respuesta en minúsculas para que no importe si escribe con mayúsculas
  const respuesta = password ? password.toLowerCase().trim() : "";

  // AQUÍ PONES LAS RESPUESTAS VALIDAS (En minúsculas)
  // Puedes poner varias opciones por si acaso jaja
  if (respuesta === "sofia" || respuesta === "valentina" || respuesta === "mia") {
    
    // Si acierta, le damos paso verde
    return res.status(200).json({ message: "Login correcto" });

  } else {
    // Si se equivoca, la mandamos a volar
    return res.status(401).json({ error: "Respuesta incorrecta" });
  }
}