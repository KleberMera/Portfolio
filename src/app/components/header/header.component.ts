import { Component, signal } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);
  menuItems = signal([
    { label: 'Inicio', link: 'home' },
    { label: 'Sobre Mí', link: 'about' },
    { label: 'Habilidades', link: 'contact' },
    { label: 'Proyectos', link: 'projects' },
   
   
  ]);

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
}
