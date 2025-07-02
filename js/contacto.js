const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(formulario);

  console.log('Nombre:', formData.get('name'));
  console.log('Correo:', formData.get('email'));
  console.log('Mensaje:', formData.get('message'));

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
