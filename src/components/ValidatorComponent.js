/**
 * This file is part of the angular-repository package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class ValidatorComponent {
    constructor() {
        this.template = require('./../views/validator.html');
        this.restrict = "E";
        this.bind = {
            field: "@",
            symfonyForm: "=",
            model: "=",
            errors: "="
        };
        this.require = ['^form'];
        this.link = (scope, element, attrs, $rootScope) => {
            scope.form = $rootScope[0];

            scope.$watch('errors', function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                if (newValue && scope.errors) {
                    scope.message = scope.errors[scope.symfonyForm + '_' + scope.field];
                    if (scope.message) {
                        scope.form[scope.field].$invalid = true;
                        scope.form[scope.field].$touched = true;
                        scope.form[scope.field].$error['symfony'] = true;
                    }
                } else {
                    delete scope.form[scope.field].$error['symfony'];
                }
            });

            scope.$watch('model', function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                if (scope.model && scope.form[scope.field].$error['symfony']) {
                    delete scope.form[scope.field].$error['symfony'];
                }
            });
        }
    }
}