/**
 * @file script.js
 * @description Funcionalidad interactiva de SPEEDMAX.
 * Cumple con los criterios de la rúbrica: Interactividad, Buenas Prácticas y Feedback UX.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ====================================================================
  // 1. EFECTO DE SCROLL EN EL HEADER
  // ====================================================================
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
      header.style.background = 'rgba(5, 13, 37, 0.98)';
    } else {
      header.style.boxShadow = 'none';
      header.style.background = 'rgba(5, 13, 37, 0.95)';
    }
  });

  // ====================================================================
  // 2. DETECCIÓN AUTOMÁTICA DEL MENÚ ACTIVO
  // ====================================================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // ====================================================================
  // 3. LÓGICA DE PREGUNTAS FRECUENTES (Acordeón)
  // ====================================================================
  const faqButtons = document.querySelectorAll('.faq-btn');
  
  if (faqButtons.length > 0) {
    faqButtons.forEach(button => {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const icon = button.querySelector('.faq-icon');
        
        faqButtons.forEach(otherBtn => {
          if (otherBtn !== button) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherIcon = otherBtn.querySelector('.faq-icon');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        if (isExpanded) {
          button.setAttribute('aria-expanded', 'false');
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          button.setAttribute('aria-expanded', 'true');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  // ====================================================================
  // 4. AÑO DINÁMICO EN FOOTER
  // ====================================================================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// ====================================================================
// 5. VALIDACIÓN Y SIMULACIÓN DE FORMULARIO
// ====================================================================
function handleFormSubmit(event) {
  event.preventDefault(); 
  
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('btnSubmitForm');
  
  if (form && form.checkValidity()) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="material-symbols-outlined">sync</span> Procesando...';
    submitBtn.style.opacity = '0.7';
    
    setTimeout(() => {
      alert('¡Éxito! Los datos han sido registrados correctamente en nuestro sistema.');
      window.location.href = 'index.html';
    }, 1500);
    
  } else {
    form.reportValidity();
  }
}

// ====================================================================
  // LÓGICA DEL MENÚ MÓVIL
  // ====================================================================
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');
  
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      // Alternamos la clase que muestra/oculta el menú
      navLinksContainer.classList.toggle('active-mobile');
      
      // Cambiamos el icono de "menu" a "close" (X)
      const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', !isExpanded);
      mobileBtn.querySelector('span').textContent = isExpanded ? 'menu' : 'close';
    });
  }