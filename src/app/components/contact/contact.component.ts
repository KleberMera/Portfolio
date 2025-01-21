import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from './services/contact.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly _contactService = inject(ContactService);
  email = signal<string>('klebermera2016@gmail.com');

  contactForm = this._contactService.formContact();

  onSubmit() {
    console.log(this.contactForm().value);
    this._contactService.sendMessage(this.contactForm().value).subscribe({
      next: (data) => {
        console.log(data);
        toast.success('Mensaje enviado');
        toast.info('Dentro de poco recibirás respuestas');
      },
      error: (err) => {
        console.log(err);
        toast.error('Error enviando mensaje');
      },
    });
  }
}
