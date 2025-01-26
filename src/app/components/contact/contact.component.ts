import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { toast } from 'ngx-sonner';
import { CommonModule, NgFor } from '@angular/common';

interface ContactInfo {
  icon: string;
  text: string;
  link: string;
  type: 'phone' | 'email' | 'social';
}

interface ServiceOffering {
  title: string;
  description: string;
  technologies: string[];
}

interface ServiceInterest {
  title: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[]
}

interface ContactData {
  title: string;
  subtitle: string;
  subject: string;
  contactInfo: ContactInfo[];
  serviceOfferings: ServiceOffering[];
  contactForm: ContactForm;
  serviceInterests: ServiceInterest;
}

interface ContactForm {
  name: string;

  phone: string;
  email: string;
  message: string;
  service?: string;
  placeholderName?: string;
  placeholderEmail?: string;
  placeholderPhone?: string;
  placeholderMessage?: string;
  submitText?: string;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private readonly _contactService = inject(ContactService);
  
  contactData = signal<ContactData>({
    title: 'Contáctame',
    subtitle: 'Información de Contacto',
    subject: 'Asesorías Disponibles',
    contactInfo: [
      {
        icon: 'fab fa-whatsapp',
        text: '+593 99 901 6890',
        link: 'https://wa.me/+593999016890',
        type: 'phone'
      },
      {
        icon: 'fab fa-facebook',
        text: 'Facebook Personal',
        link: 'https://www.facebook.com/kapm15',
        type: 'social'
      },
      {
        icon: 'fas fa-envelope',
        text: 'klebermera2024@gmail.com',
        link: 'mailto:klebermera2024@gmail.com',
        type: 'email'
      },
      {
        icon: 'fas fa-phone',
        text: '+593 99 901 6890',
        link: 'tel:+593999016890',
        type: 'phone'
      }
    ],
    serviceOfferings: [
      {
        title: 'Desarrollo Frontend',
        description: 'Asesorías personalizadas en desarrollo de aplicaciones con Angular',
        technologies: ['Arquitectura', 'Optimización', 'Mejores Prácticas']
      },
      {
        title: 'Desarrollo Backend y Infraestructura',
        description: 'Asesorías en desarrollo de backends, gestión de servidores y arquitectura de sistemas',
        technologies: ['Configuración de Servidores', 'APIs', 'Infraestructura']
      },
      {
        title: 'Desarrollo de Aplicaciones',
        description: 'Soluciones completas de desarrollo web y móvil',
        technologies: ['Full Stack', 'Microservicios', 'Cloud Deploy']
      }
    ],
    contactForm: {
      name: 'Nombre Completo',
      phone: 'Número de Teléfono',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      placeholderName: 'Nombre Completo',
      placeholderEmail: 'ejemplo@gmail.com',
      placeholderPhone: 'Ej: +593 99 999 9999',
      placeholderMessage: 'Escribe tu mensaje aquí...',
      submitText: 'Enviar Mensaje'
    },
    serviceInterests: {
      title: 'Servicio de Interés',
      placeholder: 'Ej: Diseño de Aplicaciones',
      options: [
        {
          value: 'angular-course',
          label: 'Curso de Angular'
        },
        {
          value: 'angular-consulting',
          label: 'Asesoría Angular'
        },
        {
          value: 'project-support',
          label: 'Soporte de Proyecto'
        }
      ]
    }
  });

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
