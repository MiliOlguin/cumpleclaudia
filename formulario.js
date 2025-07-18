// formulario.js

// Inicializar EmailJS con tu User ID (lo sacás desde el panel de EmailJS > Account > API Keys)
emailjs.init("a73IMy3I9jJTYTs-E"); // Reemplazá esto con tu User ID real

// Esperar que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario'); //guardo form dentro de variable

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir recarga

    // Enviar el formulario con EmailJS
    emailjs.sendForm('service_ve4ot5t', 'template_m8bqsnk', this)
      .then(function () {
        alert('Formulario enviado con éxito 📧');
        form.reset(); // Limpiar formulario
        console.log("Enviado exitosamente!")
      }, function (error) {
        console.error('Error al enviar:', error);
        alert('Hubo un error. Revisá la consola.');
      });
  });
});

