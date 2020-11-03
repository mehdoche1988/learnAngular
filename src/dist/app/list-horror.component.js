"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_horror_1 = require("./mock-horror");
var router_1 = require("@angular/router");
var ListHorrorComponent = /** @class */ (function () {
    function ListHorrorComponent(router) {
        this.router = router;
        this.horrors = null;
    }
    ListHorrorComponent.prototype.ngOnInit = function () {
        this.horrors = mock_horror_1.HORRORS;
    };
    ListHorrorComponent.prototype.selectHorror = function (horror) {
        console.log('Vous avez selectionné ' + horror.name);
        var link = ['/horror', horror.id];
        this.router.navigate(link);
    };
    ListHorrorComponent = __decorate([
        core_1.Component({
            selector: 'list-horror',
            templateUrl: './app/list-horror.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ListHorrorComponent);
    return ListHorrorComponent;
}());
exports.ListHorrorComponent = ListHorrorComponent;
//# sourceMappingURL=list-horror.component.js.map