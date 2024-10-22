import { lazy } from 'react';
import ExpenseItemAdd from './ExpenseAdd/ExpenseItemAdd';


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
			path: 'apps/expense',
			element: <ExpenseApp />,
			children: [
				{
					path: ':id/add',
					element: <ExpenseItemAdd />
				},
			]
		},
		// {
		// 	path: 'apps/expense/add',
		// 	element: <ExpenseItemAdd />
		// },
	]
};

export default ExpenseAppConfig;
