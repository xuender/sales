import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerDividers } from './customer-dividers';

@NgModule({
  declarations: [
    CustomerDividers,
  ],
  imports: [
    IonicPageModule.forChild(CustomerDividers),
  ],
  exports: [
    CustomerDividers
  ]
})
export class CustomerDividersModule {}
