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
      '#0a429e', 
      '#0174ff', 
      '#0174ff'
    ];
    return `linear-gradient(90deg, 
      rgba(0,0,0,0) 0%, 
      ${colors[Math.floor(Math.random() * colors.length)]} 50%, 
      rgba(0,0,0,0) 100%)`;
  }
}
