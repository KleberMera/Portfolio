import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment.development';

interface Contact {
  name: string;
  phone: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly _http = inject(HttpClient);

  formContact(data: Partial<Contact> = {}) {
    const form = signal<FormGroup>(
      new FormGroup({
        name: new FormControl(data.name, [Validators.required]),
        phone: new FormControl(data.phone, [Validators.required]),
        email: new FormControl(data.email, [
          Validators.required,
          Validators.email,
        ]),
        message: new FormControl(data.message, [Validators.required]),
      })
    );
    return form;
  }


  sendMessage(data: Partial<Contact>) {
    return this._http.post<Contact>(`${environment.apiUrl}`, data);
  }
}
