import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Contact } from '../../models/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  contacts: Contact[] = [];

  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private toastCtrl: ToastController,
  ) {}

  ngOnInit() {
    this.getContactsData();
    this.addMockContacts();
    this.sortContactsByName();
  }

  async getContactsData() {
    return await this.storage.get('key')
      .then((val) => {
        if (val) {
          val = JSON.parse(val);
          this.contacts = val;
        }
      })
  }

  sortContactsByName() {
    this.contacts = this.contacts.sort((a, b) => a.name.localeCompare(b.name));
  }

  addMockContacts() {
    this.contacts = [
      {
        name: 'Ludie Straley',
        email: '',
        phone: '07700 900526',
        address: ''
      },
      {
        name: 'Vannessa Tilson',
        email: '',
        phone: '07430 230572',
        address: ''
      },
      {
        name: 'Masako Manville',
        email: '',
        phone: '07302 900512',
        address: ''
      },
      {
        name: 'Ludie Straley',
        email: '',
        phone: '07340 933542',
        address: ''
      }
    ]
  }

  setContactsStorageData() {
    this.storage.set('key', JSON.stringify(this.contacts))
      .then(() =>
        this.storage.get('key')
          .then((value) => {
            this.contacts = JSON.parse(value);
          })
      )
  }

  openManageContactModal(modalType: string, contactData?: Contact) {
    const openManageContactModal = this.modalCtrl.create('manage-contact-modal', { modalType, contactData });
    openManageContactModal.present();
    openManageContactModal.onDidDismiss((data) => {
      if (data.updatedContactData) {
        this.updateContact(data.originalContactData, data.updatedContactData);
      }
      if (data.newContactData) {
        this.addContact(data.newContactData);
      }
    });
  }

  openViewContactModal(contact: Contact) {
    const viewContactModal = this.modalCtrl.create('view-contact-modal', { contactData: contact });
    viewContactModal.present();
    viewContactModal.onDidDismiss((data) => {
      if (data) {
        if (data.method === 'delete') {
          this.deleteContact(data.contact);
        } else if (data.method === 'edit') {
          this.openManageContactModal(data.contact);
        }
      }
    })
  }

  addContact(contact: Contact) {
    if (contact) {
      this.contacts.push(contact);
      this.sortContactsByName();
      this.setContactsStorageData();
      this.presentToast('Loading...').then(() => this.presentToast('New contact created'));
    }
  }

  updateContact(originalContact: Contact, updatedContact: Contact) {
    if (updatedContact) {
      this.contacts = this.contacts.filter(contact => contact !== originalContact);
      this.addContact(updatedContact);
    }
  }

  deleteContact(contact: Contact) {
    if (contact) {
      this.contacts = this.contacts.filter(contacts => contacts != contact);
      this.setContactsStorageData();
      this.presentToast(`${contact.name} was deleted`)
    }
  }

  filterContacts(event) {
    this.getContactsData()
      .then(() => {
        const val = event.target.value;

        if (val && val.trim() !== '') {
          this.contacts = this.contacts.filter(contact => contact.name.toLowerCase().includes(val.toLowerCase()));
        }
      })
  }

  presentToast(message: string): Promise<any> {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2500,
    });
    return toast.present();
  }
}
