import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Skill {
  name: string;
  level: number;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', level: 90 },
    { name: 'Laravel', level: 85 },
    { name: 'TypeScript', level: 95 },
    { name: 'Java', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'HTML', level: 60 },
  ];
}
