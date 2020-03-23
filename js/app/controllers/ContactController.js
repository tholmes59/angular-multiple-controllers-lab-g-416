function ContactController() {
	var vm = this;

	vm.name = 'Tom Holmes';
	vm.email = 'tom@t.com';
	vm.phone = '123-456-7890';

	vm.changeName = function () {
		vm.name = 'Jack';
	};
}

angular
	.module('app')
	.controller('ContactController', ContactController);