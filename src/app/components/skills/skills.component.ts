import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsData {
  title: string;
  categories: SkillCategory[];
}

@Component({
    selector: 'app-skills',
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsData = signal<SkillsData>({
    title: 'Habilidades Técnicas',
    categories: [
      {
        name: 'Lenguajes de Programación',
        skills: [
          { name: 'TypeScript', level: 90 },
          { name: 'JavaScript', level: 85 },
          { name: 'PHP', level: 75 },
          { name: 'Python', level: 60 }
        ]
      },
      {
        name: 'Frameworks y Librerías',
        skills: [
          { name: 'Angular', level: 90 },
          { name: 'Laravel', level: 80 },
          { name: 'Ionic', level: 75 },
          { name: 'Nest js', level: 80 }
        ]
      },
      {
        name: 'Herramientas y Tecnologías',
        skills: [
          { name: 'Git', level: 85 },
          { name: 'Docker', level: 40 },
          { name: 'MySQL', level: 80 },
          { name: 'Firebase', level: 65 }
        ]
      }
    ]
  });
}
