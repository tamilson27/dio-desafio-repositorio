// rolagem suave para as âncoras
const links = document.querySelectorAll('.scroll-link');
 
for (const link of links) {
  link.addEventListener('click', clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// animação de entrada das seções
const sections = document.querySelectorAll('section');
 
function checkViewport() {
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const viewportHeight = window.innerHeight;
 
    if (sectionTop - viewportHeight < 0 && sectionTop + sectionHeight > 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
}
 
checkViewport();
window.addEventListener('scroll', checkViewport);