import { Injectable } from '@angular/core';
import { Contact, ContactList } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  storage: ContactList = {}

  add(value: Contact) {
    const key = `${value.firstName}`
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  viewAllContact(): any{
    let contactKeys = Object.keys(sessionStorage);
    for(let key of contactKeys){
      this.storage[key] = sessionStorage.getItem(key)
    }
    console.log(this.storage);
    return contactKeys;
  }
}
