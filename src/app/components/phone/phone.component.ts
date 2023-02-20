import { Component } from '@angular/core';
import { contactInfo } from 'src/app/interfaces/contact-info';
import { CONTACTINFO } from 'src/app/mock-data/mock-contact-info';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {
  contactInfo = CONTACTINFO;

  newContactName = '';
  newContactNumber = '';
  newContact = '';
  updateContactDetails?: contactInfo;

  addContact() {
    this.contactInfo.push({name: this.newContactName, contactNumber: this.newContactNumber});
    this.newContact = '';
  }

  updateContact(contact: contactInfo) {
    this.updateContactDetails = contact;
  }

  deleteContact(contactName: contactInfo) {
    let indexToDelete = this.contactInfo.indexOf(contactName);
    this.contactInfo.splice(indexToDelete, 1);
  }

}
