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
        description: 'Ingeniero en Tecnologías de la Información y Desarrollador Full Stack con experiencia en el análisis, diseño, desarrollo e implementación de aplicaciones web y sistemas empresariales. Experiencia en desarrollo backend utilizando Oracle PL/SQL y PHP, y desarrollo frontend con JavaScript, HTML y CSS. Con conocimientos en administración, modelado y optimización de bases de datos Oracle, PostgreSQL y MySQL, así como en la gestión de servidores Linux y Windows para el despliegue y mantenimiento de aplicaciones. Capacidad para desarrollar soluciones orientadas a la automatización de procesos, optimización de consultas SQL, implementación de control de acceso por roles e integración de módulos para sistemas administrativos y financieros.',
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
