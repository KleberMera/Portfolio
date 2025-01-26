import {
  Component,
  EventEmitter,
  Output,
  signal,
  Signal,
  input,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit, OnDestroy {
  readonly menuItems = input<{ label: string; link: string }[]>([]);
  @Output() close = new EventEmitter<void>();

  currentActiveSection = signal('hero');
  private observers: IntersectionObserver[] = [];

  ngOnInit() {
    this.setupIntersectionObservers();
  }

  ngOnDestroy() {
    this.observers.forEach(observer => observer.disconnect());
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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.close.emit(); // Cerrar sidebar después de hacer scroll
    }
  }

  isActiveSection(sectionLink: string): boolean {
    return this.currentActiveSection() === sectionLink;
  }
}
