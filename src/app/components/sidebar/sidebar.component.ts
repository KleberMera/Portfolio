import {
  Component,
  EventEmitter,
  Output,
  signal,
  Signal,
  input,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() menuItems!: Signal<{ label: string, link: string }[]>;
  @Output() close = new EventEmitter<void>();
}
