import { Component, OnInit } from '@angular/core';
import { Contact, ContactKeys } from './model/contact';
import { ContactService } from './service/contact.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'phone-book-app';
  contactkeys = ''


  constructor(private contactService: ContactService){}

  ngOnInit(){
    this.contactkeys = this.contactService.viewAllContact();;
  }

  // .(data => {
  //   this.contactList = data.sort((a, b) => {
  //     return a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
  //   })
  // })
}
