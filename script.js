const partes = [
  "Hola, lo siento por la espera, pero aja, sé que esto te va a gustar, espero sea de tu agrado.",

  "Hace tiempo necesitaba algo especial que calmara mis pensamientos, que cambiara el modo en que veía las cosas de un momento a otro, creo que fue tu sonrisa o tu amor, tal vez de cómo me haces sentir, pero lo que sí tengo claro es que quiero que continúe, cada hilo de nuestro destino o de nuestro amor quiero que se junte, cada vida que elija quiero que sea junto a ti, permanecer pierde el sentido si no estás a mi lado, cada día, cada milenio, quiero permanecer en tu regazo, amándote por un largo plazo, donde nada es efímero y nuestro amor se vuelve tan puro como el diamante, tan brillante como el oro y tan inmenso como el infinito.",

  "No sé qué puedo tener a mi alcance en mi futuro, porque es incierto pero prometedor, cada día que vivimos, cada minuto que pasamos juntos, hace que mis días sean todo para alcanzar todo lo que quiero para ti.",

  "Quiero acabar con algo que leí:\n\n«Te pienso sin permiso, te pienso sin querer, en los rincones más simples del día. En la música, en el café, en los lugares donde el recuerdo se sienta a conversar con la nostalgia. Y aunque intente distraerme con el ruido del mundo, mi corazón siempre encuentra el camino de regreso a ti, porque hay pensamientos que no se borran, solo aprenden a vivir en silencio.»\n\nCon esto, quiero seguir contigo en mi vida."
];

let index = 0;
const letterText = document.getElementById('letterText');
const dotsWrap = document.getElementById('dots');
const nextBtn = document.getElementById('nextBtn');
const letterStage = document.getElementById('letterStage');
const proposalStage = document.getElementById('proposalStage');
const thanksStage = document.getElementById('thanksStage');

function renderDots(){
  dotsWrap.innerHTML = '';
  partes.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === index ? ' active' : '');
    dotsWrap.appendChild(d);
  });
}

function renderPart(){
  letterText.classList.remove('enter');
  void letterText.offsetWidth; // reinicia animación
  letterText.innerText = partes[index];
  letterText.classList.add('enter');
  renderDots();
  nextBtn.textContent = (index === partes.length - 1) ? 'Terminar' : 'Seguir leyendo';
}

nextBtn.addEventListener('click', () => {
  if(index < partes.length - 1){
    index++;
    renderPart();
  } else {
    letterStage.classList.add('hidden');
    proposalStage.classList.remove('hidden');
  }
});

document.getElementById('yesBtn').addEventListener('click', () => {
  proposalStage.classList.add('hidden');
  thanksStage.classList.remove('hidden');
  lanzarConfeti();
});

renderPart();

// ---------- fondo flotante ----------
const bgDecor = document.getElementById('bgDecor');
const colores = ['#7EC8E3', '#F5B942', '#FFE29A', '#B8E1F0'];

for(let i = 0; i < 16; i++){
  const el = document.createElement('div');
  el.className = 'drift';
  const size = 6 + Math.random() * 14;
  el.style.width = size + 'px';
  el.style.height = size + 'px';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.background = colores[Math.floor(Math.random() * colores.length)];
  el.style.animationDuration = (10 + Math.random() * 12) + 's';
  el.style.animationDelay = (Math.random() * 10) + 's';
  bgDecor.appendChild(el);
}

// ---------- confeti al aceptar ----------
function lanzarConfeti(){
  for(let i = 0; i < 40; i++){
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      const size = 5 + Math.random() * 8;
      c.style.width = size + 'px';
      c.style.height = size + 'px';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = colores[Math.floor(Math.random() * colores.length)];
      c.style.animationDuration = (2.5 + Math.random() * 2) + 's';
      document.getElementById('app').appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }, i * 60);
  }
}
