(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ngOrgChart = global.ngOrgChart || {}),global.ng.core,global.ng.common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var OrgChartComponent = (function () {
    function OrgChartComponent() {
        this.hasManager = false;
    }
    return OrgChartComponent;
}());
OrgChartComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ng-org-chart',
                template: "<oc-employee *ngIf=\"topEmployee\" [employee]=\"topEmployee\" [hasManager]=\"hasManager\"></oc-employee> <div class=\"oc-reports\"> <ng-container *ngFor=\"let employee of topEmployee?.subordinates; first as isFirst; last as isLast\"> <div class=\"oc-org-container\"> <div class=\"oc-h-bar-container\"> <div class=\"oc-h-bar oc-border\" [style.border-color]=\"isFirst?'transparent':''\"></div> <div class=\"oc-border\"></div> <div class=\"oc-h-bar oc-border\" [style.border-color]=\"isLast?'transparent':''\"></div> </div> <ng-org-chart [topEmployee]=\"employee\" [hasManager]=\"true\"></ng-org-chart> </div> </ng-container> </div> ",
                styles: [":host { display: flex; flex-direction: column; align-items: center; } .oc-reports { display: flex; flex: 1; } .oc-org-container { display: flex; flex-direction: column; } .oc-h-bar-container { display: flex; } .oc-h-bar { flex: 1; } "]
            },] },
];
/**
 * @nocollapse
 */
OrgChartComponent.ctorParameters = function () { return []; };
OrgChartComponent.propDecorators = {
    'topEmployee': [{ type: _angular_core.Input },],
    'hasManager': [{ type: _angular_core.Input },],
};

var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.hasManager = false;
    }
    return EmployeeComponent;
}());
EmployeeComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'oc-employee',
                template: "<div class=\"oc-h-bar oc-border\" *ngIf=\"hasManager\"></div> <div class=\"oc-box oc-border oc-background\"> <div class=\"oc-img\"><img src=\"{{employee?.img}}\"/></div> <div class=\"oc-content\"><div class=\"oc-name\">{{employee?.name}}</div> <div class=\"oc-designation\">{{employee?.designation}}</div> </div> </div> <div class=\"oc-h-bar oc-border\" *ngIf=\"employee?.subordinates.length\"></div>",
                styles: [":host { margin: 0 1em; display: flex; flex-direction: column; align-items: center; } .oc-box { padding: 0.25em 1em; display: flex; flex-direction: row; align-items: center; } .oc-h-bar { height: 0.5em; } .oc-content{ display:flex; flex-direction:column; padding: 0.25em 0.5em; } "]
            },] },
];
/**
 * @nocollapse
 */
EmployeeComponent.ctorParameters = function () { return []; };
EmployeeComponent.propDecorators = {
    'employee': [{ type: _angular_core.Input },],
    'hasManager': [{ type: _angular_core.Input },],
};

var OrgChartModule = (function () {
    function OrgChartModule() {
    }
    return OrgChartModule;
}());
OrgChartModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [OrgChartComponent, EmployeeComponent],
                exports: [OrgChartComponent]
            },] },
];
/**
 * @nocollapse
 */
OrgChartModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

exports.OrgChartComponent = OrgChartComponent;
exports.OrgChartModule = OrgChartModule;
exports.ɵa = EmployeeComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-org-chart.umd.js.map
