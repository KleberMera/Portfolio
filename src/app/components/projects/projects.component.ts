import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('fadeInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition('void => *', [
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('scaleIn', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.9)'
      })),
      transition('void => *', [
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)'
        }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  hoveredProject: number | null = null;

  projects = [
    {
      title: "Moniwise App",
      description: "Aplicación móvil (Android & iOS) para la gestión de gastos.",
      details: [
        "Desarrollé una aplicación de gestión de gastos multiplataforma.",
        "Frontend: Angular + Ionic",
        "Backend: Firebase"
      ],
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/KleberMera/MoniWiseApp",
      live: "https://moni-wise-app.vercel.app/login"
    },
    {
      title: "Aguapen App",
      description: "Aplicación Web para control de inventario.",
      details: [
        "Creé un sistema para la empresa Aguapen EP.",
        "Frontend: Angular",
        "Backend: Laravel + MySQL"
      ],
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/KleberMera/AguaPen",
      live: "https://aguapen.vercel.app"
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  setHoveredProject(index: number | null): void {
    this.hoveredProject = index;
  }
}
