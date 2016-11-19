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
var core_1 = require('@angular/core');
var UserFilter = (function () {
    function UserFilter() {
    }
    UserFilter.prototype.transform = function (users, keyword) {
        return users.filter(function (item) {
            return item.userName.indexOf(keyword) > -1
                || item.firstName.indexOf(keyword) > -1
                || item.middleName.indexOf(keyword) > -1
                || item.lastName.indexOf(keyword) > -1
                || item.position.positionName.indexOf(keyword) > -1;
        });
    };
    UserFilter = __decorate([
        core_1.Pipe({
            name: 'userFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], UserFilter);
    return UserFilter;
}());
exports.UserFilter = UserFilter;
//# sourceMappingURL=user.pipe.js.map