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
        description: 'Soy un desarrollador full stack apasionado por crear soluciones tecnológicas innovadoras. Actualmente, me encuentro cursando el último año de Ingeniería en Tecnologías de la Información y Comunicación, preparándome para dar el salto al mundo profesional con sólidas habilidades técnicas.',
        sections: [
            {
                icon: 'fas fa-graduation-cap',
                title: 'Educación',
                description: 'Ingeniería en Tecnologías de la Información y Comunicación',
                subDescription: 'Último año de carrera - Próximo a graduarme'
            },
            {
                icon: 'fas fa-briefcase',
                title: 'Experiencia',
                description: 'Desarrollador Full Stack',
                subDescription: 'Proyectos web y móviles'
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
