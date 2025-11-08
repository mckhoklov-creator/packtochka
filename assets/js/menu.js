(function(){
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const catalogToggle = document.getElementById('catalog-toggle');
  const catalogPanel = document.getElementById('catalog-panel');
  const catalogClose = document.getElementById('catalog-close');
  if(!toggle || !nav) return;

  const closeCatalog = () => {
    if(!catalogPanel || !catalogToggle) return;
    catalogPanel.classList.remove('is-open');
    catalogPanel.setAttribute('aria-hidden', 'true');
    catalogToggle.setAttribute('aria-expanded', 'false');
  };

  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    closeCatalog();
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
    if(event.key === 'Escape'){
      if(nav.classList.contains('is-open')){
        closeNav();
      }
      if(catalogPanel && catalogPanel.classList.contains('is-open')){
        closeCatalog();
      }
    }
  });

  nav.addEventListener('click', (event) => {
    if(event.target.tagName === 'A') {
      closeNav();
    }
  });

  if(catalogToggle && catalogPanel){
    catalogPanel.setAttribute('aria-hidden', 'true');

    const toggleCatalog = () => {
      const isOpen = catalogPanel.classList.toggle('is-open');
      catalogPanel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      catalogToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if(isOpen){
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        if(window.innerWidth > 900){
          nav.removeAttribute('aria-hidden');
        } else {
          nav.setAttribute('aria-hidden', 'true');
        }
      }
    };

    catalogToggle.addEventListener('click', (event) => {
      event.preventDefault();
      toggleCatalog();
    });

    if(catalogClose){
      catalogClose.addEventListener('click', () => closeCatalog());
    }

    document.addEventListener('click', (event) => {
      if(!catalogPanel.classList.contains('is-open')) return;
      const target = event.target;
      if(catalogPanel.contains(target) || catalogToggle.contains(target)) return;
      closeCatalog();
    });
  }

  window.addEventListener('resize', () => {
    if(window.innerWidth > 900) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      nav.removeAttribute('aria-hidden');
      closeCatalog();
    }
    else if(!nav.classList.contains('is-open')){
      nav.setAttribute('aria-hidden', 'true');
    }
  });
})();
