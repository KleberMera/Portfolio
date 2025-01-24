import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { AnimatedBackgroundComponent } from "./components/shared/animated-background/animated-background.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgxSonnerToaster, AnimatedBackgroundComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
