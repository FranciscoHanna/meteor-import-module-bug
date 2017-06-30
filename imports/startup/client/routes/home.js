import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/* Importamos estos archivos .js para usar los templates necesarios */
import '../../../ui/layouts/app-body.js';

/* Definimos las rutas de la app y las acciones que se llevan a cabo cuando se golpean las URL */
FlowRouter.route('/', {
	name : 'App.home',
	action() {
		BlazeLayout.render('App_body', {body_main: ''})
	}
});
