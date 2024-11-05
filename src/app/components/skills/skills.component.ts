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
  frameworkSkills = [
    { name: 'Angular', percentage: 95  },
    { name: 'Laravel', percentage: 90 },
    { name: 'Ionic', percentage: 80 },
    { name: 'SQL', percentage: 75 },
    { name: 'Git', percentage: 90 },
  ];

  programmingSkills = [
    { name: 'TypeScript', percentage: 90 },
    { name: 'Java', percentage: 85 },
    { name: 'PHP', percentage: 80 },
    { name: 'Python', percentage: 75 },
    { name: 'C++', percentage: 40 },
  ];
}
