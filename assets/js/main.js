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
        ],
        technologiesUsed: 'Technologies used:',
      },
      education: {
        title: 'Education',
        schools: [
          {
            name: 'Dr. Rafael Belloso Chacin University',
            degree: 'Bachelor\'s Degree in Graphic Design',
            time: '2014'
          }
        ]
      },
      others: {
        title: 'Others',
        list: [
          'Git',
          'e2e tests',
          'Wireframing',
          'Sketch',
          'Figma',
          'WordPress',
          'Shopify',
          'CI/CD'
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
            time: 'Agosto 2019 - Actual',
            description: 'Implementaciones en el sitio web actual, colaborando y participando en el equipo de Canales Digitales apoyando como desarrollador en nuevos proyectos, velando por el cumplimento de las mejores prácticas de la web en las SPA (Single Page Applications) y performance de la carga del sitio.',
            technologies: ['HTML/SASS', 'Javascript ES6', 'Vue', 'Webpack', 'Node.js', 'Express', 'Git', 'CI/CD'],
            achievements: []
          },
          {
            position: 'Front End Web Developer',
            company: 'Modyo S.A.',
            time: 'November 2017 - August 2019',
            description: 'Desarrollo y Mantenimiento de sitios, aplicaciones, y contenidos web sobre la plataforma ModyoDX. Diseño de interfaces de usuarios y mejoras de experiencias de usuario. Optimización de sitios web, usabilidad y compatibilidad entre navegadores.',
            technologies: ['HTML/SASS', 'Javascript ES5', 'Vue', 'jQuery', 'Bootstrap', 'Git'],
            achievements: []
          }
        ],
        technologiesUsed: 'Tecnologías aplicadas:',
      },
      education: {
        title: 'Educación',
        schools: [
          {
            name: 'Universidad Dr. Rafael Belloso Chacín',
            degree: 'Licenciado en Diseño Gráfico',
            time: '2014'
          }
        ]
      },
      others: {
        title: 'Otras',
        list: [
          'Git',
          'Testing e2e',
          'Wireframing',
          'Sketch',
          'Figma',
          'WordPress',
          'Shopify',
          'CI/CD'
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
    computed: {
      currentLanguague() {
        return this.$i18n.locale;
      },
      jobsList() {
        return this.$i18n.messages[this.currentLanguague].workExperience.jobs;
      },
      skillsList() {
        return this.$i18n.messages[this.currentLanguague].others.list;
      }
    },
    i18n,
  });
});