(function(){
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const catalogLink = document.getElementById('catalog-link');
  const catalogPanel = document.getElementById('catalog-panel');
  const catalogClose = document.getElementById('catalog-close');
  const closeCatalog = () => {
    if(!catalogPanel) return;
    catalogPanel.classList.remove('is-open');
    catalogPanel.setAttribute('aria-hidden', 'true');
    if(catalogLink){
      catalogLink.classList.remove('is-active');
      catalogLink.setAttribute('aria-expanded', 'false');
    }
  };

  const openCatalog = () => {
    if(!catalogPanel) return;
    catalogPanel.classList.add('is-open');
    catalogPanel.setAttribute('aria-hidden', 'false');
    if(catalogLink){
      catalogLink.classList.add('is-active');
      catalogLink.setAttribute('aria-expanded', 'true');
    }
  };

  const closeNav = () => {
    if(!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    closeCatalog();
  };

  if(nav){
    if(window.innerWidth > 900){
      nav.removeAttribute('aria-hidden');
    } else {
      nav.setAttribute('aria-hidden', 'true');
    }
  }

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });
  }

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
      if(nav && nav.classList.contains('is-open')){
        closeNav();
      }
      if(catalogPanel && catalogPanel.classList.contains('is-open')){
        closeCatalog();
      }
    }
  });

  if(nav){
    nav.addEventListener('click', (event) => {
      if(event.target.tagName === 'A') {
        closeNav();
      }
    });
  }

  if(catalogPanel){
    catalogPanel.setAttribute('aria-hidden', 'true');
  }

  if(catalogLink && catalogPanel){
    let hoverTimeout;
    const hoverMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const shouldPreview = () => hoverMedia.matches && window.innerWidth > 900;

    const scheduleClose = () => {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        const active = document.activeElement;
        if(active !== catalogLink && (!catalogPanel.contains(active))){
          closeCatalog();
        }
      }, 120);
    };

    const handlePointerEnter = () => {
      if(!shouldPreview()) return;
      clearTimeout(hoverTimeout);
      openCatalog();
    };

    const handlePointerLeave = () => {
      if(!shouldPreview()) return;
      scheduleClose();
    };

    catalogLink.addEventListener('mouseenter', handlePointerEnter);
    catalogLink.addEventListener('mouseleave', handlePointerLeave);
    catalogPanel.addEventListener('mouseenter', handlePointerEnter);
    catalogPanel.addEventListener('mouseleave', handlePointerLeave);

    catalogLink.addEventListener('focus', () => openCatalog());
    catalogPanel.addEventListener('focusin', () => openCatalog());

    const handleFocusOut = () => {
      setTimeout(() => {
        const active = document.activeElement;
        if(active !== catalogLink && (!catalogPanel.contains(active))){
          closeCatalog();
        }
      }, 10);
    };

    catalogLink.addEventListener('blur', handleFocusOut);
    catalogPanel.addEventListener('focusout', handleFocusOut);

    if(catalogClose){
      catalogClose.addEventListener('click', (event) => {
        event.preventDefault();
        closeCatalog();
        catalogLink.focus();
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
    if(nav){
      if(window.innerWidth > 900) {
        nav.classList.remove('is-open');
        toggle && toggle.setAttribute('aria-expanded', 'false');
        nav.removeAttribute('aria-hidden');
        closeCatalog();
      }
      else if(!nav.classList.contains('is-open')){
        nav.setAttribute('aria-hidden', 'true');
      }
    }
  });
})();
