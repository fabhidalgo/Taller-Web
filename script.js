/**
 * @file script.js
 * Funcionalidad interactiva de Speedmax.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. EFECTO DE SCROLL EN EL HEADER
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

  // 2. DETECCIÓN AUTOMÁTICA DEL MENÚ ACTIVO
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    // Limpiamos las clases activas previas
    link.classList.remove('active');
    // Si el href del enlace coincide con la página actual, le damos la clase active
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // 3. LÓGICA DE PREGUNTAS FRECUENTES (Acordeón)
  const faqButtons = document.querySelectorAll('.faq-btn');
  
  if (faqButtons.length > 0) {
    faqButtons.forEach(button => {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const icon = button.querySelector('.faq-icon');
        
        // Cierra los demás cuadros abiertos
        faqButtons.forEach(otherBtn => {
          if (otherBtn !== button) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherIcon = otherBtn.querySelector('.faq-icon');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        // Alterna el estado del cuadro actual
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
});

// 4. LÓGICA DE VALIDACIÓN Y REDIRECCIÓN DEL FORMULARIO DE CONTACTO
function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('btnSubmitForm');
  
  if (form && form.checkValidity()) {
    // Cambiar estado del botón a "Procesando"
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="material-symbols-outlined">sync</span> Procesando...';
    submitBtn.style.opacity = '0.7';
    
    // Simular el tiempo de envío (1.5 segundos)
    setTimeout(() => {
      // Mostrar la alerta de confirmación nativa
      alert('Los datos han sido registrados correctamente.');
      
      // Redirigir a la página principal
      window.location.href = 'index.html';
    }, 1500);
  } else {
    // Activa los globos de advertencia nativos de HTML5
    form.reportValidity();
  }
}