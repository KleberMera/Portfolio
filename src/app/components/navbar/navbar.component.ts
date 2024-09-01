import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;

  navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'Sobre mí' },
    { id: 'skills', name: 'Habilidades' },
    { id: 'projects', name: 'Proyectos' },
    { id: 'education', name: 'Educación' },
    { id: 'contact', name: 'Contacto' }
  ];


  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleSidebar(): void {
    this.sidebar.nativeElement.classList.toggle('translate-x-full');
  }
}
