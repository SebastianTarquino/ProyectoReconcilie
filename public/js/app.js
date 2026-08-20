document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const answer = document.getElementById('answer').value;
  const msg = document.getElementById('msg');
  
  msg.textContent = "Pensando...";
  msg.style.color = "white";

  try {
    // Llamamos a tu backend en Vercel
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // TRUCO: Mandamos un email fijo, y la respuesta es el "password"
      body: JSON.stringify({
        email: "kelly@nuestroamor.com", // Este debe ser el email que guardes en tu Base de Datos
        password: answer
      })
    });

    const data = await response.json();

    if (response.ok) {
      msg.style.color = "#4CAF50"; // Verde romántico
      msg.textContent = "❤️ Respuesta correcta. Entrando al nidito...";
      
      // Aquí la rediriges a la página de los mensajes bonitos
      setTimeout(() => {
        window.location.href = "/mensajes.html"; // Asegúrate de crear este archivo
      }, 1500);
      
    } else {
      msg.style.color = "#FF5252"; // Rojo de "te equivocaste"
      msg.textContent = "Respuesta incorrecta... ¿Ya te olvidaste? 🥺";
    }
  } catch (error) {
    msg.style.color = "red";
    msg.textContent = "Hubo un error de conexión.";
  }
});