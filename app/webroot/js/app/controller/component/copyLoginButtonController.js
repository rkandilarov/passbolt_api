steal(
    MAD_ROOT + '/controller/component/buttonController.js'
).then(function ($) {

	/*
	 * @class passbolt.controller.component.CopyLoginButtonController
	 * @inherits {mad.controller.component.ButtonController}
	 * @parent index
	 * 
	 * 
	 * @constructor
	 * Instanciate a copy login button controller
	 * 
	 * @param {HTMLElement} element the element this instance operates on.
	 * @param {Object} [options] option values for the controller.  These get added to
	 * this.options and merged with defaults static variable 
	 * @return {passbolt.controller.component.CopyLoginButtonController}
	 */
	mad.controller.component.ButtonController.extend('passbolt.controller.component.CopyLoginButtonController', /** @static */ {

		'defaults': {
			'label': 'Copy Login To Clipboard',
			'cssClasses': ['with_icon', 'copy_login'],
			'tag': 'button'
		}

	}, /** @prototype */ {

		/* ************************************************************** */
		/* LISTEN TO THE VIEW EVENTS */
		/* ************************************************************** */

		/**
		 * Observe when the mouse leave the component
		 * @param {jQuery} element The source element
		 * @param {Event} event The jQuery event
		 * @return {void}
		 */
		'click': function () {
			mad.eventBus.trigger('copy_login_clipboard', this.value);
		},

		/* ************************************************************** */
		/* LISTEN TO THE APP EVENTS */
		/* ************************************************************** */

		/**
		 * Observe when a resource is focused
		 * @param {jQuery} element The source element
		 * @param {Event} event The jQuery event
		 * @param {string} resource The focused resource
		 * @return {void}
		 */
		'{mad.eventBus} resource_focused': function (element, evt, resource) {
			if (this.value == resource.id) {
				this.setState('ready');
			}
		},

		/**
		 * Observe when a resource is unfocused
		 * @param {jQuery} element The source element
		 * @param {Event} event The jQuery event
		 * @param {string} resource The unfocused resource
		 * @return {void}
		 */
		'{mad.eventBus} resource_unfocused': function (element, evt, resource) {
			if (this.value == resource.id) {
				this.setState('hidden');
			}
		}

	});
});