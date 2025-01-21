import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

import AboutComponent from '../components/about/about.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { EducationComponent } from '../components/education/education.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import HeroComponent from '../components/hero/hero.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
    selector: 'app-home',
    imports: [
        NavbarComponent,
        RouterOutlet,
        HeroComponent,
        AboutComponent,
        SkillsComponent,
        FooterComponent,
        ProjectsComponent,
        EducationComponent,
        ContactComponent
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export default class LayoutComponent {}
