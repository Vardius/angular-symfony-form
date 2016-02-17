/**
 * This file is part of the symfony-form package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
(function () {
    'use strict';

    var symfonyForm = angular
        .module('symfony-form', [
            'ngMessages'
        ])
        .directive('validator', validator)
        .run(run)
        ;

    function run($templateCache, $http) {
        $http.get('views/messages.view.html').then(function (response) {
                $templateCache.put('error-messages', response.data);
            }
        );
    }

    function validator() {
        return {
            restrict: "E",
            templateUrl: 'views/validator.view.html',
            scope: {
                field: "@",
                symfonyForm: "=",
                model: "=",
                errors: "="
            },
            require: ['^form'],

            link: link
        };

        function link(scope, element, attrs, $rootScope) {
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

    exports.symfonyForm = symfonyForm;
})();
