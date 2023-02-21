import { Component } from '@angular/core';
import { contactInfo } from 'src/app/interfaces/contact-info';
import { CONTACTINFO } from 'src/app/mock-data/mock-contact-info';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {
  contact: contactInfo[] = [];

  constructor(private phoneBookService: PhoneBookService) { }

  ngOnInit() {
    this.phoneBookService.getContact().subscribe(contact => {
      this.contact = contact;
    })
  }

  updateContactDetails?: contactInfo;

  updateContact(contact: contactInfo) {
    this.updateContactDetails = contact;
  }

  deleteContact(contactName: contactInfo) {
    let indexToDelete = this.contactInfo.indexOf(contactName);
    this.contactInfo.splice(indexToDelete, 1);
  }

}
