import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  type: string;
  client: string;
  details: {
    fullDescription: string;
    challenges: string[];
    solutions: string[];
  };
  currentImageIndex?: number;
}
@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  selectedProject = signal<Project | any>(null);
  projects = signal([
    {
      title: 'Aguapen App',
      description: 'Sistema de control de entrada y salida de equipos para el área de Seguridad Industrial de Aguapen EP.',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Laravel Sanctum'],
      type: 'Web App',
      client: 'Aguapen EP',
      images: [
        `https://picsum.photos/800/600?random=${Math.random()}`,
        `https://picsum.photos/800/600?random=${Math.random()}`,
        `https://picsum.photos/800/600?random=${Math.random()}`
      ],
      currentImageIndex: 0,
      details: {
        fullDescription: 'Aplicación web desarrollada para Aguapen EP para gestionar el control de entrada y salida de equipos y vehículos en el área de Seguridad Industrial.',
        challenges: [
          'Implementar un sistema de registro en tiempo real',
          'Garantizar la seguridad de la información',
          'Crear una interfaz intuitiva para los usuarios'
        ],
        solutions: [
          'Uso de Laravel Sanctum para autenticación',
          'Implementación de validaciones de seguridad',
          'Diseño de UI/UX centrado en la experiencia del usuario'
        ]
      }
    },
    {
      title: 'Moniwise (Finzen) App',
      description: 'Aplicación de gestión de finanzas personales, próximamente actualizada con tecnologías modernas.',
      technologies: ['Ionic', 'Fat Free Framework', 'Angular', 'Firebase', 'Nest.js', 'Prisma', 'PostgreSQL'],
      type: 'Mobile App',
      client: 'Proyecto Personal',
      images: [
        `https://picsum.photos/800/600?random=${Math.random()}`,
        `https://picsum.photos/800/600?random=${Math.random()}`
      ],
      currentImageIndex: 0,
      details: {
        fullDescription: 'Aplicación móvil para gestión de finanzas personales con planes de actualización a tecnologías más modernas.',
        challenges: [
          'Crear una experiencia de usuario intuitiva',
          'Manejar datos financieros de manera segura',
          'Implementar sincronización multiplataforma'
        ],
        solutions: [
          'Diseño de interfaz minimalista',
          'Implementación de encriptación de datos',
          'Uso de servicios en la nube para sincronización'
        ]
      }
    },
    {
      title: 'Nuevo Amanecer',
      description: 'Aplicación bancaria desarrollada con tecnologías modernas y desplegada en Render.',
      technologies: ['Angular', 'Firebase', 'Nest.js', 'PostgreSQL'],
      type: 'Fintech App',
      client: 'Proyecto Personal',
      images: [
        `https://picsum.photos/800/600?random=${Math.random()}`,
        `https://picsum.photos/800/600?random=${Math.random()}`,
        `https://picsum.photos/800/600?random=${Math.random()}`
      ],
      currentImageIndex: 0,
      details: {
        fullDescription: 'Aplicación bancaria desarrollada como proyecto personal utilizando tecnologías modernas de desarrollo web.',
        challenges: [
          'Implementar funcionalidades bancarias seguras',
          'Crear una arquitectura escalable',
          'Garantizar rendimiento y seguridad'
        ],
        solutions: [
          'Uso de Nest.js para backend robusto',
          'Implementación de microservicios',
          'Integración de servicios de autenticación seguros'
        ]
      }
    }
  ]);

  changeImage(project: Project, index: number) {
    project.currentImageIndex = index;
  }

  openProjectDetails(project: Project) {
    this.selectedProject.set(project);
  }

  closeProjectDetails() {
    this.selectedProject.set(null);
  }
}
