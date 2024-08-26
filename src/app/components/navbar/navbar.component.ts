import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  ngAfterViewInit() {
    lucide.createIcons();

    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const closeMenu = document.getElementById('close-menu');

    menuToggle?.addEventListener('click', () => {
        mobileNav?.classList.add('show');
    });

    closeMenu?.addEventListener('click', () => {
        mobileNav?.classList.remove('show');
    });
}

}
