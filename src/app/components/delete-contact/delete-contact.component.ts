import { Component } from '@angular/core';
import { contactInfo } from 'src/app/interfaces/contact-info';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent {
  contact: contactInfo[] = [];

  constructor(private phoneBookService: PhoneBookService) { }

  ngOnInit() {
    this.phoneBookService.getContact().subscribe(contact => {
      this.contact = contact;
    })
  }

  deleteContact(contactName: contactInfo) {
    let indexToDelete = this.contact.indexOf(contactName);
    this.contact.splice(indexToDelete, 1);
  }
}
