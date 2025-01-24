import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-background',
  imports: [],
  templateUrl: './animated-background.component.html',
  styleUrl: './animated-background.component.css'
})
export class AnimatedBackgroundComponent {
  rays: any[] = [];

  ngOnInit() {
    this.generateRays();
  }

  generateRays() {
    this.rays = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      style: {
        '--rotate-start': `${Math.random() * 360}deg`,
        '--rotate-end': `${Math.random() * 360}deg`,
        top: `${Math.random() * 100}%`,
        animationDelay: `-${Math.random() * 10}s`,
        width: `${300 + Math.random() * 500}px`,
        background: this.getRandomGradient()
      }
    }));
  }

  getRandomGradient() {
    const colors = [
      'rgba(42,159,86,0.8)', 
      'rgba(81,212,155,0.6)', 
      'rgba(38,144,82,0.7)'
    ];
    return `linear-gradient(90deg, 
      rgba(0,0,0,0) 0%, 
      ${colors[Math.floor(Math.random() * colors.length)]} 50%, 
      rgba(0,0,0,0) 100%)`;
  }
}
