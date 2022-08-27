import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'

import { IonicPage, NavParams, ViewController } from 'ionic-angular'
import { Contact } from '../../../models/contact'

@IonicPage({
  name: 'manage-contact-modal',
  segment: 'manage-contact-modal',
})
@Component({
  selector: 'page-manage-contact-modal',
  templateUrl: 'manage-contact-modal.html',
})
export class ManageContactModalPage implements OnInit {
  modalType: string
  contactForm: FormGroup
  contactData: Contact
  name: string
  existingContact = false
  invalidForm = false

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {}

  ngOnInit() {
    this.initialiseContactForm()
    this.setModalType()
  }

  initialiseContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
    })
  }

  setModalType() {
    this.modalType = this.navParams.get('modalType')

    if (this.modalType === 'Edit') {
      this.setContactFormValues()
    }
  }

  setContactFormValues() {
    this.existingContact = true
    this.contactData = this.navParams.get('contactData')
    this.contactForm.patchValue({
      name: this.contactData.name,
      email: this.contactData.email,
      phone: this.contactData.phone,
      address: this.contactData.address,
    })
  }

  closeModal() {
    this.viewCtrl.dismiss()
  }

  saveContact() {
    const contactFormValues = this.contactForm.value

    if (this.contactForm.valid) {
      if (this.existingContact) {
        this.viewCtrl.dismiss({ originalContactData: this.contactData, updatedContactData: contactFormValues })
      } else {
        this.viewCtrl.dismiss({ newContactData: contactFormValues })
      }
    } else {
      this.invalidForm = true
      setTimeout(() => (this.invalidForm = false), 2000)
    }
  }
}
