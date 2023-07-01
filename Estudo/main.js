const input = document.querySelector('#inputMaster');
input.addEventListener('keyup', soltou);

function soltou(event) {
  console.log(`TECLA APERTADA: ${event.code}`);
  console.log(`SHIFT? ${event.shiftKey}`);
  console.log('CTRL?' + event.ctrlKey)
  console.log('--')
}
