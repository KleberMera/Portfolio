import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-hero',
    imports: [],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export default class HeroComponent {
  currentActiveSection = signal('hero');
 

  technologies = signal([
    'Angular', 
    'Ionic', 
    'Nest.js', 
    'Laravel', 
    'TypeScript', 
    'Node.js', 
    'PostgreSQL', 
    'Docker'
  ])


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isActiveSection(sectionLink: string): boolean {
    return this.currentActiveSection() === sectionLink;
  }
}
