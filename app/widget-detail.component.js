System.register(['angular2/core', './widget'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, widget_1;
    var WidgetDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (widget_1_1) {
                widget_1 = widget_1_1;
            }],
        execute: function() {
            WidgetDetailComponent = (function () {
                function WidgetDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', widget_1.Widget)
                ], WidgetDetailComponent.prototype, "widget", void 0);
                WidgetDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'widget-detail',
                        template: "\n        <div *ngIf=\"widget\">\n            <h2>{{widget.name}} details!</h2>\n            <div><label>id: </label>{{widget.id}}</div>\n            <div>\n                <label>name: </label>\n                <input [(ngModel)]=\"widget.name\" placeholder=\"name\"/>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], WidgetDetailComponent);
                return WidgetDetailComponent;
            }());
            exports_1("WidgetDetailComponent", WidgetDetailComponent);
        }
    }
});
//# sourceMappingURL=widget-detail.component.js.map