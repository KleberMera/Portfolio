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
    { label: 'Proyectos', link: 'projects' },
    { label: 'Sobre Mí', link: 'about' },
    { label: 'Contacto', link: 'contact' }
  ]);

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
}
