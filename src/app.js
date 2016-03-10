/**
 * This file is part of the angular-symfony-form package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ValidatorComponent} from "./components/ValidatorComponent";
import {run as templateRun} from "./configs/template";

(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['angular'], factory);
    } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = factory(require('angular'));
    } else {
        return factory(root.angular);
    }
}(this, repository));

function repository(angular) {
    'use strict';

    var moduleName = 'vSymfonyForm';

    angular
        .module(moduleName, [
            'ngMessages'
        ])
        .component('validator', new ValidatorComponent())
        .run(templateRun)
    ;

    return moduleName;
}