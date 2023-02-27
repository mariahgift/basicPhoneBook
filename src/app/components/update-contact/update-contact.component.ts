import { Component } from '@angular/core';
import { contactInfo } from 'src/app/interfaces/contact-info';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent {
   contact: contactInfo[] = [];

  constructor (private phoneBookService: PhoneBookService) { }

  ngOnInit() {
    this.phoneBookService.getContact().subscribe(contact => {
      this.contact = contact;
    })
  }

  updateContactDetails?: contactInfo;
  updateContact(contact: contactInfo) {
    this.updateContactDetails = contact;
  }
  
}
