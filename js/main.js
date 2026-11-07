// Menu para telemóveis
const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
if(btn){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)})}

// Quiz "Mito ou Verdade"
const quiz=document.getElementById('quiz');
if(quiz){
  let pontos=0,respondidas=0;
  const total=quiz.querySelectorAll('.quiz-q').length;
  quiz.querySelectorAll('.quiz-q').forEach(q=>{
    const certa=q.dataset.resp;
    q.querySelectorAll('button').forEach(b=>{
      b.addEventListener('click',()=>{
        if(q.dataset.feito)return;
        q.dataset.feito=1;respondidas++;
        const fb=q.querySelector('.fb');
        const acertou=b.dataset.v===certa;
        if(acertou)pontos++;
        fb.classList.add('show');
        fb.insertAdjacentHTML('afterbegin',acertou?'<span class="ok">Certo! </span>':'<span class="no">Não é bem assim. </span>');
        document.getElementById('score').textContent=`Pontuação: ${pontos} de ${total}`+(respondidas===total?' — fim do quiz!':'');
      });
    });
  });
}
