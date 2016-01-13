(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = [];

    function AppController() {
        var vm = this;

        vm.username = null;

        vm.errors = null;
        vm.symfonyForm = 'fos_user_registration_form';

        vm.register = register;

        function register() {
            //registered
        }
    }

})();
