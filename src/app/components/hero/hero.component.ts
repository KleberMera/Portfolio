import { Component, signal } from '@angular/core';

interface HeroData {
  subtitle: string;
  hello: string;
  name: string;
  description: string;
  technologies: string[];
  buttons: {
    projects: {
      text: string;
      sectionId: string;
    };
    cv: {
      text: string;
    };
  };
  profileImage: {
    src: string;
    alt: string;
  };
}

@Component({
    selector: 'app-hero',
    imports: [],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export default class HeroComponent {
  currentActiveSection = signal('hero');

  heroData = signal<HeroData>({
    subtitle: 'Estudiante de Ingeniería en TICs',
    hello: 'Hola, soy',
    name: 'Kleber Pillasagua Mera',
    description: 'Desarrollador Full Stack especializado en tecnologías web modernas. Creando soluciones innovadoras con Angular, Ionic, Nest.js y Laravel.',
    technologies: [
      'Angular', 
      'Ionic', 
      'Nest.js', 
      'Laravel', 
      'TypeScript', 
      'Node.js', 
      'PostgreSQL', 
      'Docker'
    ],
    buttons: {
      projects: {
        text: 'Ver Proyectos',
        sectionId: 'projects'
      },
      cv: {
        text: 'Descargar CV'
      }
    },
    profileImage: {
      src: 'assets/img/profile.webp',
      alt: 'Foto de perfil'
    }
  });

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isActiveSection(sectionLink: string): boolean {
    return this.currentActiveSection() === sectionLink;
  }

  downloadCV() {
    const cvUrl = 'assets/CVTIKleberPillasaguaMera.pdf';
    // Solo visualizar en nueva pestaña
    window.open(cvUrl, '_blank', 'noopener');
  }
}
