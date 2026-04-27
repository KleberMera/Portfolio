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
        description: 'Ingeniero en Tecnologías de la Información especializado en desarrollo full stack con experiencia empresarial en sistemas financieros y de nómina. Actualmente desarrollo soluciones críticas para el GADM La Libertad, implementando arquitecturas backend modernas con pool de conexiones, autenticación Oracle y migración progresiva desde Oracle Forms. Experto en Angular, TypeScript, Java, y gestión de múltiples bases de datos (PostgreSQL, MySQL, Oracle, SQL Server) con enfoque en sistemas de alta disponibilidad y seguridad.',
        sections: [
            {
                icon: 'fas fa-graduation-cap',
                title: 'Educación',
                description: 'Ingeniería en Tecnologías de la Información y Comunicación',
                subDescription: 'Graduado - Ingeniero en TICs'
            },
            {
                icon: 'fas fa-briefcase',
                title: 'Experiencia Actual',
                description: 'Desarrollador de Software - GADM La Libertad',
                subDescription: 'Especialista en sistemas financieros: roles de pago, asientos contables, migración Oracle Forms → Intranet. Arquitecturas backend enterprise con Oracle, Angular, JWT.'
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
