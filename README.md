angular-symfony-form
======================

Form components for Angular Js, symfony2 form validations.


For usage and examples go to app directory

## Installation

Install with bower:

```bash
$ bower install angular-symfony-form --save
```

Install with npm:

```bash
$ npm install angular-symfony-form
```

Load the `vSymfonyForm` module in your app.

```javascript
angular.module('app', ['vSymfonyForm']);
```

## Usage Example

In case of see `registration form` `user field` validation:

Add to your controller properties:
```javascript
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
```

Setup form fields validation:

```html
<form name="registerForm" ng-submit="vm.register()" role="form">
    <div class="form-group required"
         ng-class="{ 'has-error': registerForm.username.$touched && registerForm.username.$invalid }">
        <div class="row">
            <label class="control-label col-lg-4" for="username">Username:</label>
            <div class="col-lg-8">
                <input
                        ng-model="vm.username"
                        ng-minlength="5"
                        type="text"
                        name="username"
                        id="username"
                        class="form-control custom"
                        required
                />
            </div>
            <div class="col-lg-12">
                <validator symfony-form="vm.symfonyForm" field="username" model="vm.username" errors="vm.errors"></validator>
            </div>
        </div>
    </div>

    <div class="form-actions text-center">
        <button

                ng-disabled="registerForm.$invalid"
                class="btn btn-custom"
                data-backdrop="static"
                data-keyboard="false"
                type="submit"
        >
            Sign Up
        </button>
    </div>
</form>
```