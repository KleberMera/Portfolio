import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    imports: [],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export default class HeroComponent {
  technologies = [
    'Angular', 
    'Ionic', 
    'Nest.js', 
    'Laravel', 
    'TypeScript', 
    'Node.js', 
    'PostgreSQL', 
    'Docker'
  ];
}
