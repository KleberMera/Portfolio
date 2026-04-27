import { Component, signal } from '@angular/core';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceData {
  title: string;
  experiences: ExperienceItem[];
}

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experienceData = signal<ExperienceData>({
    title: 'Experiencia Profesional',
    experiences: [
      {
        title: 'Ingeniero de Software con Especialización en Oracle',
        company: 'Empresa Tecnológica',
        period: '2025 - Presente',
        description: 'Desarrollo y mantenimiento de aplicaciones empresariales utilizando tecnologías Oracle, incluyendo bases de datos Oracle Database y herramientas de desarrollo Oracle APEX. Implementación de soluciones robustas para gestión de datos y procesos de negocio.',
        technologies: ['Oracle Database', 'Oracle APEX', 'PL/SQL', 'Angular', 'TypeScript']
      },
      {
        title: 'Desarrollador Full Stack',
        company: 'Proyectos Independientes',
        period: '2023 - 2024',
        description: 'Desarrollo de aplicaciones web completas utilizando Angular, Nest.js y Laravel. Creación de APIs RESTful y gestión de bases de datos PostgreSQL y MySQL.',
        technologies: ['Angular', 'Nest.js', 'Laravel', 'PostgreSQL', 'Docker']
      }
    ]
  });
}
