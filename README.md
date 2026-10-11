# AVANCE PF 02 - SPEEDMAX

## Descripción del Proyecto
Proyecto web multipágina desarrollado para el curso **Taller de Programación Web**. El sitio simula la plataforma comercial de "Speedmax", un proveedor de internet por fibra óptica. El proyecto ha sido diseñado cumpliendo estrictamente con estándares modernos de desarrollo *Front-End*, priorizando la accesibilidad (WAI-ARIA), el diseño responsivo (*Mobile-First*) y la interactividad sin depender de frameworks externos (Zero Dependencies).

## 🏆 Cumplimiento de la Rúbrica
Este proyecto abarca los 6 pilares de evaluación técnica y visual:

1. **Estructura HTML5:** Uso riguroso de etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`). Se implementaron atributos de accesibilidad como `aria-expanded` para el control de estados y etiquetas `alt` descriptivas en todas las imágenes.
2. **Estilos CSS3 (Vanilla):** Diseño 100% responsivo utilizando CSS Grid y Flexbox. Se implementaron variables de entorno (`:root`) para mantener la cohesión de la paleta de colores. Destaca el uso avanzado de **`@keyframes`** para transiciones de página fluidas, garantizando eficiencia de código sin saturar el JavaScript.
3. **Funcionalidad JavaScript:** Scripts modulares, limpios y comentados. Se implementó un acordeón lógico multidireccional para el FAQ, estado de navegación dinámico (detección de URL), efectos de scroll en el header y validación preventiva de formularios (`checkValidity`) con redirección asíncrona simulada.
4. **Experiencia de Usuario (UX):** Interfaz en *Dark Mode* que reduce la fatiga visual. Feedback en tiempo real para el usuario mediante alertas nativas, cambio de estado en botones (*disabled state* durante el envío) e interletraje (*letter-spacing*) optimizado para alta legibilidad.
5. **Creatividad y Diseño Visual:** Estética *tech* coherente, basada en la teoría del color (Cian eléctrico sobre fondos profundos) para transmitir velocidad, estabilidad y confianza tecnológica, logrando un alto impacto visual.
6. **Documentación:** Código limpio, indentado y documentado en todas sus capas. (Ver sección de Guía para Desarrolladores).

## 📁 Estructura de Archivos
* `index.html`: Landing page (Hero section, métricas clave e imagen representativa).
* `novedades.html`: Tablón oficial de comunicados mediante tarjetas (cards).
* `beneficios.html`: Detalles técnicos del servicio con testimonios de usuarios en paneles.
* `faq.html`: Centro de ayuda con menú interactivo (Acordeón JS que permite múltiples aperturas).
* `contacto.html`: Formulario de captura de clientes con validación JS y redirección automática.
* `styles.css`: Hoja de estilos global, variables, tipografía, Grid/Flexbox y animaciones de entrada.
* `script.js`: Lógica de interacción del DOM, validaciones y manipulación de clases.

## 🚀 Instrucciones de Instalación y Uso
1. Descargue o clone este repositorio en su entorno local (`git clone`).
2. Asegúrese de que los 7 archivos se encuentren sueltos en el directorio raíz (sin subcarpetas).
3. Abra el archivo `index.html` en cualquier navegador web moderno.
4. **Nota:** No se requiere instalación de dependencias vía NPM, preprocesadores, ni servidores locales. Es un proyecto *Static Site* puro, listo para despliegue en plataformas como GitHub Pages o Netlify.

## 🛠️ Guía para Desarrolladores (Contribución)
Si deseas modificar o escalar este proyecto, sigue estas directrices:
* **Modificación de Colores:** Los colores globales están definidos al inicio de `styles.css` dentro de `:root`. Si deseas cambiar el color de acento, modifica únicamente las variables `--primary` y `--secondary`.
* **Animaciones de Página:** La transición suave que ocurre al navegar entre páginas está controlada exclusivamente por CSS mediante la animación `slideUpFade` aplicada a la etiqueta `<main>`. No es necesario usar librerías JS pesadas para replicar este efecto en nuevas vistas.
* **Agregado de Páginas:** Si añades un nuevo documento HTML, simplemente clona la etiqueta `<header>` y su `<nav>`. El archivo `script.js` detectará automáticamente la URL actual mediante `window.location.pathname` y le asignará la clase `.active` al menú correspondiente sin necesidad de *hard-coding*.

## Autores
* Proyecto elaborado para evaluación académica - **Taller de Programación Web / Avance Proyecto Final 02**.