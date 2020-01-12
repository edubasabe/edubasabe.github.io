document.addEventListener('DOMContentLoaded', () => {
  const messages = {
    en: {
      summarySection: {
        title: 'Career Summary',
        sumary: 'Front End Web Developer with experience in application development and websites, working with agile methodologies, applying extensive knowledge in HTML, CSS and JavaScript. Frameworks such as Bootstrap, jQuery, Vue. Notions of UI and UX design. Using design and prototype tools such as Sketch, Figma, Photoshop, Invision. With the ability to implement solutions thinking about the maintainability and extensibility of the code, team work, ethical and professional.',
      },
      workExperience: {
        title: 'Work Experience',
        jobs: [
          {
            position: 'Front End Web Developer',
            company: 'SKY Airline S.A.',
            time: 'August 2019 - Present',
            description: 'Implementations on the current website, collaborating and participating in the Digital Channels team supporting as a developer in new projects, ensuring compliance with the best practices of the website in the SPA (Single Page Applications) and performance of the site load.',
            technologies: ['HTML/SASS', 'Javascript ES6', 'Vue', 'Webpack', 'Node.js', 'Express'],
            achievements: []
          },
          {
            position: 'Front End Web Developer',
            company: 'Modyo S.A.',
            time: 'November 2017 - August 2019',
            description: 'Development and Maintenance of sites, applications, and web content on the ModyoDX platform. User interface design and user experience improvements. Website optimization, usability and cross-browser compatibility.',
            technologies: ['HTML/SASS', 'Javascript ES5', 'Vue', 'jQuery', 'Bootstrap'],
            achievements: []
          }
        ]
      }
    },
    es: {
      summarySection: {
        title: 'Resumen Profesional',
        sumary: 'Front End Web Developer con experiencia en desarrollo de aplicaciones y sitios web, trabajando con metodologías ágiles, aplicando amplios conocimientos en HTML, CSS y JavaScript. Frameworks como Bootstrap, jQuery, Vue, Angular. Nociones de diseño UI y UX. Usando herramientas diseño y prototipo como Sketch, Figma, Photoshop, Invision. Con capacidad de Implementar soluciones pensando en la mantenibilidad y extensibilidad del código, trabajo en equipo, ético y profesional.',
      },
      workExperience: {
        title: 'Experiencia Laboral',
        jobs: [
          {
            position: 'Front End Web Developer',
            company: 'SKY Airline S.A.',
            time: 'August 2019 - Present',
            description: 'Implementations on the current website, collaborating and participating in the Digital Channels team supporting as a developer in new projects, ensuring compliance with the best practices of the website in the SPA (Single Page Applications) and performance of the site load.',
            technologies: ['HTML/SASS', 'Javascript ES6', 'Vue', 'Webpack', 'Node.js', 'Express', 'Git', 'CI/CD'],
            achievements: []
          },
          {
            position: 'Front End Web Developer',
            company: 'Modyo S.A.',
            time: 'November 2017 - August 2019',
            description: 'Development and Maintenance of sites, applications, and web content on the ModyoDX platform. User interface design and user experience improvements. Website optimization, usability and cross-browser compatibility.',
            technologies: ['HTML/SASS', 'Javascript ES5', 'Vue', 'jQuery', 'Bootstrap', 'Git'],
            achievements: []
          }
        ]
      }
    }
  }
  const i18n = new VueI18n({
    locale: 'es', // set locale
    messages, // set locale messages
  });

  const resumeApp = new Vue({
    name: 'ResumeApp',
    el: '#app',
    data: {
      // jobs: [
      //   {
      //     position: 'Front End Web Developer',
      //     company: 'SKY Airline S.A.',
      //     time: 'August 2019 - Present',
      //     description: 'Implementations on the current website, collaborating and participating in the Digital Channels team supporting as a developer in new projects, ensuring compliance with the best practices of the website in the SPA (Single Page Applications) and performance of the site load.',
      //     technologies: ['HTML/SASS', 'Javascript ES6', 'Vue', 'Webpack', 'Node.js', 'Express']
      //   },
      //   {
      //     position: 'Front End Web Developer',
      //     company: 'Modyo S.A.',
      //     time: 'November 2017 - August 2019',
      //     description: 'Development and Maintenance of sites, applications, and web content on the ModyoDX platform. User interface design and user experience improvements. Website optimization, usability and cross-browser compatibility.',
      //     technologies: ['HTML/SASS', 'Javascript ES5', 'Vue', 'jQuery', 'Bootstrap']
      //   }
      // ]
    },
    computed: {
      currentLanguague() {
        return this.$i18n.locale;
      },
      jobsList() {
        return this.$i18n.messages[this.currentLanguague].workExperience.jobs;
      }
    },
    i18n,
  });
});