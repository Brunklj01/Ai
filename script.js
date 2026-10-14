// A construção da democracia em Portugal — Grupo IV. HTML/CSS/JS simples, sem bibliotecas.
const C = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const FOTO = {
  h1: C + "25%20de%20Abril%20de%201974%20-%20Fotografia%20de%20Ana%20Hatherly.jpg?width=1800",
  h2: C + "25%20de%20Abril%20de%201974%20%282%29-%20Fotografia%20de%20Ana%20Hatherly.jpg?width=1400",
  rev: C + "Revolu%C3%A7%C3%A3o%20dos%20Cravos.jpg?width=1800",
  sal: C + "Antonio%20Salazar-1.jpg?width=900",
  gra: "https://res.cloudinary.com/dpodm97yf/image/upload/v1792011165/imagem_2026-10-14_215244351_smukrr.png"
};
const LEG = {
  h1: "Lisboa, 25 de abril de 1974. Fotografia de Ana Hatherly, Arquivo Municipal de Lisboa (via Wikimedia Commons)",
  h2: "Lisboa, 25 de abril de 1974. Fotografia de Ana Hatherly, Arquivo Municipal de Lisboa (via Wikimedia Commons)",
  rev: "Revolução de 25 de Abril de 1974. Wikimedia Commons, «Revolução dos Cravos.jpg»",
  sal: "António de Oliveira Salazar, c. 1940. Autor desconhecido, domínio público (Wikimedia Commons)",
  gra: "Imagem sobre «Grândola, Vila Morena», fornecida pelo grupo (origem e licença por confirmar)"
};
const VIDEO = "https://www.youtube.com/results?search_query=Gr%C3%A2ndola+Vila+Morena+Jos%C3%A9+Afonso"; // pesquisa no YouTube
const fundo = (k) => `<figure class="fundo"><img src="${FOTO[k]}" alt="${LEG[k]}"></figure>`;
const a = (i) => `data-a style="--i:${i}"`;

const grupos = ["Ai", "Pergunta 1 · Cronologia", "Pergunta 2 · Testemunhos", "Pergunta 3 · Liberdade de expressão", "Pergunta 4 · Fontes da época", "Pergunta 5 · Segregação e liberdade"];

const slides = [
{ nome: "Capa", g: 0, 
  h: `${fundo("h1")}<p class="etq" ${a(0)}>Grupo IV · A construção da democracia em Portugal</p><h1 class="mega" ${a(1)}>PORTUGAL</h1><p class="mega m2 v" ${a(2)}>DA DITADURA<br>À DEMOCRACIA</p><p class="frase" ${a(3)}>1926 — 1976</p><p class="cap" ${a(4)}>${LEG.h1}</p>` },
{ nome: "Pergunta principal", g: 0, 
  h: `<p class="etq" ${a(0)}>Ai</p><h2 class="mega m2" ${a(1)}>COMO PASSOU PORTUGAL DE UMA <span class="v">DITADURA</span> PARA UMA <span class="v">DEMOCRACIA</span>?</h2><p class="frase" ${a(2)}>Quatro tempos: ditadura, guerra, revolução, democracia.</p>` },
{ nome: "O início da ditadura", g: 0, claro: 1, 
  h: `<div class="duas-col"><div><p class="etq" ${a(0)}>1926 → 1933</p><div class="linhas"><div ${a(1)}><span class="dt">1926</span><span class="mega m2">GOLPE MILITAR</span></div><div ${a(2)}><span class="dt">1933</span><span class="mega m2">ESTADO NOVO</span></div><div ${a(3)}><span class="dt">&nbsp;</span><span class="mega m2 v">SALAZAR</span></div></div><p class="mini" ${a(4)}>Fim da Primeira República. Uma nova Constituição. Um regime autoritário.</p></div><figure class="foto alto" ${a(2)}><img src="${FOTO.sal}" alt="${LEG.sal}"><figcaption>${LEG.sal}</figcaption></figure></div>` },
{ nome: "Um regime sem liberdade", g: 0, 
  h: `<p class="etq" ${a(0)}>Estado Novo</p><div class="grelha"><div ${a(1)}><h2 class="mega m2">CENSURA</h2><p class="mini">Jornais e livros controlados.</p></div><div ${a(2)}><h2 class="mega m2 v">PIDE</h2><p class="mini">Polícia política: vigia e interroga.</p></div><div ${a(3)}><h2 class="mega m2">REPRESSÃO</h2><p class="mini">Opositores presos ou intimidados.</p></div><div ${a(4)}><h2 class="mega m2 v">SEM ELEIÇÕES LIVRES</h2><p class="mini">Sem escolha livre dos governantes.</p></div></div>` },
{ nome: "A Guerra Colonial", g: 0, claro: 1, 
  h: `<p class="etq" ${a(0)}>1961 → 1974</p><div class="linhas"><div ${a(1)}><span class="dt">1961</span><span class="mega m2">ANGOLA</span></div><div ${a(2)}><span class="dt">1963</span><span class="mega m2">GUINÉ</span></div><div ${a(3)}><span class="dt">1964</span><span class="mega m2">MOÇAMBIQUE</span></div></div><p class="frase" ${a(4)}>Uma guerra que desgastou o regime.</p><p class="mini" ${a(5)}>Um dos fatores da queda do Estado Novo, não o único.</p>` },
{ nome: "25 de abril de 1974", g: 0, 
  h: `${fundo("rev")}<p class="etq" ${a(0)}>A revolução</p><h2 class="mega" ${a(1)}>25 ABRIL<br><span class="v">1974</span></h2><div class="linhas" ${a(3)}><div><span class="mega m3">MFA</span><span class="mega m3 v">CRAVOS</span><span class="mega m3">FIM DA CENSURA</span></div></div><p class="frase" ${a(4)}>O fim da ditadura. O começo da democracia.</p><a class="btn" ${a(5)} href="${VIDEO}" target="_blank" rel="noopener">Ver «Grândola, Vila Morena» no YouTube</a><p class="cap">${LEG.rev}</p>` },
{ nome: "Da revolução à Constituição", g: 0, claro: 1, 
  h: `<p class="etq" ${a(0)}>1975 → 1976</p><div class="linhas"><div ${a(1)}><span class="dt">25 ABR 1975</span><span class="mega m3">ELEIÇÕES PARA A CONSTITUINTE</span></div><div ${a(3)}><span class="dt">2 ABR 1976</span><span class="mega m3">CONSTITUIÇÃO APROVADA</span></div><div ${a(5)}><span class="dt">25 ABR 1976</span><span class="mega m3">EM VIGOR + ELEIÇÕES LEGISLATIVAS</span></div></div><p class="frase" ${a(6)}>Consolidação da democracia.</p>` },
{ nome: "1 · Cronologia", g: 1, 
  h: `<p class="etq" ${a(0)}>Pergunta 1</p><h2 class="mega m2" ${a(1)}>CRONOLOGIA<br><span class="v">1926 → 1976</span></h2><div class="cron" id="cron" ${a(2)}></div><p class="detalhe" id="cron-det" aria-live="polite">Escolhe uma data.</p>` },
{ nome: "2 · Testemunhos", g: 2, claro: 1, 
  h: `<p class="etq" ${a(0)}>Pergunta 2</p><h2 class="mega m2" ${a(1)}>A HISTÓRIA<br><span class="v">TAMBÉM SE OUVE</span></h2><div class="duas-col"><div class="linhas" ${a(2)}><div><span class="mega m3">VIVER NA DITADURA?</span></div><div><span class="mega m3">PODIAS CRITICAR?</span></div><div><span class="mega m3">O QUE MUDOU?</span></div><div><span class="mega m3 v">LIBERDADE PARA TI?</span></div></div><div ${a(3)}><div class="campo" contenteditable="true" aria-label="Citação real do entrevistado">Citação real do entrevistado (por preencher).</div><br><div class="campo" contenteditable="true" aria-label="Quem, quando e contexto">Quem, quando e contexto da entrevista, com autorização (por preencher).</div></div></div>` },
{ nome: "3 · Liberdade de expressão", g: 3, 
  h: `<p class="etq" ${a(0)}>Pergunta 3</p><h2 class="mega m2" ${a(1)}>ANTES. <span class="v">HOJE.</span></h2><div class="comp" ${a(2)}><div class="a"><h3>ESTADO NOVO</h3><ul><li>Censura.</li><li>Imprensa controlada.</li><li>Opositores reprimidos.</li></ul></div><div class="b" id="lado-b"><h3>HOJE</h3><ul><li>Liberdade de expressão.</li><li>Imprensa livre.</li><li>Pluralismo e eleições livres.</li></ul></div><input type="range" min="5" max="95" value="50" id="sep" aria-label="Arrasta para comparar"></div><p class="frase" ${a(3)}>Um direito protegido pela Constituição, com limites legais.</p>` },
{ nome: "4 · Fontes da época", g: 4, claro: 1, 
  h: `<p class="etq" ${a(0)}>Pergunta 4</p><h2 class="mega m2" ${a(1)}>OBSERVA.<br><span class="v">INTERPRETA.</span></h2><div class="cartoes" id="galeria" ${a(2)}></div><a class="btn" ${a(3)} href="${VIDEO}" target="_blank" rel="noopener">Ver «Grândola, Vila Morena» no YouTube</a>` },
{ nome: "5 · Segregação e liberdade", g: 5, 
  h: `<p class="etq" ${a(0)}>Pergunta 5</p><h2 class="mega m2" ${a(1)}>DIFERENTES LUTAS.<br><span class="v">VALORES COMUNS.</span></h2><div class="linhas" ${a(2)}><div><span class="mega m3">IGUALDADE</span><span class="mega m3 v">DIGNIDADE</span><span class="mega m3">LIBERDADE</span></div></div><div class="duas-col" ${a(3)}><div class="campo" contenteditable="true" aria-label="Título do filme">Título do filme (por preencher)</div><div class="campo" contenteditable="true" aria-label="Exemplo do filme">Exemplo concreto do filme (por preencher)</div></div><p class="frase" ${a(4)}>Sistemas diferentes, o mesmo problema: direitos negados.</p>` },
{ nome: "Jogos e fontes", g: 0, 
  h: `<p class="etq" ${a(0)}>Estás pronto?</p><h2 class="mega m2" ${a(1)}>HORA DO <span class="v">DESAFIO</span></h2><div class="jogos-tab" role="tablist"><button role="tab" data-j="quiz" aria-selected="true">Quiz</button><button role="tab" data-j="ordem" aria-selected="false">Organiza a cronologia</button><button role="tab" data-j="mito" aria-selected="false">Falso ou verdade?</button><button role="tab" data-j="pares" aria-selected="false">Liga os pares</button><button role="tab" data-j="quem" aria-selected="false">Quem sou eu?</button><button role="tab" data-j="antes" aria-selected="false">Antes ou depois?</button><button role="tab" data-j="lacunas" aria-selected="false">Completa a frase</button></div><div id="jogo"></div><p class="frase">A liberdade e a democracia são conquistas que devem ser valorizadas e protegidas.</p><div class="fontes"><h3 class="etq">Fontes e créditos</h3><ul><li>Fotografias de Ana Hatherly, 25 de abril de 1974, Arquivo Municipal de Lisboa: <a href="https://commons.wikimedia.org/wiki/Category:Revolu%C3%A7%C3%A3o_dos_Cravos" target="_blank" rel="noopener">Wikimedia Commons</a> (licença indicada em cada ficheiro).</li><li>«Revolução dos Cravos.jpg»: <a href="https://commons.wikimedia.org/wiki/File:Revolução_dos_Cravos.jpg" target="_blank" rel="noopener">Wikimedia Commons</a>.</li><li>«Antonio Salazar-1.jpg», c. 1940, domínio público: <a href="https://commons.wikimedia.org/wiki/File:Antonio_Salazar-1.jpg" target="_blank" rel="noopener">Wikimedia Commons</a>.</li><li>«Grândola, Vila Morena», José Afonso: <a href="${VIDEO}" target="_blank" rel="noopener">YouTube</a>.</li><li>Datas a confirmar em <a href="https://www.parlamento.pt" target="_blank" rel="noopener">parlamento.pt</a>.</li></ul></div><div class="creditos"><p class="etq">Grupo 4</p><p class="mini" style="max-width:none">Feito por</p><ul><li>Bruno Silva</li><li>Francisco Fernandes</li><li>Artur Dias</li><li>Stephany Machado</li></ul></div>` }
];


// ---------- Nova estrutura: pergunta principal + perguntas 1 a 5 da ficha ----------
const Q = [
  "Como passou Portugal de uma ditadura para uma democracia?",
  "Construir uma cronologia entre 1926 e 1976.",
  "Recolher testemunhos familiares ou locais sobre a vida antes e depois do 25 de abril.",
  "Comparar a liberdade de expressão durante o Estado Novo e na atualidade.",
  "Analisar notícias, fotografias, cartazes políticos ou canções da época.",
  "Relacionar a luta contra a segregação no filme com a luta pela liberdade em Portugal."
];
const divisor = (k, mega) => ({
  nome: "Pergunta " + k, g: k,
  
  h: `<p class="etq" ${a(0)}>Pergunta ${k} de 5</p><h2 class="mega m2" ${a(1)}>${mega}</h2><p class="frase" ${a(2)}>${Q[k]}</p>`
});
const base = slides.slice();
const indice = { nome: "O que vamos responder", g: 0,
  
  h: `<p class="etq" ${a(0)}>O plano</p><h2 class="mega m2" ${a(1)}>6 PERGUNTAS.<br><span class="v">6 RESPOSTAS.</span></h2><div class="linhas" ${a(2)}>${Q.map((q, k) => `<div><span class="dt">${k === 0 ? "AI" : "PERGUNTA " + k}</span><span class="frase" style="max-width:none">${q}</span></div>`).join("")}</div>` };
const conclusao = { nome: "Conclusão", g: 0,
  
  h: `${fundo("h2")}<p class="etq" ${a(0)}>Conclusão</p><h2 class="mega m2" ${a(1)}>DA DITADURA<br><span class="v">À LIBERDADE</span></h2><p class="frase" ${a(2)}>A liberdade e a democracia são conquistas que devem ser valorizadas e protegidas.</p><p class="cap">${LEG.h2}</p>` };
base[7].q = Q[1]; base[8].q = Q[2]; base[9].q = Q[3]; base[10].q = Q[4]; base[11].q = Q[5];
const revDem = { nome: "Da revolução à democracia", g: 0, claro: 1,
  h: `<p class="etq" ${a(0)}>1974 → 1975</p><div class="linhas"><div ${a(1)}><span class="dt">25 ABR 1974</span><span class="mega m3">FIM DA DITADURA</span></div><div ${a(2)}><span class="dt">1974–75</span><span class="mega m3">PARTIDOS E PARTICIPAÇÃO POLÍTICA</span></div><div ${a(3)}><span class="dt">25 ABR 1975</span><span class="mega m3 v">ELEIÇÕES PARA A CONSTITUINTE</span></div></div><p class="frase" ${a(5)}>A democracia ainda estava por construir.</p><p class="mini" ${a(6)}>Os portugueses escolheram quem ia escrever a nova Constituição.</p>` };
const const76 = { nome: "A Constituição de 1976", g: 0,
  h: `<p class="etq" ${a(0)}>1976</p><div class="linhas"><div ${a(1)}><span class="dt">2 ABR 1976</span><span class="mega m3">CONSTITUIÇÃO APROVADA</span></div><div ${a(2)}><span class="dt">25 ABR 1976</span><span class="mega m3 v">CONSTITUIÇÃO EM VIGOR</span></div><div ${a(3)}><span class="dt">25 ABR 1976</span><span class="mega m3">ELEIÇÕES LEGISLATIVAS</span></div></div><p class="frase" ${a(5)}>Direitos, liberdades e garantias. Instituições democráticas.</p><p class="mini" ${a(6)}>Aprovada ≠ em vigor: são duas datas diferentes.</p>` };
const antesDepois = { nome: "Antes e depois do 25 de Abril", g: 2, claro: 1, q: Q[2],
  h: `<p class="etq" ${a(0)}>Pergunta 2 · Testemunhos</p><h2 class="mega m2" ${a(1)}>ANTES. <span class="v">DEPOIS.</span></h2><div class="grelha"><div ${a(2)}><h3 class="mega m3">ANTES DO 25 DE ABRIL</h3><ul class="pontos"><li>Censura prévia</li><li>PIDE e repressão</li><li>Eleições sem liberdade</li><li>Medo de criticar o regime</li></ul></div><div ${a(3)}><h3 class="mega m3 v">DEPOIS DO 25 DE ABRIL</h3><ul class="pontos"><li>Fim da censura</li><li>Liberdade de expressão, reunião e associação</li><li>Presos políticos libertados</li><li>Eleições livres</li></ul></div></div><p class="mini" ${a(4)} style="max-width:70ch">Facto documentado: depois de 25 de abril de 1974, muitos jornais passaram a escrever que não tinham sido visados por qualquer comissão de censura. A revolução não resolveu logo todos os problemas económicos e sociais.</p>` };
const grandeDebate = { nome: "5 · Segregação e liberdade", g: 5, q: Q[5],
  h: `<p class="etq" ${a(0)}>Pergunta 5</p><h2 class="mega m2" ${a(1)}>DIFERENTES LUTAS.<br><span class="v">VALORES COMUNS.</span></h2><div class="linhas" ${a(2)}><div><span class="mega m3">IGUALDADE</span><span class="mega m3 v">DIGNIDADE</span><span class="mega m3">LIBERDADE</span></div></div><div class="grelha" ${a(3)}><div><h3 class="mega m3">O GRANDE DEBATE (2007)</h3><p class="mini" style="max-width:none">EUA, anos 1930: racismo e segregação. A resposta: educação, argumentação e debate.</p></div><div><h3 class="mega m3 v">PORTUGAL, ESTADO NOVO</h3><p class="mini" style="max-width:none">Censura, repressão e falta de liberdade. O 25 de Abril abriu caminho à democracia.</p></div></div><p class="frase" ${a(4)}>Contextos diferentes. Os mesmos valores.</p><p class="cap">Filme: «O Grande Debate» (The Great Debaters, 2007).</p>` };
const nova = [base[0], indice, base[1], base[2], base[3], base[4], base[5], revDem, const76,
  divisor(1, "CRONOLOGIA"), base[7],
  antesDepois,
  divisor(3, "ANTES.<br>HOJE."), base[9],
  divisor(4, "FONTES<br>DA ÉPOCA"), base[10],
  divisor(5, "SEGREGAÇÃO<br>E LIBERDADE"), grandeDebate,
  conclusao, base[12]];
base[1].nome = "Ai";
slides.length = 0; slides.push(...nova);
// ---------- Textos de apoio à apresentação oral (30–60 s cada) ----------
const APOIO = {
 "O início da ditadura": ["Vamos começar pelo início da ditadura. A 28 de maio de 1926, um golpe militar pôs fim à Primeira República e iniciou a Ditadura Militar. Nessa altura, ainda não existia o Estado Novo.", "Foi em 1933 que se aprovou uma nova Constituição e o regime foi institucionalizado, com António de Oliveira Salazar à frente do Governo. O Estado Novo era um regime autoritário: limitava as liberdades dos cidadãos e impedia a existência de uma verdadeira democracia.", "Por isso é importante distinguir as duas datas: 1926 marca o golpe e a Ditadura Militar; 1933 marca o início oficial do Estado Novo."],
 "Um regime sem liberdade": ["Como funcionava o Estado Novo? Em primeiro lugar, o regime controlava a informação através da censura: os jornais, os livros e outras publicações eram vistos antes de serem publicados e podiam ser cortados.", "Havia também a PIDE, a polícia política, que vigiava, perseguia e interrogava os opositores. Quem criticava o regime podia ser perseguido, preso ou intimidado, o que criava um ambiente de medo, em que muita gente evitava falar abertamente.", "Por fim, não existiam eleições verdadeiramente livres, por isso os portugueses não podiam escolher livremente quem os governava. Em conjunto, estas quatro características mostram um regime sem liberdade política."],
 "A Guerra Colonial": ["A Guerra Colonial começou em Angola, em 1961. Em 1963 alargou-se à Guiné e, em 1964, a Moçambique. Foi um conflito longo, com muitas mortes e feridos e com custos económicos elevados.", "Muitos jovens foram mobilizados para combater longe de casa e as suas famílias viveram anos de angústia. As populações africanas também sofreram as consequências da guerra.", "Aos poucos, cresceu o descontentamento entre militares e civis e o regime ficou cada vez mais desgastado. A guerra foi um dos fatores que levaram à queda do Estado Novo, mas não foi a única causa da revolução."],
 "25 de abril de 1974": ["A 25 de abril de 1974, o Movimento das Forças Armadas, o MFA, derrubou a ditadura. Era formado sobretudo por militares descontentes com o regime e com a Guerra Colonial.", "Quando os militares saíram para a rua, a população juntou-se e apoiou a revolução. Os cravos vermelhos tornaram-se o seu símbolo, e por isso se fala na Revolução dos Cravos.", "O Estado Novo acabou, a censura terminou, os presos políticos foram libertados e as pessoas recuperaram as liberdades de expressão, de reunião e de associação. Mas o 25 de Abril não criou uma democracia completa num só dia: foi o início de um processo de democratização, que continuou nos anos seguintes."],
 "Da revolução à democracia": ["Depois do 25 de Abril, a democracia ainda estava por construir. Foi um período de grandes mudanças políticas, com muita discussão e participação das pessoas, e os partidos políticos puderam organizar-se e apresentar propostas aos portugueses.", "A 25 de abril de 1975, um ano depois da revolução, realizaram-se as eleições para a Assembleia Constituinte. Os portugueses escolheram, em eleições livres, os representantes que iriam escrever a nova Constituição.", "Estas eleições mostram como a participação política e a organização dos partidos foram essenciais para construir um regime democrático."],
 "A Constituição de 1976": ["A Constituição da República Portuguesa foi aprovada a 2 de abril de 1976, mas só entrou em vigor a 25 de abril de 1976. Convém não confundir as duas datas: uma é a aprovação, a outra é o início da sua aplicação.", "A Constituição consagrou os direitos, as liberdades e as garantias dos cidadãos, a participação política e as instituições democráticas. No mesmo dia 25 de abril de 1976 realizaram-se as eleições legislativas para a Assembleia da República, que ajudaram a consolidar a democracia.", "Assim, em pouco mais de dois anos, Portugal passou do fim da ditadura a um regime com Constituição e eleições livres."],
 "1 · Cronologia": ["A nossa cronologia vai de 1926 a 1976. Em 1926, o golpe militar; em 1933, o Estado Novo; em 1936, a criação da Mocidade Portuguesa. Entre 1939 e 1945, durante a Segunda Guerra Mundial, Portugal manteve-se oficialmente neutro, embora a sua posição tenha sofrido pressões dos dois lados.", "Em 1961 começou a guerra em Angola, em 1963 na Guiné e em 1964 em Moçambique. Em 1968, Marcelo Caetano substituiu Salazar, mas a ditadura manteve-se.", "Depois vêm as datas da democracia: a revolução a 25 de abril de 1974, as eleições para a Constituinte em 1975 e, em 1976, a Constituição e as eleições legislativas."],
 "Antes e depois do 25 de Abril": ["Esta página compara a vida antes e depois do 25 de Abril. Antes, havia censura, polícia política e eleições que não eram livres, e criticar o regime podia ter consequências.", "Depois da revolução, acabaram a censura e a repressão política, os presos políticos foram libertados e os portugueses puderam falar, reunir-se, associar-se e votar livremente. Um facto documentado: depois do 25 de Abril, muitos jornais passaram a escrever na primeira página que não tinham sido visados por qualquer comissão de censura.", "A revolução mudou profundamente a vida política e social, mas não resolveu de imediato todos os problemas económicos e sociais do país."],
 "3 · Liberdade de expressão": ["Vamos comparar a liberdade de expressão no Estado Novo e hoje. Durante a ditadura, a censura prévia controlava os jornais, os livros e outros meios de comunicação: os textos eram vistos antes de serem publicados e o que desagradava ao regime era cortado. Quem se opunha ao regime podia ser perseguido, preso ou intimidado.", "Hoje, a liberdade de expressão e a liberdade de imprensa são protegidas pela Constituição. Os cidadãos podem criticar o Governo, discutir ideias e participar na vida pública. Mas a liberdade de expressão não é ilimitada: tem limites legais, porque deve respeitar os direitos das outras pessoas, como a honra e a dignidade.", "Em resumo: na ditadura, a censura era política e servia para proteger o poder; na democracia, os limites existem para proteger direitos, não para impedir a crítica."],
 "4 · Fontes da época": ["Para analisar fontes históricas, escolhemos fotografias da Revolução dos Cravos, um retrato de Salazar e a canção «Grândola, Vila Morena». Para cada fonte, vemos quando foi feita, o que mostra e o que revela sobre a liberdade ou a falta dela.", "As fotografias de 25 de abril de 1974 mostram militares e população juntos na rua, em celebração, e revelam que a revolução teve apoio popular. O retrato de Salazar é uma imagem institucional do poder do Estado Novo.", "Por fim, «Grândola, Vila Morena», de José Afonso, foi transmitida pela Rádio Renascença às 00h20 de 25 de abril de 1974, como senha da operação militar. Tornou-se um símbolo da luta pela liberdade e teve um papel concreto na Revolução dos Cravos."],
 "5 · Segregação e liberdade": ["Para a última pergunta, relacionámos o filme «O Grande Debate», de 2007, com a luta pela liberdade em Portugal. O filme passa-se nos Estados Unidos, nos anos 1930, e retrata jovens afro-americanos que enfrentam o racismo e a segregação racial. Usam a educação, a argumentação e os debates para defender a igualdade e a dignidade humana.", "Em Portugal, durante o Estado Novo, havia censura, repressão política e limitações às liberdades fundamentais. A Revolução de 25 de Abril de 1974 iniciou o fim da ditadura e abriu caminho à democracia.", "Os contextos são diferentes: a segregação racial nos Estados Unidos não é igual à ditadura portuguesa. O que as une são os valores: a defesa dos direitos humanos, da liberdade, da igualdade e da dignidade, e a luta contra a opressão e a negação de direitos."],
 "Conclusão": ["Portugal passou de uma ditadura para uma democracia através da Revolução de 25 de abril de 1974, que derrubou o Estado Novo.", "A revolução permitiu recuperar as liberdades fundamentais e iniciar a construção de um regime democrático. As eleições livres e a Constituição de 1976 foram fundamentais para consolidar a democracia portuguesa. A liberdade e a democracia são conquistas que devem ser valorizadas e protegidas."],
 "Jogos e fontes": ["Chegou a altura dos jogos. Podem jogar neste computador, um de cada vez: há um quiz com tempo, a cronologia para ordenar, falso ou verdade e outros desafios.", "No fim da página estão as fontes e os créditos das imagens. Obrigado pela atenção."]
};
[1, 2, 3, 4, 5].forEach((k) => { APOIO["Pergunta " + k] = [`Pergunta ${k} da ficha: ${Q[k]}`, "Vamos ver a resposta."]; });
slides.forEach((s) => { s.apoio = APOIO[s.nome]; });

slides.forEach((s, i) => { if (s.claro === undefined && s.nome.startsWith("Pergunta ") && /^Pergunta [1-5]$/.test(s.nome)) s.claro = i % 2; });

// ---------- Construção ----------
const palco = document.getElementById("palco");
slides.forEach((s, i) => {
  const el = document.createElement("section");
  el.className = "slide" + (s.claro ? " claro" : "");
  el.setAttribute("aria-label", `Ecrã ${i + 1}: ${s.nome}`);
  el.innerHTML = (s.q ? `<p class="perg" data-a style="--i:0">Pergunta ${Q.indexOf(s.q)}: ${s.q}</p>` : "") + s.h;
  palco.appendChild(el);
});
const els = [...document.querySelectorAll(".slide")];
const total = els.length;
let atual = 0;
const reduzir = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (id) => document.getElementById(id);
const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Navegação
function mostrar(n) { if (n >= 0 && n < total) els[n].scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" }); }
function marcar(n) {
  atual = n;
  $("contador").textContent = String(n + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
  $("prog").style.width = ((n + 1) / total) * 100 + "%";
  $("b-ant").disabled = n === 0;
  $("b-seg").disabled = n === total - 1;
  document.querySelector(".marca").textContent = grupos[slides[atual].g].toUpperCase();
  apoioDe();
}
function apoioDe() {
  const s = slides[atual];
  $("apoio-texto").innerHTML = `<h4>${esc(s.nome)}</h4>` + (s.apoio ? s.apoio.map((t) => `<p>${t}</p>`).join("") : `<p class="vazio">Sem texto de apoio nesta página.</p>`);
}
const obs = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("on"); marcar(els.indexOf(e.target)); } }), { threshold: 0.45 });
els.forEach((el) => obs.observe(el));
$("b-apoio").onclick = () => ($("apoio").hidden = !$("apoio").hidden);
$("b-ant").onclick = () => mostrar(atual - 1);
$("b-seg").onclick = () => mostrar(atual + 1);
$("b-ecra").onclick = () => {
  if (!document.fullscreenEnabled) return;
  document.fullscreenElement ? document.exitFullscreen().catch(() => {}) : document.documentElement.requestFullscreen().catch(() => {});
};
const menu = $("menu"), janela = $("janela");
$("lista-cap").innerHTML = slides.map((s, i) => `<li><button type="button" data-i="${i}">${s.nome}</button></li>`).join("");
$("b-menu").onclick = () => menu.showModal();
$("fechar-menu").onclick = () => menu.close();
$("lista-cap").onclick = (e) => { const b = e.target.closest("button"); if (b) { menu.close(); mostrar(+b.dataset.i); } };
$("fechar-janela").onclick = () => janela.close();
document.addEventListener("keydown", (e) => {
  const t = e.target;
  if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || document.querySelector("dialog[open]")) return;
  if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); mostrar(atual + 1); }
  if (e.key === "t" || e.key === "T") $("apoio").hidden = !$("apoio").hidden;
  if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); mostrar(atual - 1); }
});
document.querySelectorAll(".fundo img,.foto img").forEach((img) => img.addEventListener("error", () => img.parentElement.classList.add("sem")));

// ---------- Cronologia (pergunta 1) ----------
const datas = [
  ["1926", "Golpe", "Golpe militar de 28 de maio: fim da Primeira República e início da Ditadura Militar."],
  ["1933", "Estado Novo", "Início oficial do Estado Novo, com uma nova Constituição."],
  ["1936", "Mocidade", "Criação da Mocidade Portuguesa."],
  ["1939–45", "2.ª Guerra", "Segunda Guerra Mundial: Portugal mantém-se oficialmente neutro."],
  ["1961", "Angola", "Início da Guerra Colonial em Angola."],
  ["1963", "Guiné", "Início da guerra na Guiné."],
  ["1964", "Moçambique", "Início da guerra em Moçambique."],
  ["1968", "Caetano", "Marcelo Caetano substitui Salazar na liderança do Governo, mas a ditadura mantém-se."],
  ["25 abr 1974", "Revolução", "Revolução dos Cravos e queda da ditadura."],
  ["25 abr 1975", "Constituinte", "Eleições para a Assembleia Constituinte."],
  ["2 abr 1976", "Constituição", "Aprovação da Constituição da República Portuguesa (entrou em vigor a 25 de abril de 1976)."],
  ["25 abr 1976", "Legislativas", "Eleições legislativas."]
];
$("cron").innerHTML = datas.map((d, i) => `<button type="button" data-i="${i}" aria-pressed="false"><b>${d[0]}</b><small>${d[1]}</small></button>`).join("");
$("cron").onclick = (e) => {
  const b = e.target.closest("button"); if (!b) return;
  $("cron").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", "false"));
  b.setAttribute("aria-pressed", "true");
  $("cron-det").textContent = datas[b.dataset.i][2];
};

// ---------- Comparador (pergunta 3) ----------
$("sep").oninput = (e) => { $("lado-b").style.clipPath = `inset(0 0 0 ${e.target.value}%)`; $("lado-b").style.paddingLeft = `calc(${e.target.value}% + 1rem)`; };

// ---------- Fontes da época (pergunta 4) ----------
const fontes = [
  { t: "Fotografia 1", img: "h1", d: "25 de abril de 1974", c: "Militares e população nas ruas de Lisboa.", r: "A população apoiou ativamente a revolução.", q: "O que mostra esta fotografia?", o: ["Uma revolta só de militares", "Militares e civis juntos na rua", "Uma eleição livre"], k: 1 },
  { t: "Fotografia 2", img: "h2", d: "25 de abril de 1974", c: "Cenas de celebração em Lisboa.", r: "O fim da ditadura foi vivido como uma libertação.", q: "Que sentimento transmite?", o: ["Medo e silêncio", "Celebração e esperança", "Indiferença"], k: 1 },
  { t: "Salazar", img: "sal", d: "c. 1940", c: "Retrato do chefe do Governo do Estado Novo.", r: "Imagem institucional do poder.", q: "A que período pertence?", o: ["Primeira República", "Estado Novo", "Democracia atual"], k: 1 },
  { t: "Grândola, Vila Morena", img: "gra", d: "24–25 de abril de 1974", c: "Canção de José Afonso, uma das senhas radiofónicas da operação militar.", r: "A música tornou-se símbolo da revolução. Pode ouvir-se no YouTube.", q: "Qual foi a função da canção?", o: ["Senha radiofónica da operação", "Hino nacional", "Anúncio publicitário"], k: 0 }
];

$("galeria").innerHTML = fontes.map((f, i) => `<button type="button" data-i="${i}"><b>${f.t}</b>${f.d}</button>`).join("");
$("galeria").onclick = (e) => {
  const b = e.target.closest("button"); if (!b) return;
  const f = fontes[b.dataset.i];
  $("janela-conteudo").innerHTML = `<div class="jimg">${f.img ? `<img src="${FOTO[f.img]}" alt="${LEG[f.img]}"><p class="cap">${LEG[f.img]}</p>` : `<div class="moldura"><p class="etq">Fonte</p><p class="frase">${f.t}</p><p class="cap">Imagem por inserir: só com origem, data e licença confirmadas. Fontes para consultar:</p>${(f.links || []).map((l) => `<a href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`).join("")}</div>`}</div>
    <div class="jtxt"><h3 class="mega m3">${f.t}</h3><p><b>Data:</b> ${f.d}</p><p><b>Contexto:</b> ${f.c}</p><p><b>O que revela:</b> ${f.r}</p><h4 class="frase" style="margin:1rem 0 .3rem">${f.q}</h4>
    <div class="opcoes">${f.o.map((o, j) => `<button type="button" data-j="${j}">${o}</button>`).join("")}</div><p id="fb" aria-live="polite"></p></div>`;
  const bs = $("janela-conteudo").querySelectorAll(".opcoes button");
  bs.forEach((x) => (x.onclick = () => {
    const ok = +x.dataset.j === f.k;
    bs.forEach((y) => (y.disabled = true));
    bs[f.k].classList.add("certo");
    if (!ok) x.classList.add("erro");
    $("fb").textContent = (ok ? "Certo! " : "Errado. ") + f.r;
  }));
  janela.showModal();
};

// ---------- Jogos (ecrã 15) ----------
const jogo = document.getElementById("jogo");
const quiz = [
  ["Em que ano ocorreu o golpe militar que pôs fim à Primeira República?", ["1910", "1926", "1933", "1974"], 1, "Foi a 28 de maio de 1926."],
  ["Em que ano foi institucionalizado o Estado Novo?", ["1926", "1933", "1968", "1976"], 1, "Em 1933, com a nova Constituição."],
  ["Qual foi a data da Revolução dos Cravos?", ["25 de abril de 1961", "1 de maio de 1974", "25 de abril de 1974", "25 de abril de 1976"], 2, "A 25 de abril de 1974."],
  ["Qual era uma das funções da censura no Estado Novo?", ["Garantir a liberdade de imprensa", "Controlar a publicação de notícias e opiniões", "Organizar eleições livres", "Promover a oposição"], 1, "A censura controlava o que se podia publicar."],
  ["Qual foi uma das senhas radiofónicas da Revolução?", ["A Portuguesa", "Grândola, Vila Morena", "O Hino à Alegria", "Nenhuma canção"], 1, "A canção de José Afonso foi uma das senhas."],
  ["Quando foram as eleições para a Assembleia Constituinte?", ["25 de abril de 1974", "25 de abril de 1975", "25 de abril de 1976", "1 de dezembro de 1976"], 1, "A 25 de abril de 1975."],
  ["Em que data entrou em vigor a Constituição de 1976?", ["25 de abril de 1975", "25 de novembro de 1975", "25 de abril de 1976", "25 de dezembro de 1976"], 2, "Foi aprovada a 2 de abril e entrou em vigor a 25 de abril de 1976."],
  ["Onde começou a Guerra Colonial, em 1961?", ["Guiné", "Moçambique", "Angola", "Cabo Verde"], 2, "Em Angola, em 1961."],
  ["Quem organizou o golpe de 25 de abril de 1974?", ["A PIDE", "O MFA", "A Mocidade Portuguesa", "A União Nacional"], 1, "O Movimento das Forças Armadas."],
  ["Quem substituiu Salazar na chefia do Governo em 1968?", ["Mário Soares", "Marcelo Caetano", "Otelo Saraiva de Carvalho", "Álvaro Cunhal"], 1, "Marcelo Caetano, mas a ditadura manteve-se."],
  ["A liberdade de expressão hoje é…", ["Um direito sem qualquer limite", "Um direito protegido pela Constituição, com limites legais", "Proibida", "Um privilégio"], 1, "Tem limites legais para proteger outros direitos."],
  ["Ao analisar uma fotografia histórica, o que convém verificar primeiro?", ["Se tem filtros", "Autor, data e origem", "Quantos likes teve", "Se é a cores"], 1, "A origem e o contexto dão credibilidade à fonte."],
  ["Ao recolher um testemunho familiar, o que é essencial?", ["Alterar as palavras para ficar mais bonito", "Ter autorização e registar a data e o contexto", "Inventar pormenores", "Não dizer quem falou"], 1, "Um testemunho tem de ser fiel, autorizado e contextualizado."],
  ["O que têm em comum a luta contra a segregação e a luta contra o Estado Novo?", ["Foram exatamente iguais", "Ambas lutaram contra a negação de direitos", "Ambas aconteceram em 1974", "Nenhuma tem ligação aos direitos humanos"], 1, "São contextos diferentes, mas ambos envolvem discriminação ou limitação de direitos."],
  ["Em que ano foi criada a Mocidade Portuguesa?", ["1926", "1936", "1961", "1976"], 1, "Em 1936, durante o Estado Novo."]
];
let qi = 0, pontos = 0, tempo = null;
function jogoQuiz() {
  clearInterval(tempo);
  if (qi >= quiz.length) {
    const nivel = pontos >= 12 ? "Historiador/a de Abril" : pontos >= 9 ? "Bom conhecedor/a" : "A caminho — revê e tenta de novo";
    jogo.innerHTML = `<h3 class="frase">${pontos} / ${quiz.length}</h3><p>${nivel}</p><button class="acao" id="rep">Repetir o quiz</button>`;
    document.getElementById("rep").onclick = () => { qi = 0; pontos = 0; jogoQuiz(); };
    return;
  }
  const [q, o, k, ex] = quiz[qi];
  jogo.innerHTML = `<p class="cap">Pergunta ${qi + 1} de ${quiz.length} · Pontos: ${pontos} · <label><input type="checkbox" id="tmp"> Temporizador (20 s)</label> <span id="seg"></span></p><h3 class="frase">${q}</h3><div class="opcoes">${o.map((x, j) => `<button type="button" data-j="${j}">${x}</button>`).join("")}</div><p id="fb" aria-live="polite"></p>`;
  const resp = (j) => {
    clearInterval(tempo);
    jogo.querySelectorAll(".opcoes button").forEach((b) => (b.disabled = true));
    const bs = jogo.querySelectorAll(".opcoes button");
    bs[k].classList.add("certo");
    if (j === k) pontos++; else if (j >= 0) bs[j].classList.add("erro");
    document.getElementById("fb").innerHTML = `${j === k ? "Certo!" : j < 0 ? "Tempo esgotado." : "Errado."} ${ex} <button class="acao" id="px">Seguinte</button>`;
    document.getElementById("px").onclick = () => { qi++; jogoQuiz(); };
  };
  jogo.querySelectorAll(".opcoes button").forEach((b) => (b.onclick = () => resp(+b.dataset.j)));
  document.getElementById("tmp").onchange = (e) => {
    clearInterval(tempo);
    const sp = document.getElementById("seg"); sp.textContent = "";
    if (!e.target.checked) return;
    let s = 20; sp.textContent = s + " s";
    tempo = setInterval(() => { s--; sp.textContent = s + " s"; if (s <= 0) resp(-1); }, 1000);
  };
  const tm = document.getElementById("tmp"); tm.checked = true; tm.onchange({ target: tm });
}

const eventos = [["1926", "Golpe militar de 1926"], ["1933", "Institucionalização do Estado Novo"], ["1961", "Início da Guerra Colonial em Angola"], ["1974", "Revolução dos Cravos"], ["1975", "Eleições para a Assembleia Constituinte"], ["1976", "Constituição de 1976"]];
let lista = [];
function jogoOrdem() {
  lista = eventos.map((e, i) => i).sort(() => Math.random() - 0.5);
  if (lista.every((v, i) => v === i)) lista.reverse();
  desenhaOrdem(null);
}
function desenhaOrdem(res) {
  jogo.innerHTML = `<p>Arrasta (ou usa as setas dos botões) para ordenar do mais antigo para o mais recente.</p><ol class="ordem" id="ol">${lista.map((v, p) => `<li draggable="true" data-p="${p}" class="${res ? (v === p ? "ok" : "mal") : ""}"><span>${eventos[v][1]}</span><button type="button" aria-label="Subir" data-m="-1">↑</button><button type="button" aria-label="Descer" data-m="1">↓</button></li>`).join("")}</ol><button class="acao" id="ver">Verificar</button> <button class="acao" id="rein">Reiniciar</button><p id="fb" aria-live="polite">${res ? res : ""}</p>`;
  const ol = document.getElementById("ol");
  const mover = (p, q) => { if (q < 0 || q >= lista.length) return; const [x] = lista.splice(p, 1); lista.splice(q, 0, x); desenhaOrdem(null); };
  ol.onclick = (e) => { const b = e.target.closest("button"); if (b) mover(+b.parentElement.dataset.p, +b.parentElement.dataset.p + +b.dataset.m); };
  let de = null;
  ol.ondragstart = (e) => { de = +e.target.closest("li").dataset.p; };
  ol.ondragover = (e) => e.preventDefault();
  ol.ondrop = (e) => { e.preventDefault(); const li = e.target.closest("li"); if (li && de !== null) mover(de, +li.dataset.p); };
  document.getElementById("rein").onclick = jogoOrdem;
  document.getElementById("ver").onclick = () => {
    const certos = lista.filter((v, p) => v === p).length;
    desenhaOrdem(`${certos} de ${eventos.length} certos. Ordem correta: ${eventos.map((e) => e[0]).join(" → ")}. O Estado Novo (1933) veio depois do golpe de 1926; a Constituinte (1975) antecedeu a Constituição (1976).`);
  };
}

const mitos = [
  ["O Estado Novo foi institucionalizado em 1933.", true, "Verdade: a Constituição de 1933 deu forma ao regime."],
  ["Portugal tornou-se uma democracia imediatamente após o golpe de 1926.", false, "Falso: 1926 iniciou uma ditadura."],
  ["A Revolução dos Cravos ocorreu em 25 de abril de 1974.", true, "Verdade."],
  ["As primeiras eleições para a Assembleia Constituinte realizaram-se em 1976.", false, "Falso: foram a 25 de abril de 1975."],
  ["A Constituição de 1976 foi importante para a consolidação da democracia.", true, "Verdade."],
  ["O 25 de Abril concluiu num só dia todo o processo democrático.", false, "Falso: foi o início de uma transição."],
  ["A Guerra Colonial foi um dos fatores do desgaste do Estado Novo.", true, "Verdade, mas não a única causa."]
];
let mi = 0, mp = 0;
function jogoMito() {
  if (mi >= mitos.length) { jogo.innerHTML = `<h3 class="frase">${mp} / ${mitos.length}</h3><button class="acao" id="rm">Jogar outra vez</button>`; document.getElementById("rm").onclick = () => { mi = 0; mp = 0; jogoMito(); }; return; }
  const [t, v, ex] = mitos[mi];
  jogo.innerHTML = `<p class="cap">${mi + 1} de ${mitos.length} · Pontos: ${mp}</p><h3 class="frase">${t}</h3><div class="opcoes"><button type="button" data-v="1">Verdade</button><button type="button" data-v="0">Falso</button></div><p id="fb" aria-live="polite"></p>`;
  jogo.querySelectorAll(".opcoes button").forEach((b) => b.onclick = () => {
    const ok = (b.dataset.v === "1") === v;
    if (ok) mp++;
    b.classList.add(ok ? "certo" : "erro");
    jogo.querySelectorAll(".opcoes button").forEach((x) => (x.disabled = true));
    document.getElementById("fb").innerHTML = `${ok ? "Certo!" : "Errado."} ${ex} <button class="acao" id="px">Seguinte</button>`;
    document.getElementById("px").onclick = () => { mi++; jogoMito(); };
  });
}

// ---- Jogos extra ----
function embaralha(a) { return a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]); }
function fimJogo(titulo, pts, tot, reinicia) {
  jogo.innerHTML = `<h3 class="frase">${titulo}: ${pts} / ${tot}</h3><button class="acao" id="rj">Jogar outra vez</button>`;
  document.getElementById("rj").onclick = reinicia;
}
// Pares
const pares = [["1926", "Golpe militar"], ["1933", "Institucionalização do Estado Novo"], ["1961", "Guerra em Angola"], ["1968", "Marcelo Caetano substitui Salazar"], ["1974", "Revolução dos Cravos"], ["1976", "Constituição em vigor"]];
function jogoPares() {
  let ds = null, feitos = 0, erros = 0;
  const evs = embaralha(pares.map((p) => p[1]));
  jogo.innerHTML = `<p>Escolhe uma data e depois o acontecimento correspondente.</p><div class="cartoes">${pares.map((p) => `<button type="button" data-d="${p[0]}">${p[0]}</button>`).join("")}</div><div class="cartoes">${evs.map((e) => `<button type="button" data-e="${e}">${e}</button>`).join("")}</div><p id="fb" aria-live="polite">Erros: 0</p>`;
  jogo.onclick = (e) => {
    const b = e.target.closest("button"); if (!b || b.disabled || !b.dataset) return;
    if (b.dataset.d) { jogo.querySelectorAll("[data-d]").forEach((x) => (x.style.borderColor = "")); ds = b; b.style.borderColor = "var(--vermc)"; return; }
    if (b.dataset.e && ds) {
      const ok = pares.find((p) => p[0] === ds.dataset.d)[1] === b.dataset.e;
      if (ok) { ds.disabled = b.disabled = true; ds.style.borderColor = b.style.borderColor = "var(--verde)"; feitos++; } else { erros++; b.style.borderColor = "var(--verm)"; setTimeout(() => (b.style.borderColor = ""), 500); }
      ds = null; document.getElementById("fb").textContent = feitos === pares.length ? `Completo! Erros: ${erros}.` : `Erros: ${erros}`;
    }
  };
}
// Quem sou eu?
const quem = [
  ["Fui a polícia política do Estado Novo. Vigiava, perseguia e interrogava opositores.", ["PIDE", "MFA", "Mocidade Portuguesa"], 0],
  ["Sou o movimento de militares que organizou o golpe de 25 de abril de 1974.", ["PIDE", "MFA", "União Nacional"], 1],
  ["Liderei o Governo do Estado Novo até 1968.", ["Marcelo Caetano", "António de Oliveira Salazar", "José Afonso"], 1],
  ["Sou a canção de José Afonso que foi uma das senhas radiofónicas da revolução.", ["Grândola, Vila Morena", "A Portuguesa", "Hino à Alegria"], 0],
  ["Fui aprovada a 2 de abril de 1976 e entrei em vigor a 25 de abril de 1976.", ["Constituição de 1933", "Constituição de 1976", "Lei da Imprensa"], 1]
];
function jogoQuem() {
  let i = 0, p = 0;
  const passo = () => {
    if (i >= quem.length) return fimJogo("Quem sou eu?", p, quem.length, jogoQuem);
    const [pista, o, k] = quem[i];
    jogo.innerHTML = `<p class="cap">${i + 1} de ${quem.length}</p><h3 class="frase">${pista}</h3><div class="opcoes">${o.map((x, j) => `<button type="button" data-j="${j}">${x}</button>`).join("")}</div><p id="fb" aria-live="polite"></p>`;
    jogo.querySelectorAll(".opcoes button").forEach((b) => b.onclick = () => {
      const ok = +b.dataset.j === k; if (ok) p++;
      jogo.querySelectorAll(".opcoes button").forEach((x) => (x.disabled = true));
      b.classList.add(ok ? "certo" : "erro");
      document.getElementById("fb").innerHTML = `${ok ? "Certo!" : "Era: " + o[k] + "."} <button class="acao" id="px">Seguinte</button>`;
      document.getElementById("px").onclick = () => { i++; passo(); };
    });
  };
  passo();
}
// Antes ou depois do 25 de Abril?
const antes = [["Censura prévia", 0], ["Eleições livres", 1], ["PIDE", 0], ["Liberdade de reunião e associação", 1], ["Libertação de presos políticos", 1], ["Imprensa controlada pelo Governo", 0], ["Pluralismo político", 1], ["Oposição reprimida", 0]];
function jogoAntes() {
  const l = embaralha(antes); let i = 0, p = 0;
  const passo = () => {
    if (i >= l.length) return fimJogo("Antes ou depois", p, l.length, jogoAntes);
    jogo.innerHTML = `<p class="cap">${i + 1} de ${l.length}</p><h3 class="frase">${l[i][0]}</h3><div class="opcoes"><button type="button" data-v="0">Estado Novo</button><button type="button" data-v="1">Democracia</button></div><p id="fb" aria-live="polite"></p>`;
    jogo.querySelectorAll(".opcoes button").forEach((b) => b.onclick = () => {
      const ok = +b.dataset.v === l[i][1]; if (ok) p++;
      b.classList.add(ok ? "certo" : "erro");
      jogo.querySelectorAll(".opcoes button").forEach((x) => (x.disabled = true));
      setTimeout(() => { i++; passo(); }, 800);
    });
  };
  passo();
}
// Completa a frase
const lacunas = [
  ["O Estado Novo foi institucionalizado em ___.", ["1926", "1933", "1974"], 1],
  ["A Revolução dos Cravos foi organizada pelo ___.", ["MFA", "PIDE", "Parlamento"], 0],
  ["A guerra começou em ___ no ano de 1961.", ["Moçambique", "Guiné", "Angola"], 2],
  ["As eleições para a Assembleia Constituinte foram a 25 de abril de ___.", ["1975", "1974", "1976"], 0],
  ["A Constituição foi aprovada a 2 de abril e entrou em vigor a 25 de ___ de 1976.", ["abril", "novembro", "maio"], 0]
];
function jogoLacunas() {
  let i = 0, p = 0;
  const passo = () => {
    if (i >= lacunas.length) return fimJogo("Completa a frase", p, lacunas.length, jogoLacunas);
    const [f, o, k] = lacunas[i];
    jogo.innerHTML = `<p class="cap">${i + 1} de ${lacunas.length}</p><h3 class="frase">${f}</h3><div class="opcoes">${o.map((x, j) => `<button type="button" data-j="${j}">${x}</button>`).join("")}</div><p id="fb" aria-live="polite"></p>`;
    jogo.querySelectorAll(".opcoes button").forEach((b) => b.onclick = () => {
      const ok = +b.dataset.j === k; if (ok) p++;
      b.classList.add(ok ? "certo" : "erro");
      jogo.querySelectorAll(".opcoes button").forEach((x) => (x.disabled = true));
      document.getElementById("fb").innerHTML = `${ok ? "Certo!" : "Resposta: " + o[k] + "."} <button class="acao" id="px">Seguinte</button>`;
      document.getElementById("px").onclick = () => { i++; passo(); };
    });
  };
  passo();
}
const jogos = { quiz: jogoQuiz, ordem: jogoOrdem, mito: jogoMito, pares: jogoPares, quem: jogoQuem, antes: jogoAntes, lacunas: jogoLacunas };
document.querySelectorAll(".jogos-tab button").forEach((b) => b.onclick = () => {
  clearInterval(tempo); jogo.onclick = null;
  document.querySelectorAll(".jogos-tab button").forEach((x) => x.setAttribute("aria-selected", "false"));
  b.setAttribute("aria-selected", "true");
  jogos[b.dataset.j]();
});
jogoQuiz();
marcar(0);
els[0].classList.add("on");
