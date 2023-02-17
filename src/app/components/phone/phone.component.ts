import { Component } from '@angular/core';
import { contactInfo } from 'src/app/interfaces/contact-info';
import { CONTACTINFO } from 'src/app/mock-data/mock-contact-info';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  contactInfo = CONTACTINFO;

  newContactName = '';
  newContactNumber = '';
  newContact = '';

  addContact() {
    this.contactInfo.push({name: this.newContactName, contactNumber: this.newContactNumber});
    this.newContact = '';
  }

  updateContact(contactName: contactInfo) {
   let indexToUpdate = this.contactInfo.indexOf(contactName);
   contactName.name = 'Emma Watson';
   contactName.contactNumber = '090909090';
   this.contactInfo[indexToUpdate] = contactName;

  }

  deleteContact(contactName: contactInfo) {
    let indexToDelete = this.contactInfo.indexOf(contactName);
    this.contactInfo.splice(indexToDelete, 1);
  }

}
