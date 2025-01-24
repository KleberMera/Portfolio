import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { toast } from 'ngx-sonner';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
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
        this.contactForm().reset;
      },
      error: (err) => {
        console.log(err);
        toast.error('Error enviando mensaje');
        this.contactForm().reset;
      },
    });
  }
}
