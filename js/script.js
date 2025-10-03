
// Smooth scroll para navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if(section){
      section.scrollIntoView({behavior:'smooth'});
    }

    <button onclick="window.location.href='pages/projeto.html'">Projeto</button>


  });
});
