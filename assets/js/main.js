document.addEventListener('DOMContentLoaded', () => {
  const messages = {
    en: {
      summarySection: {
        title: 'Career Summary',
        sumary: 'Front End Web Developer with experience in application development and websites, working with agile methodologies, applying extensive knowledge in HTML, CSS and JavaScript. Frameworks such as Bootstrap, jQuery, Vue. Notions of UI and UX design. Using design and prototype tools such as Sketch, Figma, Photoshop, Invision. With the ability to implement solutions thinking about the maintainability and extensibility of the code, team work, ethical and professional.',
      },
      workExperience: {
        title: 'Work Experience',
      }
    },
    es: {
      summarySection: {
        title: 'Resumen Profesional',
        sumary: 'Front End Web Developer con experiencia en desarrollo de aplicaciones y sitios web, trabajando con metodologías ágiles, aplicando amplios conocimientos en HTML, CSS y JavaScript. Frameworks como Bootstrap, jQuery, Vue, Angular. Nociones de diseño UI y UX. Usando herramientas diseño y prototipo como Sketch, Figma, Photoshop, Invision. Con capacidad de Implementar soluciones pensando en la mantenibilidad y extensibilidad del código, trabajo en equipo, ético y profesional.',
      },
      workExperience: {
        title: 'Experiencia Laboral',
      }
    }
  }
  const i18n = new VueI18n({
    locale: 'es', // set locale
    messages, // set locale messages
  });

  const APP = new Vue({
    el: '#app',
    data: {
      lang: 'english',
      english: [
        {
          careerSummary: 'Career Summary'
        }
      ],
      spanish: [
        {
          careerSummary: 'Perfil Profesional'
        }
      ]
    },
    computed: {
      langSelected() {
        return this.lang;
      }
    },
    i18n,
  });
});