import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Customer } from '../sales/customer';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
	customers: Customer[];
	constructor(public http: Http) {
		console.debug('CustomerService Provider');
		this.customers = [
			{
				id: '1',
				name: '张三'
			},
			{
				id: '2',
				name: '长三'
			},
		];
	}

}
