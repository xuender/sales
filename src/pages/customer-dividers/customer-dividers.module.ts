import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerDividers } from './customer-dividers';
import { CustomerService } from '../../providers/customer-service';
import { HttpModule } from '@angular/http';

@NgModule({
	declarations: [
		CustomerDividers,
	],
	imports: [
		HttpModule,
		IonicPageModule.forChild(CustomerDividers),
	],
	exports: [
		CustomerDividers
	],
	providers: [
		CustomerService,
	]
})
export class CustomerDividersModule {}
