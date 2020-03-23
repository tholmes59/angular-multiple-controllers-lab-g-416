function StaffController() {
	var vm = this;

	vm.name = 'Bob Holmes';
	vm.email = 'bob@b.com';
	vm.phone = '098-765-4321';

	vm.changeName = function () {
		vm.name = 'Larry';
	};
}

angular
	.module('app')
	.controller('StaffController', StaffController);