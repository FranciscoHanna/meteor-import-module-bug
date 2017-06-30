// Packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Templates
import './app-body.html';

Template.App_body.helpers({
	username() {
		return Meteor.user().username
	}
});
Template.App_body.onCreated(function() {
	if(!Meteor.userId()){
		FlowRouter.go('/login')
	}
});
