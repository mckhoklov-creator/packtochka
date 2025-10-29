(function(){
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  if(!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
  };

  if(window.innerWidth > 900){
    nav.removeAttribute('aria-hidden');
  } else {
    nav.setAttribute('aria-hidden', 'true');
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' && nav.classList.contains('is-open')){
      closeNav();
    }
  });

  nav.addEventListener('click', (event) => {
    if(event.target.tagName === 'A') {
      closeNav();
    }
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 900) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      nav.removeAttribute('aria-hidden');
    }
    else if(!nav.classList.contains('is-open')){
      nav.setAttribute('aria-hidden', 'true');
    }
  });
})();
