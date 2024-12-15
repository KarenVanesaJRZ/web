// Función para cargar archivos HTML en elementos
function loadComponent(elementId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar ' + filePath);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Cargar el header y el footer en las respectivas secciones
window.onload = function() {
  loadComponent('header', 'header.html');
  loadComponent('footer', 'footer.html');
};


document.getElementById("reserva-form").addEventListener("submit", function(event) {
  const nombre = document.getElementById("name").value.trim();
  const contacto = document.getElementById("contact").value.trim();
  const email = document.getElementById("email").value.trim();
  const asunto = document.getElementById("subject").value.trim();
  const mensaje = document.getElementById("message").value.trim();

  if (!nombre || !contacto || !email || !asunto || !mensaje) {
      alert("Por favor, completa todos los campos.");
      event.preventDefault(); // Evita que el formulario se envíe
      return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      event.preventDefault();
      return;
  }

  const contactoRegex = /^[0-9]{10}$/;
  if (!contactoRegex.test(contacto)) {
      alert("El número de contacto debe tener 10 dígitos.");
      event.preventDefault();
      return;
  }

  alert("Formulario enviado con éxito.");
});