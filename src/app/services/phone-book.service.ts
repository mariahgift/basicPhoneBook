import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contactInfo } from '../interfaces/contact-info';
import { CONTACTINFO } from '../mock-data/mock-contact-info';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  contactInfo = CONTACTINFO;
  constructor() { }


  getContact(): Observable<contactInfo[]> {
    return of(this.contactInfo);
  }

  updateContactDetails?: contactInfo;
  updateContact(contact: contactInfo): Observable<contactInfo> {  
    return of(this.updateContactDetails = contact);
  }
}
