/**
 * This file is part of the angular-symfony-form package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class ValidatorController {

    constructor($scope) {
        this.message = '';

        $scope.$watch(() => { return this.errors }, this.onErrors.bind(this));
        $scope.$watch(() => { return this.model }, this.onModel.bind(this));
    }

    onErrors(newValue, oldValue) {
        if (newValue == oldValue) {
            return;
        }

        if (newValue && this.errors) {
            this.message = this.errors[this.form + '_' + this.field];
            if (this.message) {
                this.formCtrl[this.field].$invalid = true;
                this.formCtrl[this.field].$touched = true;
                this.formCtrl[this.field].$error['symfony'] = true;
            }
        } else {
            delete this.formCtrl[this.field].$error['symfony'];
        }
    }

    onModel(newValue, oldValue) {
        if (newValue == oldValue) {
            return;
        }

        if (this.model && this.formCtrl[this.field].$error['symfony']) {
            delete this.formCtrl[this.field].$error['symfony'];
        }
    }
}

ValidatorController.$inject = ['$scope'];
