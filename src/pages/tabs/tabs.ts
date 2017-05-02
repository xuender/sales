import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CustomerDividers } from '../customer-dividers/customer-dividers';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = CustomerDividers;
	// tab2Root = AboutPage;
	tab3Root = ContactPage;

	constructor() {

	}
}
