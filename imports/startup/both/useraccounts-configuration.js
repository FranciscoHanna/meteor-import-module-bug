// Packages
import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import '../../ui/pages/login-page.js'

AccountsTemplates.configure({
	  forbidClientAccountCreation: false,
    onLogoutHook() {
      FlowRouter.go('/login')
    }
});

AccountsTemplates.configureRoute('signIn', {
	name: '/login',
	path: '/login',
	template: 'Login_page',
	layoutTemplate: 'Login_page',
	redirect: '/',
});
