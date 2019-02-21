import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import { Contact } from '../../../models/contact';

@IonicPage({
  name: 'view-contact-modal',
  segment: 'view-contact-modal'
})
@Component({
  selector: 'page-view-contact-modal',
  templateUrl: 'view-contact-modal.html',
})
export class ViewContactModalPage implements OnInit {
  contact: Contact;
  contactNameOnly: boolean;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
  ) {}

  ngOnInit() {
    this.getModalData();
  }

  getModalData() {
    this.contact = this.navParams.get('contactData');
    if (this.contact.email === '' && this.contact.phone === '' && this.contact.address === '') {
      this.contactNameOnly = true;
    }
  }

  deleteContact(contact: Contact) {
    this.viewCtrl.dismiss({ method: 'delete', contact });
  }

  editContact(contact: string) {
    this.viewCtrl.dismiss({method: 'edit', contact});
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
