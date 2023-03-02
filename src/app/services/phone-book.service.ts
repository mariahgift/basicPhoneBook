import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contactInfo } from '../interfaces/contact-info';
import { CONTACTINFO } from '../mock-data/mock-contact-info';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {
  contact: contactInfo[] = [];
  contactInfo = CONTACTINFO;
  
  constructor() { }

  //read
  getContact(): Observable<contactInfo[]> {
    return of(this.contactInfo);
  }

  //create
  create(contact: contactInfo): Observable<contactInfo> {
    this.contact.push(contact);
    return of(contact);
  }

  updateContactDetails?: contactInfo;
  updateContact(contact: contactInfo): Observable<contactInfo> {  
    return of(this.updateContactDetails = contact);
  }

  deleteContact(contactName: contactInfo) {
    let indexToDelete = this.contact.indexOf(contactName);
    this.contact.splice(indexToDelete, 1);
  }
}
