import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerInfo } from './customer-info';

@NgModule({
  declarations: [
    CustomerInfo,
  ],
  imports: [
    IonicPageModule.forChild(CustomerInfo),
  ],
  exports: [
    CustomerInfo
  ]
})
export class CustomerInfoModule {}
