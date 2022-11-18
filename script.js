const botaoEntrar = document.getElementById('botaoEntrar');

function acessarForm() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', acessarForm);

const botaoEnviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function habilitarDesabilitarBtn(event) {
  if (event.target.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}
checkbox.addEventListener('change', habilitarDesabilitarBtn);
