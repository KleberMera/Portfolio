import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
interface HeaderData {
  logo: string;
  name: string;
  contact: string;
  menu: MenuItem[];
}
interface MenuItem {
  label: string;
  link: string;
}
@Component({
  selector: 'app-header',
  imports: [SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen = signal(false);
  private observers: IntersectionObserver[] = [];
  currentActiveSection = signal('hero');

  headerData = signal<HeaderData>({
    logo: 'KD',
    name: 'KleberDev',
    contact: 'Contáctame',
    menu:[
      { label: 'Inicio', link: 'hero' },
      { label: 'Sobre Mí', link: 'about' },
      { label: 'Habilidades', link: 'skills' },
      { label: 'Proyectos', link: 'projects' }
    ]
  });

  
  ngOnInit() {
   this.setupIntersectionObservers();
  }

  private setupIntersectionObservers() {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                this.currentActiveSection.set(sectionId);
              }
            });
          },
          { 
            threshold: 0.5 // Cuando al menos el 50% de la sección está visible
          }
        );
        observer.observe(section);
        this.observers.push(observer);
      }
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

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
