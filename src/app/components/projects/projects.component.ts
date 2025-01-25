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

interface ProjectsData {
  title: string;
  projects: Project[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  host: {
    '(document:keydown.arrowleft)': 'onKeyLeft($event)',
    '(document:keydown.arrowright)': 'onKeyRight($event)'
  }
})
export class ProjectsComponent {
  selectedProject = signal<Project | any>(null);

  projectsData = signal<ProjectsData>({
    title: 'Proyectos Desarrollados',
    projects: [
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
            'Desarrollo de un sistema con Laravel Sanctum para autenticación',
            'Implementación de validaciones de seguridad en backend',
            'Diseño de interfaz responsive con Angular'
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
        client: 'Empresa',
        images: [
          `https://picsum.photos/800/600?random=${Math.random()}`,
          `https://picsum.photos/800/600?random=${Math.random()}`,
          `https://picsum.photos/800/600?random=${Math.random()}`
        ],
        currentImageIndex: 0,
        details: {
          fullDescription: 'Aplicación bancaria desarrollada utilizando tecnologías modernas de desarrollo web.',
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
    ]
  });
  
  projects = signal([

  ]);

  private startX: number = 0;
  private threshold: number = 100; // Distancia mínima para considerar un deslizamiento

  onTouchStart(event: TouchEvent, project: Project) {
    this.startX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent, project: Project) {
    if (!this.startX) return;

    const currentX = event.touches[0].clientX;
    const diffX = this.startX - currentX;

    if (Math.abs(diffX) > this.threshold) {
      if (diffX > 0) {
        this.nextImage(project);
      } else {
        this.prevImage(project);
      }
      this.startX = 0;
    }
  }

  onTouchEnd(event: TouchEvent) {
    this.startX = 0;
  }

  onKeyLeft(event: KeyboardEvent) {
    if (this.selectedProject()) {
      this.prevImage(this.selectedProject());
    }
  }

  onKeyRight(event: KeyboardEvent) {
    if (this.selectedProject()) {
      this.nextImage(this.selectedProject());
    }
  }

  nextImage(project: Project) {
    if (!project.images || project.images.length <= 1) return;
    
    const currentIndex = project.currentImageIndex ?? 0;
    project.currentImageIndex = (currentIndex + 1) % project.images.length;
  }

  prevImage(project: Project) {
    if (!project.images || project.images.length <= 1) return;
    
    const currentIndex = project.currentImageIndex ?? 0;
    project.currentImageIndex = (currentIndex - 1 + project.images.length) % project.images.length;
  }

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
