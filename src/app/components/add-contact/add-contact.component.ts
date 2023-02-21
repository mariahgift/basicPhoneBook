import { Component } from '@angular/core';
import { contactInfo } from 'src/app/interfaces/contact-info';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  contact: contactInfo[] = [];

  newContactName = '';
  newContactNumber = '';
  newContact = '';


  constructor (private phoneBookService: PhoneBookService) { }


  ngOnInit() {
    this.phoneBookService.getContact().subscribe(contact => {
      this.contact = contact;
    })
  }

  addContact() {
    //const contact = this.phoneBookService.getContact();
    this.contact.push({name: this.newContactName, contactNumber: this.newContactNumber});
    this.newContact = '';
  }
}
