import { lazy } from 'react';


const ExpenseApp = lazy(() => import('./ExpenseApp'));

/**
 * The ContactsApp configuration.
 */
const ExpenseAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/expense',
			element: <ExpenseApp />,
			children: [
				// {
				// 	path: ':id',
				// 	element: <ContactView />
				// },
				// {
				// 	path: ':id/edit',
				// 	element: <ContactForm />
				// }
			]
		}
	]
};

export default ExpenseAppConfig;
