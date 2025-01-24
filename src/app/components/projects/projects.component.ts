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
  currentImageIndex?: number;
}
@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = signal([
    {
      title: 'Aguapen App',
      description: 'Sistema de control de entrada y salida de equipos para el área de Seguridad Industrial de Aguapen EP.',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Laravel Sanctum'],
      type: 'Web App',
      client: 'Aguapen EP',
      images: [
        'assets/img/554shots_so.webp', 
        '/api/placeholder/800/600?text=Aguapen+App+2', 
        '/api/placeholder/800/600?text=Aguapen+App+3'
      ],
      currentImageIndex: 0
    },
    {
      title: 'Moniwise (Finzen) App',
      description: 'Aplicación de gestión de finanzas personales, próximamente actualizada con tecnologías modernas.',
      technologies: ['Ionic', 'Fat Free Framework', 'Angular', 'Firebase', 'Nest.js', 'Prisma', 'PostgreSQL'],
      type: 'Mobile App',
      client: 'Proyecto Personal',
      images: [
        'assets/img/291shots_so.png', 
        '/api/placeholder/800/600?text=Moniwise+App+2'
      ],
      currentImageIndex: 0
    },
    {
      title: 'Nuevo Amanecer App',
      description: 'Aplicación bancaria desarrollada con tecnologías modernas y desplegada en Render.',
      technologies: ['Angular', 'Firebase', 'Nest.js', 'PostgreSQL'],
      type: 'Fintech App',
      client: 'Nuevo Amanecer',
      images: [
        'assets/img/556shots_so.png', 
        '/api/placeholder/800/600?text=Nuevo+Amanecer+2', 
        '/api/placeholder/800/600?text=Nuevo+Amanecer+3'
      ],
      currentImageIndex: 0
    }
  ]);

  changeImage(project: Project, index: number) {
    project.currentImageIndex = index;
  }
}
