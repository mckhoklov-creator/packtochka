(function(){
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const catalogLink = document.getElementById('catalog-link');
  const catalogPanel = document.getElementById('catalog-panel');
  const catalogClose = document.getElementById('catalog-close');
  let hoverTimeout = null;
  if(!toggle || !nav) return;

  const closeCatalog = () => {
    if(!catalogPanel || !catalogLink) return;
    if(hoverTimeout){
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
    catalogPanel.classList.remove('is-open');
    catalogPanel.setAttribute('aria-hidden', 'true');
    catalogLink.setAttribute('aria-expanded', 'false');
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

  if(catalogLink && catalogPanel){
    catalogPanel.setAttribute('aria-hidden', 'true');
    const cancelScheduledClose = () => {
      if(hoverTimeout){
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
    };

    const openCatalog = () => {
      if(catalogPanel.classList.contains('is-open')) return;
      catalogPanel.classList.add('is-open');
      catalogPanel.setAttribute('aria-hidden', 'false');
      catalogLink.setAttribute('aria-expanded', 'true');
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if(window.innerWidth > 900){
        nav.removeAttribute('aria-hidden');
      } else if(!nav.classList.contains('is-open')) {
        nav.setAttribute('aria-hidden', 'true');
      }
    };

    const scheduleClose = () => {
      cancelScheduledClose();
      hoverTimeout = setTimeout(() => {
        closeCatalog();
      }, 200);
    };

    const attachHoverHandlers = (element) => {
      element.addEventListener('mouseenter', () => {
        cancelScheduledClose();
        openCatalog();
      });
      element.addEventListener('mouseleave', () => {
        scheduleClose();
      });
    };

    attachHoverHandlers(catalogLink);
    attachHoverHandlers(catalogPanel);

    catalogLink.addEventListener('focus', () => {
      cancelScheduledClose();
      openCatalog();
    });

    catalogLink.addEventListener('blur', () => {
      scheduleClose();
    });

    catalogPanel.addEventListener('focusin', () => {
      cancelScheduledClose();
      openCatalog();
    });

    catalogPanel.addEventListener('focusout', (event) => {
      if(!catalogPanel.contains(event.relatedTarget)){
        scheduleClose();
      }
    });

    if(catalogClose){
      catalogClose.addEventListener('click', (event) => {
        event.preventDefault();
        cancelScheduledClose();
        closeCatalog();
      });
    }

    document.addEventListener('pointerdown', (event) => {
      if(!catalogPanel.classList.contains('is-open')) return;
      const target = event.target;
      if(catalogPanel.contains(target) || catalogLink.contains(target)) return;
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
