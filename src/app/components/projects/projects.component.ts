import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  accessUrl?: string;
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
    '(document:keydown.arrowleft)': 'onKeyLeft()',
    '(document:keydown.arrowright)': 'onKeyRight()'
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
          'assets/img/554shots_so.png'
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
           'assets/img/711shots_so.png',
          'assets/img/291shots_so.png'
        ],
        accessUrl: 'https://fin-zen.vercel.app',
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
          'assets/img/556shots_so.png'
        ],
        accessUrl: 'https://nuevoamanecer.vercel.app',
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
      },
      {
        title: 'Intranet GADM La Libertad',
        description: 'Sistema de intranet institucional para el GAD Municipal de La Libertad con módulos por área, control de acceso y optimización de procesos internos.',
        technologies: ['Angular', 'JavaScript', 'HTML', 'CSS', 'Java', 'Oracle PL/SQL', 'Oracle Database'],
        type: 'Intranet',
        client: 'GADM La Libertad',
        images: [
          'assets/img/82shots_so.png',
          'assets/img/170shots_so.png',
          'assets/img/545shots_so.png',
           'assets/img/451shots_so.png',
            'assets/img/306shots_so.png',
        ],
        accessUrl: 'https://www.lalibertad.gob.ec/intranet/',
        currentImageIndex: 0,
        details: {
          fullDescription: 'Liderazgo en el desarrollo e implementación de la nueva intranet institucional, incluyendo análisis, diseño e implementación de módulos según requerimientos de diferentes áreas del municipio.',
          challenges: [
            'Integrar requerimientos de múltiples áreas en una sola plataforma',
            'Garantizar seguridad, roles y permisos de acceso por perfil',
            'Optimizar consultas y operaciones críticas sobre base de datos Oracle'
          ],
          solutions: [
            'Desarrollo backend con Java y Oracle PL/SQL (procedimientos, funciones, paquetes y triggers)',
            'Diseño, administración y optimización de base de datos Oracle para mejorar rendimiento',
            'Implementación de interfaces frontend responsivas con Angular, JavaScript, HTML y CSS'
          ]
        }
      },
      {
        title: 'Bingo Amigo Deluxe',
        description: 'Aplicación web para registro de participantes y gestión de eventos con ruleta digital para sorteos aleatorios de premios.',
        technologies: ['Angular', 'JavaScript', 'HTML', 'CSS', 'Backend', 'MySQL'],
        type: 'Web App',
        client: 'Pública - Política',
        images: [
          'assets/img/681shots_so.png',
          'assets/img/211shots_so.png',
          'assets/img/319shots_so.png',
        ],
        accessUrl: 'https://deluxe-fronted.vercel.app/sorteos-varios',
        currentImageIndex: 0,
        details: {
          fullDescription: 'Desarrollo integral de una plataforma para eventos que permite registrar participantes, administrar información y ejecutar sorteos en tiempo real mediante ruleta digital.',
          challenges: [
            'Asegurar aleatoriedad y transparencia en los sorteos',
            'Gestionar alta concurrencia durante eventos en vivo',
            'Mantener consistencia de datos de participantes y premios'
          ],
          solutions: [
            'Implementación de lógica de negocio y validaciones de registro',
            'Desarrollo completo de backend, frontend y base de datos',
            'Soporte y mantenimiento operativo durante eventos para garantizar continuidad'
          ]
        }
      },
      {
        title: 'Fútbol 1',
        description: 'Plataforma web para gestión de pronósticos deportivos y competencias entre usuarios con ranking y panel administrativo.',
        technologies: ['Angular', 'JavaScript', 'HTML', 'CSS', 'Backend', 'Oracle', 'MySQL', 'SQL API'],
        type: 'Sports Platform',
        client: 'Pública - Política',
        images: [
          'assets/img/201shots_so.png',
          'assets/img/245shots_so.png'
        ],
        accessUrl: 'https://www.firmescontamariz.com/futbol1',
        currentImageIndex: 0,
        details: {
          fullDescription: 'Plataforma para administrar pronósticos deportivos y competencias, con autenticación, administración de usuarios, partidos y cálculo automático de puntajes y clasificaciones.',
          challenges: [
            'Diseñar reglas de puntuación confiables y auditables',
            'Construir un panel administrativo completo para operación diaria',
            'Optimizar consultas SQL para tablas de partidos, jornadas y resultados'
          ],
          solutions: [
            'Implementación de módulos de autenticación, registro y administración de usuarios',
            'Desarrollo de APIs y consultas SQL optimizadas sobre Oracle/MySQL',
            'Gestión de roles y permisos para asegurar funciones administrativas'
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

  onKeyLeft() {
    if (this.selectedProject()) {
      this.prevImage(this.selectedProject());
    }
  }

  onKeyRight() {
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
