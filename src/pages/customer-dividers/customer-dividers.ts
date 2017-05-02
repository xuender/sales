import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CustomerService } from '../../providers/customer-service';
import { CustomerGroup } from './customer-group';
import { Customer } from '../../sales/customer';

import pinyin from 'pinyin';
import { find, each, sortBy } from 'underscore';

@IonicPage()
@Component({
	selector: 'page-customer-dividers',
	templateUrl: 'customer-dividers.html',
})
export class CustomerDividers {
	groups: CustomerGroup[] = [];
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private customerService: CustomerService
	) {
		each(this.customerService.customers, (customer: Customer) => {
			each(pinyin(customer.name[0], {
				style: pinyin.STYLE_FIRST_LETTER,
				heteronym: true,
			})[0], (group: string) => this.add(group.toUpperCase(), customer));
		});
		this.groups = sortBy(this.groups, 'name');
	}

	private add(group: string, customer: Customer) {
		console.debug(group, customer);
		const g = find(this.groups, (g: CustomerGroup) => g.name === group);
		if (g) {
			g.items.push(customer);
		} else {
			this.groups.push({
				name: group,
				items: [customer]
			});
		}
	}

	ionViewDidLoad() {
		console.debug('ionViewDidLoad CustomerDividers');
	}

}
