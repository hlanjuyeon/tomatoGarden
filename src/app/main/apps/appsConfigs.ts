import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
import ContactsAppConfig from './contacts/ContactsAppConfig';
import ExpenseAppConfig from './expense/ExpenseAppConfig';

const appsConfigs: FuseRouteConfigsType = [
    ContactsAppConfig,
    ExpenseAppConfig,
];

export default appsConfigs;
