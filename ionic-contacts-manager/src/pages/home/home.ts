import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public storage: Storage
  ) {
  }

  addMockContacts() {
    this.contacts = [
      // 'Ludie Straley',
      // 'Vannessa Tilson',
      // 'Masako Manville',
      // 'Elva Neuner',
      // 'Lacy Paschal',
      // 'Branda Lipsky',
    ]
  }

  setContactsData() {
    console.log('set');
    this.storage.set('key', JSON.stringify(this.contacts))
      .then(() =>
        this.storage.get('key')
          .then((value) => {
            this.contacts = JSON.parse(value);
          })
      )
  }

  async getContactsData() {
    console.log('get')
    return await this.storage.get('key')
      .then((val) => {
        if (val) {
          val = JSON.parse(val);
          this.contacts = val;
        }
      })
  }

  sortContacts() {
    this.contacts = this.contacts.sort((a, b) => a.name.localeCompare(b));
  }

  openAddContactModal() {
    const addContactModal = this.modalCtrl.create('manage-contact-modal', { modalType: 'Add', contactData: '' });
    addContactModal.present();
    addContactModal.onDidDismiss(data => {
      if (data) {
        this.addContact(data);
      }
    });
  }

  openEditContactModal(contact) {
    const editContactModal = this.modalCtrl.create('manage-contact-modal', { modalType: 'Edit', contactData: contact });
    editContactModal.present();
    editContactModal.onDidDismiss((originalContact, updatedContact) => {
      if (originalContact && updatedContact) {
        this.updateContact(originalContact, updatedContact);
      }
    });
  }

  openViewContactModal(contact) {
    const viewContactModal = this.modalCtrl.create('view-contact-modal', { contactData: contact });
    viewContactModal.present();
    viewContactModal.onDidDismiss((method, contact) => {
      if (method === 'delete') {
        this.deleteContact(contact);
      } else if (method === 'edit') {
        this.openEditContactModal(contact);
      }
    })
  }

  addContact(details) {
    if (details) {
      this.contacts.push(details);
      this.setContactsData();
      this.sortContacts();
    }
  }

  updateContact(originalContact, updatedContact) {
    if (updatedContact) {
      this.contacts = this.contacts.filter(contact => contact !== originalContact);
      this.addContact(updatedContact);
    }
  }

  deleteContact(contact) {
    if (contact) {
      this.contacts = this.contacts.filter(contacts => contacts != contact);
      this.setContactsData();
      console.log(`${contact.name} deleted`);
    }
  }

  filterContacts(ev) {
    this.getContactsData()
      .then(() => {
        console.log(this.contacts);
        const val = ev.target.value;

        if (val && val.trim() !== '') {
          this.contacts = this.contacts.filter(contact => contact.name.toLowerCase().includes(val.toLowerCase()));
        }
      })
  }

  ionViewDidLoad() {
    this.getContactsData();
    this.sortContacts();
  }
}
