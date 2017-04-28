import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerSorter } from './customer-sorter';

@NgModule({
  declarations: [
    CustomerSorter,
  ],
  imports: [
    IonicPageModule.forChild(CustomerSorter),
  ],
  exports: [
    CustomerSorter
  ]
})
export class CustomerSorterModule {}
