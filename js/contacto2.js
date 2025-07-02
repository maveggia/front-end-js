const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(formulario);

  console.log('Nombre:', formData.get('nombre'));
  console.log('Correo:', formData.get('correo'));
  console.log('Mensaje:', formData.get('mensaje'));

  fetch('https://formspree.io/f/xldbzlzl', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) formulario.reset();
  })
  .catch(error => {
    console.error(error);
  });
});
