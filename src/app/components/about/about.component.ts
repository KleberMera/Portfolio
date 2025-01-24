import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export default class AboutComponent {
    interests: string[] = [
        'Desarrollo Web',
        'Tecnologías Móviles', 
        'Inteligencia Artificial',
        'Arquitectura de Software',
        'Servidores',
        'Ciberseguridad'
      ];
}
