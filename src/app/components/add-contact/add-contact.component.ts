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
  public errorMessage: string | undefined;

  constructor (private phoneBookService: PhoneBookService) { }
  ngOnInit() {
    this.phoneBookService.getContact().subscribe(contact => {
      this.contact = contact;
    })
  }

  addContact() {
    const newContact: contactInfo = {
      name: this.newContactName,
      contactNumber: this.newContactNumber,
    };
  
  const contactExists = this.contact.some(
    (contactInfo) => 
    contactInfo.name === this.newContactName || 
    contactInfo.contactNumber === this.newContactNumber
  );
 

  if (!contactExists) {
    this.contact.push(newContact);
  } else {
    this.errorMessage = "The name or phone number is already exist. You can update the data below.";
  }
}

  


}
