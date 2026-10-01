const criteria=[
 {name:'Compreensão da situação',a:'Localiza dados com leitura ou apoio visual.',c:'Identifica dados e pergunta; distingue juntar, retirar, grupos iguais e repartição.',e:'Explica relações, estima e identifica informações ausentes ou desnecessárias.'},
 {name:'Estratégia matemática',a:'Representa com objetos, desenhos ou contagem.',c:'Escolhe estratégia coerente e relaciona agrupamentos, fileiras ou partilhas.',e:'Compara estratégias, justifica a escolha e transfere para situação nova.'},
 {name:'Cálculo e registro',a:'Registra parte do raciocínio com apoio.',c:'Calcula e registra procedimento compreensível; revê erro pontual.',e:'Confere por estimativa ou operação inversa e explica a razoabilidade.'},
 {name:'Frações e partes iguais',a:'Forma grupos iguais; indica metade ou terça parte com material.',c:'Relaciona uma parte ao todo e à divisão exata.',e:'Mantém a unidade e justifica frações equivalentes ou comparação.'},
 {name:'Explicação e revisão',a:'Mostra o que fez após pergunta mediadora.',c:'Explica e corrige um passo com mediação.',e:'Argumenta, avalia uma solução e cria outra representação.'}
];
const activities=[
 ['1 · Cadernos','128 + 147 = 275','Contagem a partir de 128, decomposição ou algoritmo com troca.','Subtrair pode indicar leitura de comparação; 265 pode mostrar troca não registrada.','Que mudança ocorreu na quantidade? Mostre 8 + 7 e explique a troca.'],
 ['2 · Tampinhas','235 + 186 = 421','Decompõe parcelas e recompõe 11 unidades e 12 dezenas.','3111 ou 321 pede investigação do valor posicional e das trocas.','O que representam 12 dezenas? Como as unidades se transformam?'],
 ['3 · Livros','420 − 175 = 245','Retira em etapas ou encontra complemento de 175 até 420.','Somar 420 + 175 pode confundir total inicial e restante.','Os livros distribuídos ainda estão na biblioteca? Como conferir por adição?'],
 ['4 · Folhas','350 − 128 = 222','Decompõe 350 e troca uma dezena por dez unidades.','238 pode surgir ao subtrair o menor algarismo do maior na coluna.','Como retirar oito unidades quando há zero unidades no registro inicial?'],
 ['5 · Kits','8 × 6 = 48','Desenha oito grupos de seis, soma parcelas iguais ou multiplica.','14 indica possível soma dos dois dados sem formar grupos.','Onde estão os oito grupos? Quantos kits em cada um?'],
 ['6 · Mesas','7 × 9 = 63','Usa arranjo de sete fileiras de nove ou 7 × (10 − 1).','16 sugere que a relação “em cada fileira” não foi representada.','O que significam 7 e 9 na sua grade?'],
 ['7 · Cartões','96 ÷ 8 = 12 por estudante','Reparte em oito grupos; 80 ÷ 8 e 16 ÷ 8; confere 8 × 12.','Responder 8 pode repetir o número de estudantes.','Oito é a quantidade de quê? Quanto recebe cada estudante?'],
 ['8 · Grupos','72 ÷ 9 = 8 grupos','Forma grupos de nove, conta saltos ou usa 9 × 8.','Responder 9 pode repetir o tamanho de cada grupo.','Já sabemos o tamanho do grupo. O que falta descobrir?']
];
const games=[
 {title:'1 · Fatia do Saber',img:'jogo1.png',alt:'Tela do jogo Fatia do Saber com pizza dividida em quatro partes e uma pintada',steps:['Identifique o inteiro e conte as quatro partes iguais antes do clique.','Peça que a criança aponte uma parte pintada e justifique 1/4.','Depois da escolha, solicite outra representação de 1/4.'],observe:'Se escolhe 4/4, investigue se confundiu total de partes com partes pintadas.'},
 {title:'2 · Encontre a Figura',img:'jogo2.png',alt:'Tela de escolha da figura que representa um meio',steps:['Leia 1/2 como uma de duas partes iguais.','Compare as três figuras sem usar primeiro as legendas; depois escolha.','Desenhe 1/2 em outra forma e justifique.'],observe:'1 de 3 pode indicar atenção só ao numerador; 2 de 2, só ao denominador.'},
 {title:'3 · Dominó das Frações',img:'jogo3.png',alt:'Tela do dominó com a fração um meio e opções gráficas',steps:['Leia a peça 1/2 e identifique o inteiro.','Compare 1/3, 2/2 e 2/4; explique a equivalência antes de encaixar.','Use tiras iguais e crie outra fração equivalente.'],observe:'A escolha de 2/2 pode indicar foco no número 2 sem comparar a região.'},
 {title:'4 · Frações no Cotidiano',img:'jogo4.png',alt:'Tela com a pergunta sobre um quarto de setecentos gramas de farinha',steps:['Localize os 700 g do pacote e represente quatro partes iguais.','Calcule 700 ÷ 4 = 175 g antes de marcar a alternativa.','Confira quatro porções de 175 g e preserve a unidade de medida.'],observe:'Um clique correto sem registro pode ser tentativa. É ampliação, sem exigência automática ao fim do 5º ano.'}
];
const $=id=>document.getElementById(id);
const rubric=$('rubricRows');criteria.forEach((x,i)=>{let el=document.createElement('div');el.className='rubric-row';el.innerHTML=`<div><h3>${x.name}</h3><label for="level${i}">Nível observado</label><select id="level${i}" data-save="level${i}"><option value="">Selecione</option><option value="a">Aquisição</option><option value="c">Consolidação</option><option value="e">Expansão</option><option value="no">Não observado</option></select></div><div class="descriptor" id="desc${i}">Escolha um nível para ver o descritor.</div>`;rubric.append(el)});
const descriptions=(i,v)=>v==='a'?criteria[i].a:v==='c'?criteria[i].c:v==='e'?criteria[i].e:v==='no'?'A tarefa não permitiu observar este critério.':'Escolha um nível para ver o descritor.';
criteria.forEach((_,i)=>$('level'+i).addEventListener('change',e=>{$('desc'+i).textContent=descriptions(i,e.target.value);save()}));
const cards=$('activityCards');activities.forEach(x=>{let el=document.createElement('details');el.innerHTML=`<summary>${x[0]} <span class="answer">· ${x[1]}</span></summary><p><strong>Estratégia possível.</strong> ${x[2]}</p><p><strong>Equívoco a investigar.</strong> ${x[3]}</p><p><strong>Pergunta mediadora.</strong> ${x[4]}</p>`;cards.append(el)});
const gameCards=$('gameCards');games.forEach(g=>{let el=document.createElement('article');el.className='game';el.innerHTML=`<img src="${g.img}" alt="${g.alt}" loading="lazy"><div><h3>${g.title}</h3><ol>${g.steps.map(s=>`<li>${s}</li>`).join('')}</ol><p><strong>O que observar:</strong> ${g.observe}</p></div>`;gameCards.append(el)});
const ids=['student','activity','evidence','support','teacherStrength','teacherAdjustment','teacherFollowup','advance','nextStep','observeNext'];function save(){let v={};ids.forEach(id=>v[id]=$(id).value);criteria.forEach((_,i)=>v['level'+i]=$('level'+i).value);localStorage.setItem('rubricaTutor',JSON.stringify(v))}function restore(){try{let v=JSON.parse(localStorage.getItem('rubricaTutor')||'{}');ids.forEach(id=>$(id).value=v[id]||'');criteria.forEach((_,i)=>{let val=v['level'+i]||'';$('level'+i).value=val;$('desc'+i).textContent=descriptions(i,val)})}catch{}}restore();ids.forEach(id=>$(id).addEventListener('input',save));
$('clearRubric').addEventListener('click',()=>{if(!confirm('Limpar o registro deste navegador?'))return;localStorage.removeItem('rubricaTutor');ids.forEach(id=>$(id).value='');criteria.forEach((_,i)=>{$('level'+i).value='';$('desc'+i).textContent=descriptions(i,'')});$('feedbackOutput').textContent='A devolutiva ao estudante aparecerá aqui.';$('teacherOutput').textContent='A devolutiva ao professor aparecerá aqui.'});
$('printPage').addEventListener('click',()=>window.print());
$('buildFeedback').addEventListener('click',()=>{let a=$('advance').value.trim(),n=$('nextStep').value.trim(),o=$('observeNext').value.trim();$('feedbackOutput').textContent=(!a&&!n&&!o)?'Preencha ao menos uma evidência e um próximo passo.':`Você já conseguiu ${a||'[descreva a evidência observada]'}. Agora vamos ${n||'[defina uma ação específica]'}. Na próxima atividade, vou observar se você ${o||'[indique o que será observado]'}.`;save()});
$('copyFeedback').addEventListener('click',async()=>{let t=$('feedbackOutput').textContent;if(t.startsWith('A devolutiva')||t.startsWith('Preencha'))return;try{await navigator.clipboard.writeText(t);$('copyFeedback').textContent='Copiado';setTimeout(()=>$('copyFeedback').textContent='Copiar texto',1800)}catch{$('copyFeedback').textContent='Selecione o texto abaixo'}});
$('buildTeacher').addEventListener('click',()=>{let s=$('teacherStrength').value.trim(),a=$('teacherAdjustment').value.trim(),f=$('teacherFollowup').value.trim();$('teacherOutput').textContent=(!s&&!a&&!f)?'Preencha uma potencialidade e um encaminhamento.':`Sua mediação favoreceu a aprendizagem quando ${s||'[descreva a prática observada]'}. Para qualificar o acompanhamento, recomendamos ${a||'[indique um ajuste específico]'}. Na próxima aplicação, proponha ${f||'[defina a retomada e a evidência esperada]'}. Registre a produção antes e depois do apoio para verificar o avanço.`;save()});
$('copyTeacher').addEventListener('click',async()=>{let t=$('teacherOutput').textContent;if(t.startsWith('A devolutiva')||t.startsWith('Preencha'))return;try{await navigator.clipboard.writeText(t);$('copyTeacher').textContent='Copiado';setTimeout(()=>$('copyTeacher').textContent='Copiar texto',1800)}catch{$('copyTeacher').textContent='Selecione o texto abaixo'}});

// Shared usage counters; rubric fields are never transmitted.
const usagePanel=document.createElement('section');
usagePanel.className='wrap section';
usagePanel.setAttribute('aria-labelledby','usageTitle');
usagePanel.innerHTML='<h2 id="usageTitle">Uso do guia</h2><div class="fields" aria-live="polite"><p><strong id="accessCount">Carregando…</strong><br>Acessos ao guia</p><p><strong id="printCount">Carregando…</strong><br>Aberturas da janela de impressão</p></div><p class="small">Contagem iniciada em 1º de outubro de 2026. Acessos representam carregamentos da página, não pessoas únicas. A impressão é registrada ao abrir a janela, mesmo quando cancelada. Os campos da rubrica não são enviados ao contador.</p>';
document.querySelector('main').append(usagePanel);
const usageCounterBase='https://counterapi.com/api/furukawaluzia-lt1.github.io/';
async function updateUsageCounter(action,elementId,increment=false){
  const element=document.getElementById(elementId);
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),8000);
  try{
    const response=await fetch(usageCounterBase+action+'/tutor-guia'+(increment?'':'?readOnly=true'),{signal:controller.signal,cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer',keepalive:increment});
    if(!response.ok)throw new Error('Counter unavailable');
    const data=await response.json();
    if(!Number.isSafeInteger(data.value)||data.value<0)throw new Error('Invalid counter');
    element.textContent=data.value.toLocaleString('pt-BR');
    element.removeAttribute('title');
  }catch{
    element.textContent='Indisponível';
    element.title='Não foi possível consultar o contador. O guia e a impressão continuam disponíveis.';
  }finally{clearTimeout(timeout)}
}
updateUsageCounter('view','accessCount',true);
updateUsageCounter('print','printCount');
let printCounterPending=false;
window.addEventListener('beforeprint',()=>{
  if(printCounterPending)return;
  printCounterPending=true;
  updateUsageCounter('print','printCount',true);
});
window.addEventListener('afterprint',()=>{printCounterPending=false});
