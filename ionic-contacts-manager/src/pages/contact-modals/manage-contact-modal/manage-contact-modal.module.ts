import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageContactModalPage} from './manage-contact-modal';

@NgModule({
  declarations: [
    ManageContactModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageContactModalPage),
  ],
})
export class ManageContactModalPageModule {}
