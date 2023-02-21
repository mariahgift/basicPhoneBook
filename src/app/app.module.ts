import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    AddContactComponent,
    UpdateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
