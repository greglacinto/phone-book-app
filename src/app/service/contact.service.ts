import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  add(value: Contact) {
    const key = `${value.firstName}`
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  view(key: string){
    return sessionStorage.getItem(key);
  }
}
