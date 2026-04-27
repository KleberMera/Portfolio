import { Component, signal } from '@angular/core';

interface SectionItem {
  icon: string;
  title: string;
  description: string;
  subDescription?: string;
}

interface AboutData {
  title: string;
  description: string;
  sections: SectionItem[];
  interests: string[];
}

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export default class AboutComponent {
    aboutData = signal<AboutData>({
        title: 'Sobre Mí',
        description: 'Soy un Ingeniero en Tecnologías de la Información especializado en desarrollo full stack. Domino tanto el frontend como el backend, manejando tecnologías como Angular, TypeScript, Java, y múltiples sistemas de bases de datos incluyendo PostgreSQL, MySQL, Oracle y SQL Server. Apasionado por crear soluciones tecnológicas completas y robustas.',
        sections: [
            {
                icon: 'fas fa-graduation-cap',
                title: 'Educación',
                description: 'Ingeniería en Tecnologías de la Información y Comunicación',
                subDescription: 'Graduado - Ingeniero en TICs'
            },
            {
                icon: 'fas fa-briefcase',
                title: 'Experiencia',
                description: 'Ingeniero Full Stack',
                subDescription: 'Frontend: Angular, TypeScript | Backend: Java, Node.js | Bases de datos: PostgreSQL, MySQL, Oracle, SQL Server'
            }
        ],
        interests: [
            'Desarrollo Web',
            'Tecnologías Móviles', 
            'Inteligencia Artificial',
            'Arquitectura de Software',
            'Servidores',
            'Ciberseguridad'
        ]
    });
}
