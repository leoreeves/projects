import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name: 'manage-contact-modal',
  segment: 'manage-contact-modal'
})
@Component({
  selector: 'page-manage-contact-modal',
  templateUrl: 'manage-contact-modal.html',
})
export class ManageContactModalPage {
  modalType: string;
  contactForm: FormGroup;
  contactData: any;
  name: string;
  existingContact: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
    })
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  saveContact() {
    if (this.contactForm.valid) {
      if (this.existingContact) {
        this.viewCtrl.dismiss(this.contactData, this.contactForm.value);
      } else {
        this.viewCtrl.dismiss(this.contactForm.value);
      }
    }
  }

  setModalType() {
    this.modalType = this.navParams.get('modalType');

    if (this.modalType == 'Edit') {
      this.setContactFormValues();
    }
  }

  setContactFormValues() {
    this.existingContact = true;
    this.contactData = this.navParams.get('contactData');
    this.contactForm.patchValue({
      name: this.contactData.name,
      email: this.contactData.email,
      phone: this.contactData.phone,
      address: this.contactData.email,
    })
  }

  ionViewDidLoad() {
    this.setModalType();
  }
}
