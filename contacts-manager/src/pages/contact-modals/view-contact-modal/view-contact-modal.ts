import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name: 'view-contact-modal',
  segment: 'view-contact-modal'
})
@Component({
  selector: 'page-view-contact-modal',
  templateUrl: 'view-contact-modal.html',
})
export class ViewContactModalPage {
  contact: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
  }

  deleteContact(contact) {
    this.viewCtrl.dismiss('delete', contact);
  }

  editContact(contact) {
    this.viewCtrl.dismiss('edit', contact);
  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

  setModalData() {
    this.contact = this.navParams.get('contactData');
  }

  ionViewDidLoad() {
    this.setModalData();
    console.log(this.contact);
  }

}
