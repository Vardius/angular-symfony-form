/**
 * This file is part of the angular-symfony-form package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ValidatorController} from "./../controllers/ValidatorController";

export class ValidatorComponent {
    constructor() {
        this.require = {
            formCtrl: '^form'
        };
        this.bindings = {
            field: "@",
            form: "=",
            model: "=",
            errors: "="
        };
        this.template = require('./../views/validator.html');
        this.controller = ValidatorController;
    }
}
