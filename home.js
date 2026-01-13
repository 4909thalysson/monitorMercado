  const frasesDoDia = [
    'Juntos, transformamos informações de mercado em melhores decisões para o campo.',
    'Cada safra bem-sucedida começa com planejamento, dedicação e trabalho em equipe.',
    'No campo, como na empresa, os melhores resultados vêm de quem cultiva conhecimento e compromisso todos os dias.',
    'Inovação no agronegócio é unir tradição, tecnologia e pessoas comprometidas com o futuro.',
    'O esforço de hoje é a colheita de amanhã — no campo e na gestão.',
    'Quando todos trabalham com o mesmo propósito, o crescimento acontece de forma sustentável.',
    'A força do agronegócio está na união entre produtores, colaboradores e parceiros.',
    'Cada desafio no campo é uma oportunidade para inovar e crescer juntos.',
    'O sucesso no agronegócio depende de planejamento, trabalho em equipe e paixão pelo que fazemos.',
    'No agronegócio, a colaboração é a chave para transformar desafios em oportunidades.'
  ];

  function escolherFraseDoDia() {
    const hoje = new Date();
    const inicioAno = new Date(hoje.getFullYear(), 0, 0);
    const diff = hoje - inicioAno;
    const oneDay = 1000 * 60 * 60 * 24;
    const diaDoAno = Math.floor(diff / oneDay);
    
    const indice = diaDoAno % frasesDoDia.length;
    document.getElementById('frase-dia-texto').textContent = frasesDoDia[indice];
  }

  escolherFraseDoDia();


/* Adiciona frases na tela de inicio*/

  const frasesInicio = [
  "Seu portal para acompanhar as cotações e notícias do mercado agrícola.",
  "Panorama diário do mercado de maneira simples e intuitiva",
  "Informação estratégica para decisões no agronegócio."
];

let fraseIndex = 0;
const paragrafo = document.querySelector(".paragrafoInicio");

function trocarFrase() {
  paragrafo.style.opacity = 0;

  setTimeout(() => {
    paragrafo.textContent = frasesInicio[fraseIndex];
    paragrafo.style.opacity = 1;
    fraseIndex = (fraseIndex + 1) % frasesInicio.length;
  }, 400);
}

trocarFrase();
setInterval(trocarFrase, 4500);
